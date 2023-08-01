#include <stdio.h>
#include <iostream>
#include <string>
#include <sstream>

#include <emscripten.h>

#include "cryptopp/ec2n.h"
#include "cryptopp/hex.h"
#include "cryptopp/modes.h"
#include "cryptopp/files.h"
#include "cryptopp/osrng.h"
#include "cryptopp/cryptlib.h"
#include "cryptopp/secblock.h"
#include "cryptopp/filters.h"
#include "cryptopp/hex.h"
#include "cryptopp/words.h"

#include "cryptopp/blake2.h"
#include "cryptopp/scrypt.h"
#include "cryptopp/sha.h"
#include "cryptopp/gcm.h"
#include "cryptopp/aes.h"
#include "cryptopp/chacha.h"
#include "cryptopp/rc6.h"


int main()
{
    // printf("prthg-ts: cppport-wasm loaded\n");
    return 0;
}


/*
BUG:
#1 - StreamCipher
Invalid UTF-8 leading byte <0x....> encountered when deserializing a UTF-8 string in wasm memory to a JS string!
*/
extern "C"
{
    EMSCRIPTEN_KEEPALIVE const char *Initialize()
    {
        return "CryptographyFunctions Initialize";
    }

    EMSCRIPTEN_KEEPALIVE const char *GenerateSHA1(const char *input)
    {
        std::string tInput(input), tResult;

        CryptoPP::SHA1 hash;
        CryptoPP::byte digest[CryptoPP::SHA1::DIGESTSIZE];
        CryptoPP::HexEncoder encoder;

        hash.CalculateDigest(digest, (CryptoPP::byte*) tInput.c_str(), tInput.length());

        encoder.Attach(new CryptoPP::StringSink(tResult));
        encoder.Put(digest, sizeof(digest));
        encoder.MessageEnd();

        int length = tResult.length() + 1;

        char* bResult = new char[length];
        const char* fResult = new char[length];

        strcpy(bResult, tResult.c_str());
        fResult = bResult;

        return fResult;
    }

    EMSCRIPTEN_KEEPALIVE const char *GenerateSHA224(const char *input)
    {
        std::string tInput(input), tResult;

        CryptoPP::SHA224 hash;
        CryptoPP::byte digest[CryptoPP::SHA224::DIGESTSIZE];
        CryptoPP::HexEncoder encoder;

        hash.CalculateDigest(digest, (CryptoPP::byte*) tInput.c_str(), tInput.length());

        encoder.Attach(new CryptoPP::StringSink(tResult));
        encoder.Put(digest, sizeof(digest));
        encoder.MessageEnd();

        int length = tResult.length() + 1;

        char* bResult = new char[length];
        const char* fResult = new char[length];

        strcpy(bResult, tResult.c_str());
        fResult = bResult;

        return fResult;
    }

    EMSCRIPTEN_KEEPALIVE const char *GenerateSHA256(const char *input)
    {
        std::string tInput(input), tResult;

        CryptoPP::SHA256 hash;
        CryptoPP::byte digest[CryptoPP::SHA256::DIGESTSIZE];
        CryptoPP::HexEncoder encoder;

        hash.CalculateDigest(digest, (CryptoPP::byte*) tInput.c_str(), tInput.length());

        encoder.Attach(new CryptoPP::StringSink(tResult));
        encoder.Put(digest, sizeof(digest));
        encoder.MessageEnd();

        int length = tResult.length() + 1;

        char* bResult = new char[length];
        const char* fResult = new char[length];

        strcpy(bResult, tResult.c_str());
        fResult = bResult;

        return fResult;
    }

    EMSCRIPTEN_KEEPALIVE const char *GenerateSHA384(const char *input)
    {
        std::string tInput(input), tResult;

        CryptoPP::SHA384 hash;
        CryptoPP::byte digest[CryptoPP::SHA384::DIGESTSIZE];
        CryptoPP::HexEncoder encoder;

        hash.CalculateDigest(digest, (CryptoPP::byte*) tInput.c_str(), tInput.length());

        encoder.Attach(new CryptoPP::StringSink(tResult));
        encoder.Put(digest, sizeof(digest));
        encoder.MessageEnd();

        int length = tResult.length() + 1;

        char* bResult = new char[length];
        const char* fResult = new char[length];

        strcpy(bResult, tResult.c_str());
        fResult = bResult;

        return fResult;
    }

    EMSCRIPTEN_KEEPALIVE const char *GenerateSHA512(const char *input)
    {
        std::string tInput(input), tResult;

        CryptoPP::SHA512 hash;
        CryptoPP::byte digest[CryptoPP::SHA512::DIGESTSIZE];
        CryptoPP::HexEncoder encoder;

        hash.CalculateDigest(digest, (CryptoPP::byte*) tInput.c_str(), tInput.length());

        encoder.Attach(new CryptoPP::StringSink(tResult));
        encoder.Put(digest, sizeof(digest));
        encoder.MessageEnd();

        int length = tResult.length() + 1;

        char* bResult = new char[length];
        const char* fResult = new char[length];

        strcpy(bResult, tResult.c_str());
        fResult = bResult;

        return fResult;
    }

    EMSCRIPTEN_KEEPALIVE const char *GenerateBLAKE2b(const char *input)
    {
        std::string tInput(input), tResult;

        CryptoPP::BLAKE2b hash;
        CryptoPP::byte digest[CryptoPP::BLAKE2b::DIGESTSIZE];
        CryptoPP::HexEncoder encoder;

        hash.CalculateDigest(digest, (CryptoPP::byte*) tInput.c_str(), tInput.length());

        encoder.Attach(new CryptoPP::StringSink(tResult));
        encoder.Put(digest, sizeof(digest));
        encoder.MessageEnd();

        int length = tResult.length() + 1;

        char* bResult = new char[length];
        const char* fResult = new char[length];

        strcpy(bResult, tResult.c_str());
        fResult = bResult;

        return fResult;
    }

    EMSCRIPTEN_KEEPALIVE const char *GenerateHasherSCRYPT(const char *input, const char *salt)
    {
        std::string tResult;

        std::string passwd_input(input), salt_input(salt);

        CryptoPP::word64 cost=1024, block=8, parallelization=16;

        CryptoPP::SecByteBlock derived(256);
        CryptoPP::Scrypt scrypt;

        CryptoPP::AlgorithmParameters params = 
            CryptoPP::MakeParameters("Cost", cost)
            ("BlockSize", block)("Parallelization", parallelization)
            ("Salt", CryptoPP::ConstByteArrayParameter(
                (const CryptoPP::byte*)&salt_input[0], salt_input.size()));

        scrypt.DeriveKey(derived, derived.size(),
            (const CryptoPP::byte*)&passwd_input[0], passwd_input.size(), params);

        CryptoPP::StringSource(derived, derived.size(), true,
            new CryptoPP::HexEncoder(new CryptoPP::StringSink(tResult)));

        int length = tResult.length() + 1;

        char* bResult = new char[length];
        const char* fResult = new char[length];

        strcpy(bResult, tResult.c_str());
        fResult = bResult;

        return fResult;
    }

    EMSCRIPTEN_KEEPALIVE const char *EncryptXChaCha20(const char *input, const char *initializeKey, const char *initializeVector)
    {
        std::string tResult;
        std::string _initializeKey(initializeKey), _initializeVector(initializeVector);

        CryptoPP::HexEncoder encoder;
        std::string plain(input), cipher;

        CryptoPP::SecByteBlock key((int)_initializeKey.size()), iv((int)_initializeVector.size());

        encoder.Put(key.data(), key.size());
        encoder.MessageEnd();

        encoder.Put(iv.data(), iv.size());
        encoder.MessageEnd();

        CryptoPP::XChaCha20::Encryption enc;    
        enc.SetKeyWithIV(key, key.size(), iv, iv.size());

        CryptoPP::StringSource ss1(plain, true, new CryptoPP::StreamTransformationFilter(enc, new CryptoPP::StringSink(tResult)));

        encoder.Put((const CryptoPP::byte*)cipher.data(), cipher.size());
        encoder.MessageEnd();

        int length = tResult.length() + 1;

        char* bResult = new char[length];
        const char* fResult = new char[length];

        strcpy(bResult, tResult.c_str());
        fResult = bResult;

        return fResult;
    }

    EMSCRIPTEN_KEEPALIVE const char *DecryptXChaCha20(const char *input, const char *initializeKey, const char *initializeVector)
    {
        std::string tResult;
        std::string _initializeKey(initializeKey), _initializeVector(initializeVector);

        CryptoPP::HexEncoder encoder;
        std::string plain(input);

        CryptoPP::SecByteBlock key((int)_initializeKey.size()), iv((int)_initializeVector.size());

        encoder.Put(key.data(), key.size());
        encoder.MessageEnd();

        encoder.Put(iv.data(), iv.size());
        encoder.MessageEnd();

        CryptoPP::XChaCha20::Decryption dec;    
        dec.SetKeyWithIV(key, key.size(), iv, iv.size());

        CryptoPP::StringSource ss2(plain, true, new CryptoPP::StreamTransformationFilter(dec, new CryptoPP::StringSink(tResult)));

        int length = tResult.length() + 1;

        char* bResult = new char[length];
        const char* fResult = new char[length];

        strcpy(bResult, tResult.c_str());
        fResult = bResult;

        return fResult;
    }

    EMSCRIPTEN_KEEPALIVE const char *EncryptAES(const char *input, int initializeKey, int initializeVector)
    {
        std::string tInput(input), tResult;

        CryptoPP::byte key[CryptoPP::AES::DEFAULT_KEYLENGTH], iv[CryptoPP::AES::BLOCKSIZE];
        memset(key, initializeKey, CryptoPP::AES::DEFAULT_KEYLENGTH);
        memset(iv, initializeVector, CryptoPP::AES::BLOCKSIZE);

        CryptoPP::AES::Encryption aesEncryption(key, CryptoPP::AES::DEFAULT_KEYLENGTH);
        CryptoPP::CBC_Mode_ExternalCipher::Encryption cbcEncryption(aesEncryption, iv);

        CryptoPP::StreamTransformationFilter encrypt(cbcEncryption, new CryptoPP::StringSink(tResult));
        encrypt.Put(reinterpret_cast<const unsigned char*>(tInput.c_str()), tInput.length());

        int length = tResult.length() + 1;

        char* bResult = new char[length];
        const char* fResult = new char[length];

        strcpy(bResult, tResult.c_str());
        fResult = bResult;

        return fResult;
    }

    EMSCRIPTEN_KEEPALIVE const char *DecryptAES(const char *input, int initializeKey, int initializeVector)
    {
        std::string tInput(input), tResult;

        CryptoPP::byte key[CryptoPP::AES::DEFAULT_KEYLENGTH], iv[CryptoPP::AES::BLOCKSIZE];
        memset(key, initializeKey, CryptoPP::AES::DEFAULT_KEYLENGTH);
        memset(iv, initializeVector, CryptoPP::AES::BLOCKSIZE);

        CryptoPP::AES::Decryption aesDecryption(key, CryptoPP::AES::DEFAULT_KEYLENGTH);
        CryptoPP::CBC_Mode_ExternalCipher::Decryption cbcDecryption(aesDecryption, iv);

        CryptoPP::StreamTransformationFilter decrypt(cbcDecryption, new CryptoPP::StringSink(tResult));
        decrypt.Put(reinterpret_cast<const unsigned char*>(tInput.c_str() ), tInput.size());
        decrypt.MessageEnd();

        int length = tResult.length() + 1;

        char* bResult = new char[length];
        const char* fResult = new char[length];

        strcpy(bResult, tResult.c_str());
        fResult = bResult;

        return fResult;
    }

    EMSCRIPTEN_KEEPALIVE const char *EncryptRC6(const char *input, long initializeKey, long initializeVector)
    {
        std::string tInput(input), tResult, tResultOK;

        CryptoPP::SecByteBlock key(CryptoPP::RC6::DEFAULT_KEYLENGTH);
        memset(key, (long)initializeKey, CryptoPP::RC6::DEFAULT_KEYLENGTH);

        CryptoPP::byte iv[CryptoPP::RC6::BLOCKSIZE];
        memset(iv, (long)initializeVector, CryptoPP::RC6::BLOCKSIZE);

        CryptoPP::CBC_Mode<CryptoPP::RC6>::Encryption enc;

        enc.SetKeyWithIV(key, key.size(), iv);

        CryptoPP::StringSource(input, true, new CryptoPP::StreamTransformationFilter(enc, new CryptoPP::StringSink(tResult)));

        CryptoPP::StringSource(tResult, true, new CryptoPP::HexEncoder(new CryptoPP::StringSink(tResultOK)));

        int length = tResultOK.length() + 1;

        char* bResult = new char[length];
        const char* fResult = new char[length];

        strcpy(bResult, tResultOK.c_str());
        fResult = bResult;

        return fResult;
    }

    EMSCRIPTEN_KEEPALIVE const char *DecryptRC6(const char *input, long initializeKey, long initializeVector)
    {
        std::string tInput(input), tResult, tResultOK;

        CryptoPP::SecByteBlock key(CryptoPP::RC6::DEFAULT_KEYLENGTH);
        memset(key, (long)initializeKey, CryptoPP::RC6::DEFAULT_KEYLENGTH);

        CryptoPP::byte iv[CryptoPP::RC6::BLOCKSIZE];
        memset(iv, (long)initializeVector, CryptoPP::RC6::BLOCKSIZE);

        CryptoPP::CBC_Mode<CryptoPP::RC6>::Decryption dec;

        dec.SetKeyWithIV(key, key.size(), iv);

        CryptoPP::StringSource(input, true, new CryptoPP::HexDecoder(new CryptoPP::StringSink(tResult)));

        CryptoPP::StringSource ssrc(tResult, true, new CryptoPP::StreamTransformationFilter(dec, new CryptoPP::StringSink(tResultOK)));

        int length = tResultOK.length() + 1;

        char* bResult = new char[length];
        const char* fResult = new char[length];

        strcpy(bResult, tResultOK.c_str());
        fResult = bResult;

        return fResult;
    }
}
