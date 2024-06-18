import st from "./NavBar.module.scss";

import { AppLink, AppLinkTheme } from "shared/ui/AppLink/AppLink";
import { classNames } from "shared/lib/classNames/classNames";
import { ThemeSwitcher } from "widgets/ThemeSwitcher";

type NavBarItem = {
  path: string;
  text: string;
};

const navBarConfig: NavBarItem[] = [
  { path: "/", text: "Home" },
  { path: "/about", text: "About" },
];

export function NavBar() {
  return (
    <nav className={classNames(st.navbar)}>
      <ThemeSwitcher />

      <div className={st.links}>
        {navBarConfig.map(({ path, text }) => (
          <AppLink key={path} to={path} theme={AppLinkTheme.SECONDARY}>
            {text}
          </AppLink>
        ))}
      </div>
    </nav>
  );
}
