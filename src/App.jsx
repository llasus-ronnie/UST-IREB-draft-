import React from "react";
import {Routes, Route} from "react-router-dom";
import SignIn from '../src/pages/signin/SignIn';
import SignInOption from '../src/pages/signin/SignInOption';
import SignInExternal from '../src/pages/signin/SignInExternal';

import SubmissionFormsP1 from '../src/pages/forms/SubmissionFormsP1';
import SubmissionFormsP2 from '../src/pages/forms/SubmissionFormsP2';
import SubmissionFormsP3 from '../src/pages/forms/SubmissionFormsP3';
import Home from '../src/pages/home/Home';
import MySubmissions from './pages/submissions/Submissions';

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