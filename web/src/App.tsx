import "./App.css";

import { Route, Routes } from "react-router-dom";

import { Error404 } from "./components/error404";
import { JobDetails } from "./pages/job-details";
import { LandingPage } from "./pages/landing-page";

function App() {
  return (
    <Routes>
      <Route element={<LandingPage />} path={"/"} />
      <Route element={<JobDetails />} path={"/job/:id"} />
      <Route path="*" element={<Error404/>}/>
    </Routes>
  );
}
export default App;