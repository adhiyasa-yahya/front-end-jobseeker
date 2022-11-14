import './App.css';
import { Route, Routes } from "react-router-dom";
import Login from "./view/auth/Login";
import JobList from "./view/job/List";
import JobDetail from "./view/job/Detail";

import ProtectedRoutes from "./routes/ProtectedRoutes";

function App() {
  return (
    <div className="container">
      <Routes>
          <Route path="/" element={<Login />} />
          <Route element={<ProtectedRoutes />}>
            <Route path="/job" element={<JobList />} />
            <Route path="/job/detail/:id" element={<JobDetail />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
