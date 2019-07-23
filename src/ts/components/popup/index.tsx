import * as React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { Store } from 'react-chrome-redux';
import PopupApp from './PopupApp';

const store = new Store({
    portName: '3001' // Communication port between the background component and views such as browser tabs.
})

store.ready().then(() => {
    ReactDOM.render(
        <Provider store={store}>
            <PopupApp />
        </Provider>
        , document.getElementById('popup-root'))
});
