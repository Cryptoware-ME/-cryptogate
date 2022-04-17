import resolve from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";
import json from "@rollup/plugin-json";
import typescript from "@rollup/plugin-typescript";
import external from "rollup-plugin-peer-deps-external";
import svg from "rollup-plugin-svg";

const packageJson = require("./package.json");

export default [
  {
    inlineDynamicImports: true,
    input: "src/index.ts",
    output: [
      {
        file: packageJson.main,
        format: "cjs",
        sourcemap: true,
        name: "@cryptogate/react-ui",
      },
      {
        file: packageJson.module,
        format: "esm",
        sourcemap: true,
      },
    ],
    plugins: [       
      external(),
      resolve(),
      json(),
      typescript({
        tsconfig: "./tsconfig.json"
      }),
      commonjs(),
      svg(),
    ],
  },
];
