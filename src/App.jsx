import React from "react";
import {Routes, Route} from "react-router-dom";
import SignIn from './signin/SignIn';
import SignInOption from './signin/SignInOption';
import SignInExternal from './signin/SignInExternal';
import SubmissionFormsP1 from './forms/SubmissionFormsP1';
import SubmissionFormsP2 from './forms/SubmissionFormsP2';
import SubmissionFormsP3 from './forms/SubmissionFormsP3';
import Home from './home/Home';
import MySubmissions from './submissions/Submissions';

function App() {
  return (
    <>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/SignIn" element={<SignIn />} />
      <Route path="/SignInOption" element={<SignInOption />} />
      <Route path="/SignInExternal" element={<SignInExternal />} />
      <Route path="/SubmissionFormsP1" element={<SubmissionFormsP1 />} />
      <Route path="/SubmissionFormsP2" element={<SubmissionFormsP2 />} />
      <Route path="/SubmissionFormsP3" element={<SubmissionFormsP3 />} />
      <Route path="/Home" element={<Home />} />
      <Route path="/MySubmissions" element={<MySubmissions />} />
    </Routes>
    </>
    
  );
}

export default App;