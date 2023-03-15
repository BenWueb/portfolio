import Main from "./pages/Main";
import NavbarMobile from "./components/NavbarMobile";
import Services from "./pages/Services";
import Project from "./pages/Project";
import Article from "./pages/Article";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <div className="container">
        <Router>
          <NavbarMobile />
          <Routes>
            <Route path="/" element={<Main />} />
            <Route path="/project/:projectId" element={<Project />} />
            <Route path="/services" element={<Services />} />
            <Route path="/article/:postName" element={<Article />} />
          </Routes>
        </Router>
      </div>
    </>
  );
}

export default App;
