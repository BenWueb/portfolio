import Main from "./pages/Main";
import NavbarMobile from "./components/NavbarMobile";
import Article from "./pages/Article";
import CtaArticle from "./pages/CtaArticle";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <div className="container">
        <Router>
          <NavbarMobile />
          <Routes>
            <Route path="/" element={<Main />} />
            <Route
              path="/guide-to-website-accessibility"
              element={<Article />}
            />
            <Route
              path="/creating-effective-cta-buttons"
              element={<CtaArticle />}
            />
          </Routes>
        </Router>
      </div>
    </>
  );
}

export default App;
