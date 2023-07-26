'use strict';

/* eslint-disable @typescript-eslint/no-namespace */
var prthgts$2;
(function (prthgts) {
    /**
     * @brief prthgts utility class
    */
    class CUtility {
        m_alphanumeric = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
        constructor() {
        }
        /**
         * @brief generate random number
         *
         * @param min
         * @param max
         * @return number
        */
        GenRandomNumber(min, max, isRound) {
            return (isRound) ? Math.round(Math.random() * (max - min) + min) : Math.random() * (max - min) + min;
        }
        /**
         * @brief generate random alphanumeric
         *
         * @note if length < 1, default will be set to 1
         *
         * @param length
         * @return std::string
         */
        GenRandomAlphanumeric(length) {
            let result = "";
            if (length <= 0) {
                length = 1;
            }
            for (let i = 0; i < length; i++) {
                const j = this.GenRandomNumber(0, this.m_alphanumeric.length - 1, true);
                result += this.m_alphanumeric.at(j);
            }
            return result;
        }
        /**
         * @brief generate random uuid
         *
         * @return std::string
         */
        GenRandomUUID() {
            let result = "";
            const str1 = this.GenRandomAlphanumeric(8), str2 = this.GenRandomAlphanumeric(4), str3 = this.GenRandomAlphanumeric(4), str4 = this.GenRandomAlphanumeric(4), str5 = this.GenRandomAlphanumeric(12);
            result = `${str1}-${str2}-${str3}-${str4}-${str5}`;
            return result;
        }
        /**
         * @brief check if input is alphabetic value
         *
         * @param input
         * @return true
         * @return false
         */
        CheckInputIsAlphabetic(input) {
            return !/[^a-zA-Z]/.test(input);
        }
        /**
         * @brief check if input is alphanumeric value
         *
         * @param input
         * @return true
         * @return false
         */
        CheckInputIsAlphaNumeric(input) {
            return !/[^a-zA-Z0-9]/.test(input);
        }
        /**
         * @brief change input to letter case
         *
         * @param input
         * @param letterCase 0 is lowercase, 1 is uppercase, 2 is mixedcase
         * @return std::string
         */
        ChangeInputLetterCase(input, letterCase) {
            let result = "";
            switch (letterCase) {
                case 0:
                    {
                        for (let i = 0; i < input.length; i++) {
                            result += input[i].toString().toLowerCase();
                        }
                    }
                    break;
                case 1:
                    {
                        for (let i = 0; i < input.length; i++) {
                            result += input[i].toString().toUpperCase();
                        }
                    }
                    break;
                case 2:
                    {
                        for (let i = 0; i < input.length; i++) {
                            // 0 is lower, 1 is upper
                            const mixedcase = this.GenRandomNumber(0, 1, true);
                            if (mixedcase == 0 && this.CheckInputIsAlphabetic(input[i].toString())) {
                                result += input[i].toString().toLowerCase();
                            }
                            else if (mixedcase == 1 && this.CheckInputIsAlphabetic(input[i].toString())) {
                                result += input[i].toString().toUpperCase();
                            }
                            else {
                                result += input[i].toString();
                            }
                        }
                    }
                    break;
                default:
                    {
                        result = input;
                    }
                    break;
            }
            return result;
        }
    }
    prthgts.CUtility = CUtility;
})(prthgts$2 || (prthgts$2 = {}));

// eslint-disable-next-line @typescript-eslint/no-namespace
var prthgts$1;
(function (prthgts) {
    class CLog {
        m_debug;
        constructor() {
            this.m_debug = true ;
        }
        /**
         * @brief show log on if m_debug true
         *
         * @param args
        */
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        DEBUG(args) {
            if (this.m_debug) {
                console.log(`(DBG) - ${args}`);
            }
        }
        /**
         * @brief always show log
         *
         * @param args
        */
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        DEBUG_ALWAYS(args) {
            console.log(`(LOG) - ${args}`);
        }
        /**
         * @brief show error log on if m_debug true
         *
         * @param args
        */
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        ERROR(args) {
            if (this.m_debug) {
                console.error(`(ERR) - ${args}`);
            }
        }
        /**
         * @brief always show error log
         *
         * @param args
        */
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        ERROR_ALWAYS(args) {
            console.log(`(ERR) - ${args}`);
        }
    }
    prthgts.CLog = CLog;
})(prthgts$1 || (prthgts$1 = {}));

/**
 * @brief prthgts global access
*/
const prthgts = {
    /**
     * @brief prthgts utils access
    */
    utils: new prthgts$2.CUtility(),
    /**
     * @brief prthgts log class access
    */
    log: new prthgts$1.CLog()
};

// eslint-disable-next-line @typescript-eslint/no-unused-vars
async function main() {
    let errCount = 0;
    prthgts.log.DEBUG("start test: prthts");
    console.log("-----------------------------------------------");
    console.log("===============================================");
    const util = prthgts.utils;
    console.log("\n# generating alphanumer");
    for (let i = 0; i < 10; i++) {
        console.log(`${i + 1}:\n${util.GenRandomAlphanumeric(i)}\n`);
    }
    console.log("-----------------------------------------------");
    console.log("\n# generating uuid");
    for (let i = 0; i < 10; i++) {
        const uuid = util.GenRandomUUID();
        console.log(`${i + 1}:\n${uuid}\n${util.ChangeInputLetterCase(uuid, 0)}\n${util.ChangeInputLetterCase(uuid, 1)}\n${util.ChangeInputLetterCase(uuid, 2)}\n`);
    }
    console.log("-----------------------------------------------");
    const t1 = "wqeasd";
    if (util.CheckInputIsAlphabetic(t1)) {
        console.log(`#t1: ${t1} | is alphabetic\n`);
    }
    else {
        console.error(`#t1 error\n`);
        errCount += 1;
    }
    console.log("-----------------------------------------------");
    const t2 = "asdzxc123456";
    if (util.CheckInputIsAlphaNumeric(t2)) {
        console.log(`#t2: ${t2} | is alphanumeric\n`);
    }
    else {
        console.error(`#t2 error\n`);
        errCount += 1;
    }
    console.log("===============================================");
    console.log("-----------------------------------------------");
    prthgts.log.DEBUG("end test: prthts");
    prthgts.log.DEBUG(`error: ${errCount}`);
}
main();
//# sourceMappingURL=main_test.js.map
