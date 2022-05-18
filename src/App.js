import React from 'react';

import {Footer, Blog, Possibility, Features, What, Header} from './containers';
import {CTA, Brand, Navbar} from './components';

import './App.css';

export const App = () => {
  return (
    <div>
        <div>
          <div className='gradient__bg'>
            <Navbar />
            <Header />
          </div>
          <Brand />
          <What />
          <Features />
          <Possibility />
          <CTA />
          <Blog />
          <Footer />
        </div>
    </div>
  )
}

export default App
