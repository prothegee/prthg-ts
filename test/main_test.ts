import prthgts from "../src/prthgts/prthgts";


async function RunTestUtilityClass()
{
    const util = prthgts.util;

    console.log("Generate Random Alphanumeric:");
    for (let i = 0; i < 10; i++)
    {
        console.log(`${util.GenerateRandomAlphanumeric(i)}`);
    }

    console.log("\nGenerate Random UUID:");
    for (let i = 0; i < 10; i++)
    {
        const uuid = util.GenerateRandomUUID();
        console.log(`${uuid}\n${util.ChangeInputLetterCase(uuid, 0)}\n${util.ChangeInputLetterCase(uuid, 1)}\n${util.ChangeInputLetterCase(uuid, 2)}\n`);
    }

    const t1 = "wqeasd";
    if (util.CheckInputIsAlphabetic(t1))
    {
        console.log(`${t1} is alphabetic\n`);
    }

    const t2 = "asdzxc123456";
    if (util.CheckInputIsAlphaNumeric(t2))
    {
        console.log(`${t2} is alphanumeric\n`);
    }
}


// async function RunTestCryptographyClass()
// {
// }


async function main()
{
    console.log("Test CUtilty: Started\n");
    await RunTestUtilityClass();
    console.log("Test CUtilty: Finished\n");

    
    // console.log("Test CCryptography: Started\n");
    // RunTestCryptographyClass();
    // console.log("Test CCryptography: Finished\n");
}


main();