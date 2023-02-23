import Main from "./pages/Main";
import NavbarMobile from "./components/NavbarMobile";
import Article from "./pages/Article";
import CtaArticle from "./pages/CtaArticle";
import NavArticle from "./pages/NavArticle";
import LandingArticle from "./pages/LandingArticle";
import SeoArticle from "./pages/SeoArticle";
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
            <Route
              path="/Designing-a-Website-Navigation-Menu"
              element={<NavArticle />}
            />
            <Route
              path="/creating-an-effective-landing-page"
              element={<LandingArticle />}
            />
            <Route
              path="/content-optimization-for-search-engine-optimization"
              element={<SeoArticle />}
            />
          </Routes>
        </Router>
      </div>
    </>
  );
}

export default App;
