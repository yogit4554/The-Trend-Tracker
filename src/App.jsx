import React from 'react';
import Home from "./Home"
import {BrowserRouter,Routes,Route} from "react-router-dom";
import Singlemovie from './Singlemovie';
import Error from "./Error";
import "./App.css";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/movie/:id" element={<Singlemovie />}/>
          <Route path="*" element={<Error/>}/>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App;