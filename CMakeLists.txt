cmake_minimum_required(VERSION 3.15)
project(cppport-wasm)


if(INC_VCPKG)
    include("${INC_VCPKG_DIR}/scripts/buildsystems/vcpkg.cmake")
    message(STATUS "(MSG) - ${PROJECT_NAME}: INC_VCPKG_DIR is supplied as ${INC_VCPKG_DIR}")
else()
    message(STATUS "(MSG) - ${PROJECT_NAME}: INC_VCPKG_DIR is not supplied, will assume library already include from workstation environment")
endif(INC_VCPKG)

if(INC_EMSDK)
    include("${INC_EMSDK_DIR}/upstream/emscripten/cmake/Modules/Platform/Emscripten.cmake")
    message(STATUS "(MSG) - ${PROJECT_NAME}: INC_EMSDK_DIR is supplied as ${INC_EMSDK_DIR}")
else()
    message(STATUS "(MSG) - ${PROJECT_NAME}: INC_EMSDK_DIR is not supplied, will assume library already include from workstation environment")
endif(INC_EMSDK)


add_executable(${PROJECT_NAME}
    src/cppport/CryptographyFunctions.cc
)


target_include_directories(${PROJECT_NAME}
    PUBLIC
        "$<BUILD_INTERFACE:${INC_EMSDK_DIR}/upstream/emscripten/cache/sysroot/include>"
        "$<BUILD_INTERFACE:${INC_VCPKG_DIR}/installed/wasm32-emscripten/include>"
)

target_sources(${PROJECT_NAME}
    PRIVATE
        "${CMAKE_CURRENT_SOURCE_DIR}/src/cppport"
        "${INC_VCPKG_DIR}/installed/wasm32-emscripten/include"
)


if (CMAKE_VERSION VERSION_GREATER 3.12)
    set_property(TARGET ${PROJECT_NAME} PROPERTY CXX_STANDARD 20)
endif()


find_package(cryptopp CONFIG REQUIRED)
target_link_libraries(${PROJECT_NAME}  PRIVATE cryptopp::cryptopp)


target_link_options(${PROJECT_NAME}
    PRIVATE
        -sFORCE_FILESYSTEM
        -sEXPORTED_RUNTIME_METHODS=["cwrap"]
)
