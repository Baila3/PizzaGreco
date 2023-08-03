// import logo from './logo.svg';
import { useState } from 'react';
import './Header.css';
import MySideNav from './MySideNav/MySideNav';



function Header() {

  return (
    <div className="App">
      <header className="App-header">
        <MySideNav/>
        <div classname='Title'>
          <h1 className='Title1'>PIZZA</h1>
          <h1 className='Title2'>GRECO</h1>
          <div className='dots'>
            <span className='dot'></span>
            <span className='dot'></span>
            <span className='dot'></span>
            <span className='dot'></span>
            <span className='dot'></span>
            <h2 className='Title3'>OKA</h2>
            <span className='dot'></span>
            <span className='dot'></span>
            <span className='dot'></span>
            <span className='dot'></span>
            <span className='dot'></span>
          </div>
        </div>
      </header>
    </div>
  );
}

export default Header;