import React from "react";
import {Routes, Route} from "react-router-dom";
import SignIn from './signin/SignIn';
import SignInOption from './signin/SignInOption';
import Home from './home/Home';
function App() {
  return (
    <>
    <Routes>
      <Route path="/" element={<SignIn />} />
      <Route path="/SignInOption" element={<SignInOption />} />
      <Route path="/Home" element={<Home />} />
    </Routes>
    </>
    
  );
}

export default App;