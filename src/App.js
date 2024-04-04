import { Link, Route, Routes } from "react-router-dom";
import "./App.css";
import Homepage from "./page/Homepage";
import ReactQueryPage from "./page/ReactQueryPage";

function App() {
  return (
    <div>
      <nav>
        <Link to="/" style={{ padding: "20px" }}>
          Homepage
        </Link>
        <Link to="/react-query">React Query</Link>
      </nav>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/react-query" element={<ReactQueryPage />} />
      </Routes>
    </div>
  );
}

export default App;
