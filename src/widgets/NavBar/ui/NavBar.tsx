import st from "./NavBar.module.scss";
import { AppLink, AppLinkTheme } from "shared/ui/AppLink/AppLink";
import { classNames } from "shared/lib/classNames/classNames";
import { useTranslation } from "react-i18next";

type NavBarItem = {
  path: string;
  textKey: string;
};

const navBarConfig: NavBarItem[] = [
  { path: "/", textKey: "home" },
  { path: "/about", textKey: "about" },
];

export function NavBar() {
  const { t } = useTranslation();

  return (
    <nav className={classNames(st.navbar)}>
      <span className={st.logo}>Logo</span>

      <div className={st.links}>
        {navBarConfig.map(({ path, textKey }) => (
          <AppLink key={path} to={path} theme={AppLinkTheme.SECONDARY}>
            {t(textKey)}
          </AppLink>
        ))}
      </div>
    </nav>
  );
}
