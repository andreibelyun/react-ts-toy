import "app/styles/index.scss";
import { NavBar } from "widgets/NavBar";
import { AppRouter } from "app/providers/router";
import { useTheme } from "app/providers/ThemeProvider";
import { classNames } from "shared/lib/classNames/classNames";

const App = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <div className={classNames("app", [theme])}>
      <button onClick={toggleTheme}>Toggle theme</button>
      <NavBar />
      <AppRouter />
    </div>
  );
};

export default App;
