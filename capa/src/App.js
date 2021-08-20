import React, { } from 'react';
import './App.css';
import { BrowserRouter as Router, Route } from "react-router-dom";
import MainPage from "../src/pages/MainPage";


function App() {

  return (
    <>
      <Router>
        <Route path="/" component={MainPage} />
      </Router>
    </>
  );
}

export default App;
