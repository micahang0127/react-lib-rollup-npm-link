import babel from "@rollup/plugin-babel";
import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';

export default {
  input: './src/index.js',
  output: {
    file: './dist/bundle.js',
    format: 'esm',
    sourcemap: true,
  },
  plugins: [
    // resolve(),
    // commonjs(),
    // 바벨 트랜스파일러 설정
    babel({
      babelHelpers: 'bundled',
      presets: ['@babel/preset-env', '@babel/preset-react'],
      exclude: 'node_modules/**',
    }),
  ],
};


