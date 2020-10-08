import React from 'react';
import logo from './logo.svg';
import './App.css';
import Layout from './components/Layout';
import Header from './components/Header';
import BillList from './components/BillList';

function App() {
  return (
    <Layout>
      <Header/>
      <BillList/>
    </Layout>
  );
}

export default App;
