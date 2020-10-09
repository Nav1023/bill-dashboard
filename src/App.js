import React from 'react';
import logo from './logo.svg';
import './App.css';
import Layout from './components/Layout';
import Header from './components/Header';
import BillList from './components/BillList';
import Store from './redux/Store';
import { Provider } from 'react-redux';

function App() {
  return (
    <Provider store={Store}>
      <Layout>
        <Header/>
        <BillList/>
      </Layout>
    </Provider>
  );
}

export default App;
