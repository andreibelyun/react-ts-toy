import path from "path";
import webpack from "webpack";
import { BuildMode, BuildPaths } from "./src/config/build/types/config";
import { buildWebpackConfig } from "./src/config/build/buildWebpackConfig";

const mode: BuildMode = "development";
const isDev: boolean = mode === "development";

const paths: BuildPaths = {
  entry: path.resolve(__dirname, "src", "index.ts"),
  build: path.resolve(__dirname, "build"),
  html: path.resolve(__dirname, "public", "index.html"),
};

const config: webpack.Configuration = buildWebpackConfig({
  mode,
  paths,
  isDev,
});

export default config;
