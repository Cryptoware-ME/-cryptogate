import resolve from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";
import json from "@rollup/plugin-json";
import typescript from "@rollup/plugin-typescript";
import external from "rollup-plugin-peer-deps-external";
import svg from "rollup-plugin-svg";
import dts from 'rollup-plugin-dts';

const packageJson = require("./package.json");

const EXTERNALS = [
  'react',
  'react-dom',
  'child-process'
]

export default [
  {
    inlineDynamicImports: true,
    input: "src/index.ts",
    output: [
      {
        file: packageJson.main,
        format: "cjs",
        sourcemap: true,
        //dir: "dist/cjs/",
        name: "@cryptogate/react-ui",
      },
      {
        file: packageJson.module,
        format: "esm",
        //dir: "dist/esm/",
        sourcemap: true,
      },
    ],
    plugins: [       
      // external(),
      // resolve({
      //   skip: EXTERNALS
      // }),
      json(),
      typescript({
        tsconfig: "./tsconfig.json"
      }),
      commonjs(),
      svg(),
    ],
  },
  {
      input: 'dist/esm/dist/index.d.ts',
      output: [{ file: 'dist/index.d.ts', format: "esm" }],
      external: [/\.scss$/],
      plugins: [dts()],
  },
];
