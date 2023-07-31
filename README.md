# prthg-ts library

prthg-ts typescript library 

<br>

## info

- status:
    - internal/dev as submodule

- dependencies:
    - [cryptopp](https://github.com/weidai11/cryptopp)

    - for nodejs dependencie, read _*package.json*_ file

<br>

---

## build & watch

```
# configure
emcmake cmake . -B build/wasm -G Ninja -DINC_VCPKG=true -DINC_VCPKG_DIR=D:/vcpkg -DINC_EMSDK=true -DINC_EMSDK_DIR=D:/emsdk -Dcryptopp_DIR=D:/vcpkg/packages/cryptopp_wasm32-emscripten/share/cryptopp;

# build
cmake --build ./build/wasm;

# then
cp ./build/wasm/cppport-wasm.js ./static/cppport-wasm/cppport-wasm.js;
cp ./build/wasm/cppport-wasm.wasm ./static/cppport-wasm/cppport-wasm.wasm;
cp ./static/cppport-wasm/test.html.template ./static/cppport-wasm/index.html

npm i;
npm run watch::cppport-wasm;
```

<br>

---

###### end of readme