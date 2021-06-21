import React from 'react'

import './App.css';

import Header from './components/Header/Header'
import Aside from './components/Aside/Aside'
import Main from './components/Main/Main'
import Footer from './components/Footer/Footer'



export default function App(props) {

  return (
        <div className="wr df fw">
          <Header/>
          <Aside/>
          <Main />
          <Footer/>
        </div>
  );

}


