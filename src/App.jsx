import React from "react";
import {Routes, Route} from "react-router-dom";
import SignIn from "./SignIn.jsx";
import SignInOption from "./SignInOption.jsx";

function App() {
  return (
    <>
    <Routes>
      <Route path="/" element={<SignIn />} />
      <Route path="/SignInOption" element={<SignInOption />} />
    </Routes>
    </>
    
  );
}

export default App;