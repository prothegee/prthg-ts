import * as CryptographyFunctions from "./cppport-wasm.js";


async function RunTestCryptographyClass()
{
    /**
     * @note you need to copy cppport-wasm.* to ./src/test/ dir
     */
    CryptographyFunctions.onRuntimeInitialized = async() => {
        console.log("Test CryptographyFunctions: Started\n");


        const email = "foo@bar.baz";

        const password = "password123!";
        const passwordSalt = "superSALT321!";

        const message = "secret message #1 !";
    
        // const iKeyXChaCha20 = "abcdefghijklmnopqrstuvwxyz123456"; // 32
        // const iVecXChaCha20 = "abcdefghijklmnopqrstuvwx"; // 24
        
        // const iKeyAES = 123456789; // 9
        // const iVecAES = 987654321; // 9
        
        const iKeyRC6 = 1234567891234567; // 16
        const iVecRC6 = 9876543219876543; // 16


        const GenerateSHA1 = CryptographyFunctions.cwrap('GenerateSHA1', 'string', ['string']);
        const GenerateSHA224 = CryptographyFunctions.cwrap('GenerateSHA224', 'string', ['string']);
        const GenerateSHA256 = CryptographyFunctions.cwrap('GenerateSHA256', 'string', ['string']);
        const GenerateSHA384 = CryptographyFunctions.cwrap('GenerateSHA384', 'string', ['string']);
        const GenerateSHA512 = CryptographyFunctions.cwrap('GenerateSHA512', 'string', ['string']);
        const GenerateBLAKE2b = CryptographyFunctions.cwrap('GenerateBLAKE2b', 'string', ['string']);
        const GenerateHasherSCRYPT = CryptographyFunctions.cwrap('GenerateHasherSCRYPT', 'string', ['string','string']);


        // const EncryptXChaCha20 = CryptographyFunctions.cwrap('EncryptXChaCha20', 'string', ['string','string', 'string']);
        // const DecryptXChaCha20 = CryptographyFunctions.cwrap('DecryptXChaCha20', 'string', ['string','string', 'string']);

        // const EncryptAES = CryptographyFunctions.cwrap('EncryptAES', 'string', ['string','number', 'number']);
        // const DecryptAES = CryptographyFunctions.cwrap('DecryptAES', 'string', ['string','number', 'number']);

        const EncryptRC6 = CryptographyFunctions.cwrap('EncryptRC6', 'string', ['string','number','number']);
        const DecryptRC6 = CryptographyFunctions.cwrap('DecryptRC6', 'string', ['string','number','number']);


        const SHA1 = GenerateSHA1(email);
        // console.log(`SHA1:\n${SHA1}`);
        if (SHA1 !== "93560DA644DAA8BE7EC684EA113CA02287F80AD7")
        {
            throw new Error("SHA1 failed");
        }

        const SHA224 = GenerateSHA224(email);
        // console.log(`SHA224:\n${SHA224}`);
        if (SHA224 !== "9BE6EC75046155F3B5737BECA50B278FA01CD21E487CC88ADB019CF5")
        {
            throw new Error("SHA224 failed");
        }

        const SHA256 = GenerateSHA256(email);
        // console.log(`SHA256:\n${SHA256}`);
        if (SHA256 !== "80C66BDD90AE7FD4378CEF780422FE428EE7FB526301F7B236113C4ECE3BE146")
        {
            throw new Error("SHA256 failed");
        }

        const SHA384 = GenerateSHA384(email);
        // console.log(`SHA384:\n${SHA384}`);
        if (SHA384 !== "A7CF0DC6586E904F0FA5CDE24AFC64ED5D8730599FAD759A4E8543EFCFE687CEDC70A68B50384E9DBC9F816CCFF07186")
        {
            throw new Error("SHA384 failed");
        }

        const SHA512 = GenerateSHA512(email);
        // console.log(`SHA512:\n${SHA512}`);
        if (SHA512 !== "C6A0F190A0E38156B5A8DEB0E1BB5B192FFAEA46BF4C3E69082B3D71F85C7B3DDC8E5AFC4A81A5565F36361811ABBEE4E88CC1B367D6A6A8EAC36C31BD9ED75C")
        {
            throw new Error("SHA512 failed");
        }

        const BLAKE2b = GenerateBLAKE2b(email);
        // console.log(`BLAKE2b:\n${BLAKE2b}`);
        if (BLAKE2b !== "BB07EFD34B28ED04357C760D2E2C00EF947E612D12D68E12A67B19B3F09E7C02A9D2D979F64BDCA47C35A2EFAF2E3B1AF2964475F616EFFA843B3FC25A83DC7A")
        {
            throw new Error("BLAKE2b failed");
        }

        const SCRYPT = GenerateHasherSCRYPT(password, passwordSalt);
        // console.log(`SCRYPT:\n${SCRYPT}`);
        if (SCRYPT !== "0E3CBFDA7121E108F4CE6800C03C18171FB47BB46AAB782796F1D6F3FF9F798BFA6C159D38B685C91CF91C28082D4C92C41243DFD13048620672504F5AB3DA26593592312239D38A6ACCFCA37328B3AD87A0DA385AE038D08BD09A73D8CB70EF69C3D5FA5FA92E374390633812ABBA292809E11CA9593ED3518B6FAF9CAA19B8C8BDA858BEE52539E6AAC0758DA8988E3565DACED44CBAED2BC95E74D131B2E1C45F7C3C8942CBD801392FBCC14462C577F3F29E88C0474ED84DFC0CBB5D05C52F85C4208C70A94FEAC26A5441EA7AA3A63EEC45FBC641C66992E86A137E2CEA0F457C0E037F375AA11FF773C85F7925B34A77CB8CB8BB8F1FCFBD9821A993D8")
        {
            throw new Error("SCRYPT failed");
        }


        // const XChaCha20Enc = EncryptXChaCha20(message, iKeyXChaCha20, iVecXChaCha20); // Invalid UTF-8 leading byte <0x....> encountered when deserializing a UTF-8 string in wasm memory to a JS string!
        // console.log(`XChaCha20Enc:\n${XChaCha20Enc}`);

        // const XChaChaDec = DecryptXChaCha20(XChaCha20Enc, iKeyXChaCha20, iVecXChaCha20); // Invalid UTF-8 leading byte <0x....> encountered when deserializing a UTF-8 string in wasm memory to a JS string!
        // console.log(`XChaChaDec:\n${XChaChaDec}`);


        // const CbcAesEnc = EncryptAES(message, iKeyAES, iVecAES); // Invalid UTF-8 leading byte <0x....> encountered when deserializing a UTF-8 string in wasm memory to a JS string!
        // console.log(`CbcAesEnc:\n${CbcAesEnc}`);

        // const CbcAesDec = DecryptAES(CbcAesEnc, iKeyAES, iVecAES); // Invalid UTF-8 leading byte <0x....> encountered when deserializing a UTF-8 string in wasm memory to a JS string!
        // console.log(`CbcAesDec:\n${CbcAesDec}`);


        const RC6Enc = EncryptRC6(message, iKeyRC6, iVecRC6);
        // console.log(`RC6Enc:\n${RC6Enc}`);

        const RC6Dec = DecryptRC6(RC6Enc, iKeyRC6, iVecRC6);
        // console.log(`RC6Dec:\n${RC6Dec}`);
        if (message !== RC6Dec)
        {
            throw new Error("RC6 message & decrypt failed");
        }


        console.log("Test CryptographyFunctions: Finished\n");
    }
}


async function main()
{
    await RunTestCryptographyClass();
}


main();