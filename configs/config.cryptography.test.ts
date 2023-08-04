import nodeResolve from "@rollup/plugin-node-resolve";
import terser from "@rollup/plugin-terser";
import typescript from "@rollup/plugin-typescript";
import commonjs from "@rollup/plugin-commonjs";
import json from "@rollup/plugin-json";


//#region cjs
export const ConfigCjs = {
    source: "./test/cryptography/main.ts",
    name: "main.ts",
    target: "./test/cryptography/main.cjs",
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
                ".ts",
            ]
        }),
        false && terser(),
        typescript(),
        commonjs({
            extensions: [
                ".js",
                ".ts",
            ]
        }),
        json()
    ]
}

const ConfigCjsMin = {
    source: "./test/cryptography/main.ts",
    name: "main.min.js",
    target: "./test/cryptography/main.min.cjs",
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
                ".ts",
            ]
        }),
        true && terser(),
        typescript(),
        commonjs({
            extensions: [
                ".js",
                ".ts",
            ]
        }),
        json()
    ]
}
//#endregion


//#region umd
export const ConfigUmd = {
    source: "./test/cryptography/main.ts",
    name: "main.umd.ts",
    target: "./test/cryptography/main.umd.js",
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
                ".ts",
            ]
        }),
        false && terser(),
        typescript(),
        commonjs({
            extensions: [
                ".js",
                ".ts",
            ]
        }),
        json()
    ]
}

const ConfigUmdMin = {
    source: "./test/cryptography/main.ts",
    name: "main.umd.min.js",
    target: "./test/cryptography/main.umd.min.js",
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
                ".ts",
            ]
        }),
        true && terser(),
        typescript(),
        commonjs({
            extensions: [
                ".js",
                ".ts",
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