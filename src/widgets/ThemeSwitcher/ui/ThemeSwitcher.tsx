import st from "./ThemeSwitcher.module.scss";
import IconSun from "shared/assets/icons/sun.svg";
import IconMoon from "shared/assets/icons/moon.svg";

import { FC } from "react";
import { useTheme } from "app/providers/ThemeProvider";
import { classNames } from "shared/lib/classNames/classNames";
import { Button, ButtonTheme } from "shared/ui/Button/Button";
import { Theme } from "app/providers/ThemeProvider/lib/ThemeContext";

interface ThemeSwitcherProps {
  className?: string;
}

export const ThemeSwitcher: FC<ThemeSwitcherProps> = ({ className }) => {
  const { theme, toggleTheme } = useTheme();

  return (
    <Button
      onClick={toggleTheme}
      theme={ButtonTheme.CLEAR}
      className={classNames(st.themeSwitcher, [className])}
    >
      {theme === Theme.LIGHT ? <IconSun /> : <IconMoon />}
    </Button>
  );
};
