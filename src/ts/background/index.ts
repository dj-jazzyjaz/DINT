import { createStore } from "redux";
// import reducers, { IAppState, loadState } from "./store";
import reducers from "./store";
// import { wrapStore, Store } from "react-chrome-redux";
import { wrapStore } from "react-chrome-redux";
// import { configureApp } from './AppConfig';
import { persistStore, persistReducer } from "redux-persist";
import storage from 'redux-persist/lib/storage' // defaults to localStorage for web

// const preloadedState = loadState();
// const store: Store<IAppState> = createStore(reducers, preloadedState);

// configureApp(store);

const persistConfig = {
	key: 'root',
	storage,
  }
  
const persistedReducer = persistReducer(persistConfig, reducers)

let store = createStore(persistedReducer)

let persistor = persistStore(store)

wrapStore(store, {
	portName: 'ExPort' // Communication port between the background component and views such as browser tabs.
});
  
export default { store, persistor };

