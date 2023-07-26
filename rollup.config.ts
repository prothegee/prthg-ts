import nodeResolve from "@rollup/plugin-node-resolve";
import terser from "@rollup/plugin-terser";
import resolve from "@rollup/plugin-node-resolve";
import typescript from "@rollup/plugin-typescript";
import commonjs from "@rollup/plugin-commonjs";
import json from "@rollup/plugin-json";


//#region cjs
export const ConfigCjs = {
    source: "./src/prthgts/test/main_test.ts",
    name: "main_test.ts",
    target: "./src/prthgts/test/main_test.js",
}
export const TestCjs = {
    input: [
        ConfigCjs.source
    ],
    output: {
        format: "cjs",
        name: ConfigCjs.name,
        file: ConfigCjs.target,
        sourcemap: true
    },
    plugins: [
        nodeResolve({
            browser: true,
            extensions: [
                ".js",
                ".ts"
            ]
        }),
        false && terser(),
        resolve({
            browser: true,
            extensions: [
                ".js",
                ".ts"
            ]
        }),
        typescript(),
        commonjs({
            extensions: [
                ".js",
                ".ts"
            ]
        }),
        json()
    ]
}

const ConfigCjsMin = {
    source: "./src/prthgts/test/main_test.ts",
    name: "main_test.min.js",
    target: "./src/prthgts/test/main_test.min.js",
}
const TestCjsMin = {
    input: [
        ConfigCjsMin.source
    ],
    output: {
        format: "cjs",
        name: ConfigCjsMin.name,
        file: ConfigCjsMin.target,
        sourcemap: false
    },
    plugins: [
        nodeResolve({
            browser: true,
            extensions: [
                ".js",
                ".ts"
            ]
        }),
        true && terser(),
        resolve({
            browser: true,
            extensions: [
                ".js",
                ".ts"
            ]
        }),
        typescript(),
        commonjs({
            extensions: [
                ".js",
                ".ts"
            ]
        }),
        json()
    ]
}
//#endregion


//#region umd
export const ConfigUmd = {
    source: "./src/prthgts/test/main_test.ts",
    name: "main_test.umd.ts",
    target: "./src/prthgts/test/main_test.umd.js",
}
export const TestUmd = {
    input: [
        ConfigUmd.source
    ],
    output: {
        format: "umd",
        name: ConfigUmd.name,
        file: ConfigUmd.target,
        sourcemap: true
    },
    plugins: [
        nodeResolve({
            browser: true,
            extensions: [
                ".js",
                ".ts"
            ]
        }),
        false && terser(),
        resolve({
            browser: true,
            extensions: [
                ".js",
                ".ts"
            ]
        }),
        typescript(),
        commonjs({
            extensions: [
                ".js",
                ".ts"
            ]
        }),
        json()
    ]
}

const ConfigUmdMin = {
    source: "./src/prthgts/test/main_test.ts",
    name: "main_test.umd.min.js",
    target: "./src/prthgts/test/main_test.umd.min.js",
}
const TestUmdMin = {
    input: [
        ConfigUmdMin.source
    ],
    output: {
        format: "umd",
        name: ConfigUmdMin.name,
        file: ConfigUmdMin.target,
        sourcemap: false
    },
    plugins: [
        nodeResolve({
            browser: true,
            extensions: [
                ".js",
                ".ts"
            ]
        }),
        true && terser(),
        resolve({
            browser: true,
            extensions: [
                ".js",
                ".ts"
            ]
        }),
        typescript(),
        commonjs({
            extensions: [
                ".js",
                ".ts"
            ]
        }),
        json()
    ]
}
//#endregion




export default [
    TestCjs, TestCjsMin,
    TestUmd, TestUmdMin
]