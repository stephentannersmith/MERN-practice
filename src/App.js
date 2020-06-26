import React from 'react';
import '../src/index.css'
import Header from './components/header'
import Nav from './components/navigation'
import Main from './components/main'
import Subcontent from './components/subcontent'
import Advert from './components/advertisement'

function App() {
  return (
    <div className="App">
      <Header />
      <Nav />
      <Main>
        <Subcontent />
        <Subcontent />
        <Subcontent />
        <Advert />
      </Main>
    </div>
  );
}

export default App;
