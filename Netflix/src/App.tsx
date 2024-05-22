import LoginPage from "./Components/LoginPage";
import LoginStart from "./Components/LoginStart";
import MainPage from "./Components/MainPage";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<LoginPage />} />
          <Route path="/Loginstart" element={<LoginStart />} />
          <Route path="/MainPage" element={<MainPage />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
