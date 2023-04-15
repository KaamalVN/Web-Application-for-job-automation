import {BrowserRouter as Router,Routes, Route } from "react-router-dom";
import React from "react";
import HeadRequest  from "./HeadRequest";
import HeadWorkStatus from "./HeadWorkStatus";
import HeadReportGeneration from "./HeadReportGeneration";
import HeadLoginPage from "./HeadLoginPage";
function HeadLinking() {
  return (
      <>
        {
        <Router>
          <Routes>
            <Route path="/" element={<HeadWorkStatus />} />
            <Route path="/HeadRequest" element={<HeadRequest />} />
            <Route path="/HeadReportGeneration" element={<HeadReportGeneration />} />
            <Route path="/HeadLoginPage" element={<HeadLoginPage />} />
          </Routes>
        </Router>
        }
      </>
  );
};

export default HeadLinking;