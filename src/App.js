import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./components/Login";
import Dashboard from "./pages/Dashboard";
import Pegawai from "./pages/Pegawai";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/login" element={<Login />} />
          <Route path="/pegawai" element={<Pegawai />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
