import * as prthgtsUTIL from "./classes/Utility";
import * as prthgtsLOG from "./classes/Log";


/**
 * @brief prthgts global access
*/
const prthgts = {
    /**
     * @brief prthgts utils access
    */
    utils: new prthgtsUTIL.prthgts.CUtility(),
    /**
     * @brief prthgts log class access
    */
    log: new prthgtsLOG.prthgts.CLog()
}


export default prthgts;