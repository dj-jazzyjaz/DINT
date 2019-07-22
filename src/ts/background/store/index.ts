import settings, { IAppSettings } from './reducers/settings';
import { combineReducers } from "redux";
import counter, { ICounter } from './reducers/counter';
import notification, {INotification} from './reducers/notification';

import "redux";
// Enhance the Action interface with the option of a payload. 
// While still importing the Action interface from redux.
declare module "redux" {
	export interface Action<T = any, P = any> {
		type: T;
		payload?: P;
	}
}

export interface IAppState {
	counter: ICounter;
	settings: IAppSettings;
	notification: INotification;
}

export const loadState = ():IAppState | undefined => {
	try {
		const serializedState = localStorage.getItem('appstate');
		if (serializedState === null) {
			return undefined;
		}
		return JSON.parse(serializedState);
	} catch (err) {
		return undefined;
	}
};

export const saveState = (appstate: IAppState, 
						  success: () => void = () => {}, 
						  error: (e: Error) => void = () => {}) => {
	try {
		const serializedState = JSON.stringify(appstate);
		localStorage.setItem('appstate', serializedState);
		success()
	} catch(e) {
		error(e)
	}
};

const reducers = combineReducers<IAppState>({
	counter,
	settings,
	notification
});

export default reducers;