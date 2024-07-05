import React from "react";
import {Routes, Route} from "react-router-dom";
import SignIn from "./SignIn.jsx";
import SignInOption from "./SignInOption.jsx";
import SignInExternal from "./SignInExternal.jsx";

function App() {
  return (
    <>
    <Routes>
      <Route path="/" element={<SignIn />} />
      <Route path="/SignInOption" element={<SignInOption />} />
      <Route path="/SignInExternal" element={<SignInExternal />} />
    </Routes>
    </>
    
  );
}

export default App;