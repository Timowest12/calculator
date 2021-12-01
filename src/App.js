
import Calculate from './screens/Calculate';
import React from "react";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './screens/Home';
import Quotescreen from './screens/Quotescreen';

class App extends React.Component {
  render() {
    return (
      <Router>
      <div className="App">
      <Routes>
      <Route exact path="/" element={<Home />} /> 
      <Route exact path="/caculator" element={<Calculate />} /> 
      <Route exact path="/quote" element={<Quotescreen />} /> 
      </Routes>
    </div>
    </Router>
    );
  }
}

export default App;
