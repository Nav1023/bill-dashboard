import React from 'react';
import logo from './logo.svg';
import './App.css';
import Layout from './components/Layout';
import Header from './components/Header';
import Store from './redux/Store';
import { Provider } from 'react-redux';
import Dashboard from './components/Dashboard';

function App() {
  return (
    <Provider store={Store}>
      <Layout>
        <Header/>
        <Dashboard/>
      </Layout>
    </Provider>
  );
}

export default App;
