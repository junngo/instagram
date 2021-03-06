import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from "react-redux";
import { ConnectedRouter } from 'react-router-redux';
import store, { history } from "redux/configureStore"
import App from 'components/App';
//import "ReactotronConfig";
import I18n from "redux-i18n";
import { translations } from "translations";

ReactDOM.render(
  <Provider store={store}>
    <I18n translations={translations} initalLang="en" fallbackLang="en">
      <ConnectedRouter history={history}>
        <App />
      </ConnectedRouter>
    </I18n>
  </Provider>,
   document.getElementById('root')
);
