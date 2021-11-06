import React from 'react';
import ReactDOM from 'react-dom';
import 'antd/dist/antd.css';
import es_ES from 'antd/lib/locale/es_ES';

import './index.scss';
import Routes from './infrastructure/Routes';
import { Provider } from 'react-redux';
import { ConfigProvider } from 'antd';
import store from './infrastructure/Redux/store';

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <ConfigProvider locale={es_ES}>
        <Routes/>
      </ConfigProvider>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);
