import path from 'path';
import webpack from 'webpack';
import { BuildEnv, BuildMode, BuildPaths } from './config/build/types/config';
import { buildWebpackConfig } from './config/build/buildWebpackConfig';

export default (env: BuildEnv) => {
  const MODE: BuildMode = env.mode || 'development';
  const PORT: number = env.port || 3000;

  const isDev: boolean = MODE === 'development';

  const paths: BuildPaths = {
    entry: path.resolve(__dirname, 'src', 'index.tsx'),
    build: path.resolve(__dirname, 'build'),
    html: path.resolve(__dirname, 'public', 'index.html'),
    src: path.resolve(__dirname, 'src'),
  };

  const config: webpack.Configuration = buildWebpackConfig({
    mode: MODE,
    paths,
    isDev,
    port: PORT,
  });

  return config;
};
