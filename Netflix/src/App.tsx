import LoginPage from "./Components/LoginPage";
import LoginStart from "./Components/LoginStart";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<LoginPage />} />
          <Route path="/Loginstart" element={<LoginStart />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
