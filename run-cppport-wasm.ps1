# RESERVED: test purpose
# emcc -O3 -s WASM=1 -s EXPORTED_RUNTIME_METHODS='["cwrap"]' "./src/cppport/CryptographyFunctions.cc" -o "./src/prthgts/wasm/CryptographyFunctions.js";
# emcc -Os -s STANDALONE_WASM -s EXPORTED_FUNCTIONS="['_GetParamInt', '_Get421']" --no-entry "./src/cppport/CryptographyFunctions.cc" -o "./src/prthgts/wasm/CryptographyFunctions.wasm";
