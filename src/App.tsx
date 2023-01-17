import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import LogIn from "./pages/Login";

function App() {
  return (
    <>
      <Router>
        <main>
          <Routes>
            <Route path="/" element={<LogIn />} />
          </Routes>
        </main>
      </Router>
    </>
  );
}
export default App;
