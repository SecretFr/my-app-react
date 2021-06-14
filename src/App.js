/* eslint-disable */
import React, { Component, useState } from 'react';

//Components 부품화 or 모듈화
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import Brand from './components/elements/widgets/brand/Brand';
import Deal from './components/elements/widgets/deal/Deal';
import Blog from './components/elements/widgets/blog/Blog';


//import css
import './assets/css/main.css';

function App() {
  return (
    <div id="wrap">
      <Header/>
      <Brand/>
      <Deal/>
      <Blog/>
      <Footer/>
    </div>
  )
}

export default App;