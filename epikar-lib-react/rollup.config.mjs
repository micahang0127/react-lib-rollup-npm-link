import peerDepsExternal from 'rollup-plugin-peer-deps-external';
import babel from "@rollup/plugin-babel";             // Babel을 사용하여 코드를 변환하는 플러그인
import alias from '@rollup/plugin-alias';
import resolve from '@rollup/plugin-node-resolve';    // 외부 종속성 해결 플러그인
import commonjs from '@rollup/plugin-commonjs';       // CommonJS 모듈을 ES6로 변환하는 플러그인
import { terser } from 'rollup-plugin-terser';        // 코드 압축 플러그인
// import postcss from 'rollup-plugin-postcss';


export default {
  input: './src/index.js',                                   // 번들링할 진입 파일 경로
  output: {
    file: './dist/bundle.js',                                // 번들링된 파일 경로
    format: 'esm',                                           // 번들링된 파일의 모듈 형식
    sourcemap: true,                                         // 소스 맵 생성 여부
  },
  plugins: [
    peerDepsExternal() /* peerDependencies로 설치한 라이브러리들을 external 모듈로 설정 즉, 번들링된 결과에 포함시키지 않음 */,
    resolve(),
    commonjs(),
    babel({
      extensions: ['.js', '.jsx', '.ts', '.tsx'],
      babelHelpers: 'bundled',
      presets: ['@babel/preset-env', '@babel/preset-react'],
      exclude: 'node_modules/**',
    }),

    // [절대경로 지정]
    alias({
      entries: [
        { find: 'common', replacement: './src/common' },
        { find: 'assets', replacement: './src/assets' }
        // 다른 모듈들에 대한 별칭을 필요한 만큼 추가할 수 있습니다.
      ],
    }),
    terser()

    // // [css적용]
    // postcss({
    //   extract: true, // CSS 파일을 따로 추출하여 번들에 포함합니다.
    //   minimize: true, // CSS 파일을 압축합니다.
    //   plugins: [
    //     // postcss 플러그인들을 여기에 추가합니다.
    //     // 예를 들어, autoprefixer 등을 사용할 수 있습니다.
    //     require('autoprefixer'),
    //   ],
    // }),
  ],
};


