import React from "react";
import {Routes, Route} from "react-router-dom";
import SignIn from "./SignIn.jsx";

function App() {
  return (
    <>
    <Routes>
      <Route path="/" element={<SignIn />} />
    </Routes>
    </>
    
  );
}

export default App;