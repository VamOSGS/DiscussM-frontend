import React from 'react';
import ReactDOM from 'react-dom';
import { AppContainer } from 'react-hot-loader';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import configureStore from './store';
import Root from './components/Root';

const store = configureStore();
function render(Component) {
    ReactDOM.render(
        <AppContainer>
            <Provider store={store}>
                <BrowserRouter>
                    <Component />
                </BrowserRouter>
            </Provider>
        </AppContainer>,
        document.getElementById('root'),
    );
}

render(Root);
if (module.hot) {
    module.hot.accept();
    const updatedApp = require('./components/Root').default;
    render(updatedApp);
}
