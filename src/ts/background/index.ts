import { createStore } from "redux";
import reducers, { IAppState, loadState } from "./store";
import { wrapStore, Store } from "react-chrome-redux";
import { configureApp } from './AppConfig';
//import { persistStore } from "redux-persist";

const preloadedState = loadState();
export const store: Store<IAppState> = createStore(reducers, preloadedState);

configureApp(store);

wrapStore(store, {
	portName: 'ExPort' // Communication port between the background component and views such as browser tabs.
});

//const persistor = persistStore(store);

