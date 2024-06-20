import { useTranslation } from "react-i18next";

const HomePage = () => {
  const { t } = useTranslation("home");

  return <div>{t("homePage")}</div>;
};

export default HomePage;
