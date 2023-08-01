import CUtility from "./classes/Utility";
import { EStatusBuild } from "./enums/StatusEnums";


/**
 * @brief prthgts global access
*/
const prthgts = {
//#region classes
    /**
     * @brief prthgts utility access
    */
    util: new CUtility(),
//#endregion
//#region enums
    enum: {
        EStatusBuild: EStatusBuild
    }
//#endregion
}


export default prthgts;