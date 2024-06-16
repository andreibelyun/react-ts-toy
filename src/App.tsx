import "./styles/index.scss";
import { Suspense } from "react";
import { Link } from "react-router-dom";
import { useTheme } from "./theme/useTheme";
import { Route, Routes } from "react-router-dom";
import { HomePageLazy } from "./pages/HomePage/HomePage.lazy";
import { AboutPageLazy } from "./pages/AboutPage/AboutPage.lazy";

const App = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <div className={`app ${theme}`}>
      <header>
        <button onClick={toggleTheme}>Toggle theme</button>
        <br />
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
