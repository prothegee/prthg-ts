# cppport-wasm EN

- configure using desktop environment

__note:__
```bash
## emsdk
<EMSDK_ROOT>/emsdk install latest;
<EMSDK_ROOT>/emsdk activate latest;
```

```bash
emcmake cmake . -B build/wasm -G Ninja -DINC_VCPKG=false -DINC_EMSDK=true -DINC_EMSDK_DIR=PATH_TO_YOUR_EMSDK_ROOT -Dcryptopp_DIR=PATH_TO_CRYPTOPP_WASM32_EMSCRIPTEN_SHARE_PACKAGE;

cmake --build ./build/wasm;

cp ./build/wasm/cppport-wasm.js ./test/cppport-wasm.js;
cp ./build/wasm/cppport-wasm.js ./static/cppport-wasm/cppport-wasm.js;
cp ./build/wasm/cppport-wasm.wasm ./static/cppport-wasm/cppport-wasm.wasm;
cp ./build/wasm/cppport-wasm.wasm ./test/cppport-wasm.wasm;
cp ./static/cppport-wasm/test.html.template ./static/cppport-wasm/index.html;
```

<br>
<br>

- configure & build using vcpkg

__note:__
```bash
## your need to install using:
<VCPKG_ROOT>/vcpkg install cryptopp:wasm32-emscripten;

## emsdk
<EMSDK_ROOT>/emsdk install latest;
<EMSDK_ROOT>/emsdk activate latest;
```

```bash
emcmake cmake . -B build/wasm -G Ninja -DINC_VCPKG=true -DINC_VCPKG_DIR=PATH_TO_YOUR_VCPKG_ROOT -DINC_EMSDK=true -DINC_EMSDK_DIR=PATH_TO_YOUR_EMSDK_ROOT -Dcryptopp_DIR=PATH_TO_CRYPTOPP_WASM32_EMSCRIPTEN_SHARE_PACKAGE;

cmake --build ./build/wasm;

cp ./build/wasm/cppport-wasm.js ./test/cppport-wasm.js;
cp ./build/wasm/cppport-wasm.js ./static/cppport-wasm/cppport-wasm.js;
cp ./build/wasm/cppport-wasm.wasm ./static/cppport-wasm/cppport-wasm.wasm;
cp ./build/wasm/cppport-wasm.wasm ./test/cppport-wasm.wasm;
cp ./static/cppport-wasm/test.html.template ./static/cppport-wasm/index.html;
```

<br>

---

## check/run test

- check on browser
```bash
npm i;
npm run watch::cppport-wasm;

## then go to http://127.0.0.1:8080 and watch the console
```

<br>

- run the test
```bash
npm i;
npm run build::test && npm run test::cjs;
```

<br>

---

###### end of readme | [main readme](../README.md)