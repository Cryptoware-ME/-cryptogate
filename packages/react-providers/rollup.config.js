import commonjs from "@rollup/plugin-commonjs";
import json from "@rollup/plugin-json";
import typescript from "@rollup/plugin-typescript";
import svg from "rollup-plugin-svg";
import dts from "rollup-plugin-dts";

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
        name: "@cryptogate/react-providers",
      },
      {
        file: packageJson.module,
        format: "esm",
        sourcemap: true,
      },
    ],
    plugins: [
      //nodeResolve(),
      json(),
      typescript({
        tsconfig: "./tsconfig.json",
      }),
      commonjs(),
      svg(),
    ],
  },
  {
    input: "dist/esm/index.d.ts",
    output: [{ file: "dist/index.d.ts", format: "esm" }],
    external: [/\.scss$/],
    plugins: [dts()],
  },
];
