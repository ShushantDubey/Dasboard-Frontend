import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Login from "./Pages/Login";
import Register from "./Pages/Register";
import Reset from "./Pages/Reset";
import Dashboard from "./Pages/Dashboard";
import Signout from "./Pages/Signout";

function App() {
  return (
    <div className="app">
      <Router>
        <Routes>
          <Route exact path="/" element={<Login />} />
          <Route exact path="/register" element={<Register />} />
          <Route exact path="/reset" element={<Reset />} />
          <Route exact path="/dashboard" element={<Dashboard />} />
          <Route exact path="/logout" element={<Signout/>} />
        </Routes>
      </Router>
    </div>
  );
}
export default App;
