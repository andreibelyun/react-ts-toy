import "app/styles/index.scss";

import { Link } from "react-router-dom";

import { AppRouter } from "app/providers/router";
import { useTheme } from "app/providers/ThemeProvider";
import { classNames } from "shared/lib/classNames/classNames";

const App = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <div className={classNames("app", [theme])}>
      <header>
        <button onClick={toggleTheme}>Toggle theme</button>
        <br />
        <Link to={"/"}>Home</Link>
        <Link to={"/about"}>About</Link>
      </header>

      <AppRouter />
    </div>
  );
};

export default App;
