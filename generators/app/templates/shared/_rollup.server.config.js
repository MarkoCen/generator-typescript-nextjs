import json from '@rollup/plugin-json';
import commonjs from '@rollup/plugin-commonjs';
import babel from 'rollup-plugin-babel';
import typescript from 'rollup-plugin-typescript2';
import externals from 'rollup-plugin-node-externals';

const extensions = ['.js', '.jsx', '.ts', '.tsx'];

export default {
  input: 'server/index.ts',
  output: {
    dir: 'build',
    format: 'cjs',
  },
  plugins: [
    externals({
      builtins: true,
      deps: true,
      devDeps: true,
      exclude: [],
      include: [],
    }),
    commonjs(),
    json(),
    typescript(),
    babel({
      babelrc: false,
      runtimeHelpers: false,
      extensions,
      presets: [['latest-node', { target: 'current', modules: false }]],
    }),
  ],
};
