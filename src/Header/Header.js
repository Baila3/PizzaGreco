// import logo from './logo.svg';
import './Header.css';

function Header() {
  return (
    <div className="App">
      <header className="App-header">
        <div classname='Title'>
          <h1 className='Title1'>PIZZA</h1>
          <h1 className='Title2'>GRECO</h1>
          <h2 className='Title3'>OKA</h2>
        </div>
        {/* <img src={logo} className="App-logo" alt="logo" /> */}
        {/* <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a> */}
      </header>
    </div>
  );
}

export default Header;