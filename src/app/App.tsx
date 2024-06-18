import "app/styles/index.scss";
import { NavBar } from "widgets/NavBar";
import { AppRouter } from "app/providers/router";
import { useTheme } from "app/providers/ThemeProvider";
import { classNames } from "shared/lib/classNames/classNames";
import { SideBar } from "widgets/Sidebar";

const App = () => {
  const { theme } = useTheme();

  return (
    <div className={classNames("app", [theme])}>
      <NavBar />

      <div className="pageContent">
        <SideBar />

        <div className="pageWrapper">
          <AppRouter />
        </div>
      </div>
    </div>
  );
};

export default App;
