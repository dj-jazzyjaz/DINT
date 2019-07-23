import * as React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { Store } from 'react-chrome-redux';
import PopupApp from './PopupApp';
import { PersistGate } from 'redux-persist/integration/react';
import storage from '../../background/index';

const store = new Store({
<<<<<<< HEAD
    portName: '3001' // Communication port between the background component and views such as browser tabs.
});
=======
    portName: 'ExPort' // Communication port between the background component and views such as browser tabs.
})
>>>>>>> generalUI

store.ready().then(() => {
    ReactDOM.render(
        <Provider store={store}>
            <PersistGate loading={null} persistor={storage.persistor}>
                <PopupApp />
            </PersistGate>
        </Provider>
        , document.getElementById('popup-root'))
});
