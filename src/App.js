import logo from './logo.svg';
import './App.css';
import Helmet from "react-helmet";
import React from "react";

function App() {
  return (
    <div className="App">
      <Helmet>
        <title>class component 実装</title>
        <meta
            name="description"
            content="class component description class component description"
        />
        <meta name="twitter:card" content="summary" />
        <meta name="twitter:site" content="@test" />
        <meta property="og:locale" content="ja_JP" />
        <meta
            property="og:title"
            content="class component og:title"
        />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="http://dummyimage.com/570×295" />
        <meta property="og:url" content="https://example.com" />
        <meta property="og:site_name" content="example" />
        <meta
            property="og:description"
            content="class component description"
        />

      </Helmet>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
