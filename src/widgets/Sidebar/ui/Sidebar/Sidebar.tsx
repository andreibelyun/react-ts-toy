import { FC, useState } from 'react';
import st from './SideBar.module.scss';
import IconMenu from 'shared/assets/icons/menu.svg';
import { LangSwitcher } from 'widgets/LangSwitcher';
import { ThemeSwitcher } from 'widgets/ThemeSwitcher';
import { classNames } from 'shared/lib/classNames/classNames';
import { Button, ButtonTheme } from 'shared/ui/Button/Button';

interface SideBarProps {
  className?: string;
}

export const SideBar: FC<SideBarProps> = ({ className }) => {
  const [collapsed, setCollapsed] = useState<boolean>(false);

  const toggleSidebar = () => {
    setCollapsed((prev) => !prev);
  };

  return (
    <div
      className={classNames(st.sideBar, [className], {
        [st.collapsed]: collapsed,
      })}
    >
      <Button
        onClick={toggleSidebar}
        className={st.toggleBtn}
        theme={ButtonTheme.CLEAR}
      >
        <IconMenu />
      </Button>

      <div className={st.switchers}>
        <ThemeSwitcher />
        {!collapsed && <LangSwitcher />}
      </div>
    </div>
  );
};
