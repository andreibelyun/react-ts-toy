import { lazy } from "react";

export const AboutPageLazy = lazy(
  () =>
    new Promise((resolve) => {
      // @ts-expect-error Temporarily, for educational purposes
      setTimeout(() => resolve(import("./AboutPage")), 1000);
    })
);
