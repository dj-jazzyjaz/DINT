import { Reducer} from 'redux';
import { NotificationActions } from '../actions';
import { Product } from './product';

export type NotificationType = 'SIMILAR' | 'UNSUSTAINABLE' | 'NONE'

export interface INotification {
	notificationType?: NotificationType,
	product?: Product
}

const initialState: INotification = {
	notificationType: 'NONE'
};

const notification: Reducer<INotification, NotificationActions> = (state = initialState, action) => {
	const { payload } = action;
	switch (action.type) {
		case 'BUY':
			return initialState;

		case 'DONTBUY':
			return initialState;

		case 'NEWNOTIF':
			return {
				notificationType: payload ? payload.notificationType : 'NONE',
				product: payload && payload.product
			}
		default:
			return state;
	}
};

export default notification;