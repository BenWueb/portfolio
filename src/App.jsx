import Main from "./pages/Main";
import Navbar from "./components/Navbar";
import NavbarMobile from "./components/NavbarMobile";

function App() {
  return (
    <>
      <div className="container">
        <NavbarMobile />
        <Main />
      </div>
    </>
  );
}

export default App;
