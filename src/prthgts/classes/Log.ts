import * as cfg from "../config.json"


// eslint-disable-next-line @typescript-eslint/no-namespace
export namespace prthgts
{
    export class CLog
    {
        private m_debug:boolean;

        constructor()
        {
            this.m_debug = (cfg.custom_config.status === 1) ? true : false;
        }

        /**
         * @brief show log on if m_debug true
         * 
         * @param args
        */
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        public DEBUG(args:any):void
        {
            if (this.m_debug)
            {
                console.log(`(DBG) - ${args}`);
            }
        }

        /**
         * @brief always show log
         * 
         * @param args
        */
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        public DEBUG_ALWAYS(args:any):void
        {
            console.log(`(LOG) - ${args}`);
        }

        /**
         * @brief show error log on if m_debug true
         * 
         * @param args
        */
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        public ERROR(args:any):void
        {
            if (this.m_debug)
            {
                console.error(`(ERR) - ${args}`);
            }
        }

        /**
         * @brief always show error log
         * 
         * @param args
        */
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        public ERROR_ALWAYS(args:any):void
        {
            console.log(`(ERR) - ${args}`);
        }
    }
}