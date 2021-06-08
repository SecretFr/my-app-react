/* eslint-disable */
import React, { Component, useState } from 'react';

//Components 부품화 or 모듈화
import Subject from './components/Subject'
import Nav from './components/Nav'
import Content from './components/Content'

//import css
import './App.css';

function App() {
  return (
    <div>
      <Subject
      name="Operation DaramG"
      address="korea"
      phone = "010-5138-0988"
      />
      <Nav></Nav>
      <Content></Content>
    </div>
  )
}

export default App;