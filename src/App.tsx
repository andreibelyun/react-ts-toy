import "./index.scss";
import { Route, Routes } from "react-router-dom";
import { Link } from "react-router-dom";
import { AboutPageLazy } from "./pages/AboutPage/AboutPage.lazy";
import { HomePageLazy } from "./pages/HomePage/HomePage.lazy";
import { Suspense } from "react";

const App = () => {
  return (
    <div className="app">
      <header>
        <Link to={"/"}>Home</Link>
        <Link to={"/about"}>About</Link>
      </header>

      <Suspense fallback={<p>Loading...</p>}>
        <Routes>
          <Route path={"/about"} element={<AboutPageLazy />} />
          <Route path={"/"} element={<HomePageLazy />} />
        </Routes>
      </Suspense>
    </div>
  );
};

export default App;
