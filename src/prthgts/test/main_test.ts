// eslint-disable-next-line @typescript-eslint/no-unused-vars
import prthgts from "../prthgts";


async function main()
{
    let errCount:number = 0;

    prthgts.log.DEBUG("start test: prthts");
    console.log("-----------------------------------------------");
    console.log("===============================================");

    const util = prthgts.utils;

    console.log("\n# generating alphanumer");
    for (let i = 0; i < 10; i++)
    {
        console.log(`${i+1}:\n${util.GenRandomAlphanumeric(i)}\n`);
    }

    console.log("-----------------------------------------------");
    console.log("\n# generating uuid");
    for (let i = 0; i < 10; i++)
    {
        const uuid = util.GenRandomUUID();
        console.log(`${i+1}:\n${uuid}\n${util.ChangeInputLetterCase(uuid, 0)}\n${util.ChangeInputLetterCase(uuid, 1)}\n${util.ChangeInputLetterCase(uuid, 2)}\n`);
    }

    console.log("-----------------------------------------------");
    const t1 = "wqeasd";
    if (util.CheckInputIsAlphabetic(t1))
    {
        console.log(`#t1: ${t1} | is alphabetic\n`);
    }
    else
    {
        console.error(`#t1 error\n`);
        errCount += 1;
    }

    console.log("-----------------------------------------------");
    const t2 = "asdzxc123456";
    if (util.CheckInputIsAlphaNumeric(t2))
    {
        console.log(`#t2: ${t2} | is alphanumeric\n`);
    }
    else
    {
        console.error(`#t2 error\n`);
        errCount += 1;
    }

    console.log("===============================================");
    console.log("-----------------------------------------------");
    prthgts.log.DEBUG("end test: prthts");
    prthgts.log.DEBUG(`error: ${errCount}`);
}


main();