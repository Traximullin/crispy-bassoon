import React from 'react';
import {Aside, Header, Footer, Main, Basket} from "./components";

function App() {
  return (
      <div className='wrapper'>
          <Header/>
          <Aside/>
          <Main/>
          {/*<Basket/>*/}
          <Footer/>
      </div>
  )
}

export default App;
