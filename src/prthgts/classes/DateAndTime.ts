import { EDateAndTimeFormat } from "../enums/DateEnums";

export default class CDateAndTime
{
    /**
     * @brief current timezone
    */
    public readonly m_timeZone:string;
    /**
     * @brief current date and time
    */
    public readonly m_dateAndTime:string;

    /**
     * @brief current year
    */
    public readonly m_YYYY:number;
    /**
     * @brief current month
    */
    public readonly m_MM:number;
    /**
     * @brief current day
    */
    public readonly m_DD:number;
    /**
     * @brief current hours
    */
    public readonly m_hh:number;
    /**
     * @brief current minutes
    */
    public readonly m_mm:number;
    /**
     * @brief current seconds
    */
    public readonly m_ss:number;

    constructor()
    {
        const currentDate = new Date();
        const cDate = currentDate.getFullYear() + '-' + (currentDate.getMonth() + 1) + '-' + currentDate.getDate();
        const cTime = currentDate.getHours() + ":" + currentDate.getMinutes() + ":" + currentDate.getSeconds();

        this.m_timeZone = Intl.DateTimeFormat().resolvedOptions().timeZone;
        
        const dateTime = cDate + ' ' + cTime + ` ( ${this.m_timeZone} )`;
        
        this.m_dateAndTime =  dateTime;

        this.m_YYYY = currentDate.getFullYear();
        this.m_MM = currentDate.getMonth() + 1;
        this.m_DD = currentDate.getDate();
        this.m_hh = currentDate.getHours();
        this.m_mm = currentDate.getMinutes();
        this.m_ss = currentDate.getSeconds();
    }

    /**
     * @brief get current time on current haradware
     * 
     * @note T is:
     * @note 0 = undefined
     * @note 1 = UTC_TIME // e.g. 2022-06-21 18:10:14
     * @note 2 = FULL_TIMESTAMP // e.g. YYYYMMDDhhmmss
     * @note 3 = YYYYMMDD
     * @note 4 = YYYY
     * @note 5 = MM
     * @note 6 = DD
     * @note 7 = hhmmss
     * @note 8 = hh
     * @note 9 = mm
     * @note 10 = ss
     * 
     * @param dateAndTimeFormat 
     * @return string 
     */
    public GetTime(dateAndTimeFormat:EDateAndTimeFormat):string
    {
        let result:string;


        switch (dateAndTimeFormat)
        {
            case EDateAndTimeFormat.FULL_TIMESTAMP:
            {
                const year = this.m_YYYY;
                const yearStr = year.toString();

                const month = this.m_MM;
                const monthStr = (month < 10) ? `0${month.toString()}` : month.toString();

                const day = this.m_DD;
                const dayStr = (day < 10) ? `0${day.toString()}` : day.toString();

                const hour = this.m_hh;
                const hourStr = (hour < 10) ? `0${hour.toString()}` : hour.toString();

                const minute = this.m_mm;
                const minuteStr = (minute < 10) ? `0${minute.toString()}` : minute.toString();

                const second = this.m_ss;
                const secondStr = (second < 10) ? `0${second.toString()}` : second.toString();


                result = `${yearStr}${monthStr}${dayStr}${hourStr}${minuteStr}${secondStr}`;
            }
            break;

            case EDateAndTimeFormat.YYYYMMDD:
            {
                const year = this.m_YYYY;
                const yearStr = year.toString();

                const month = this.m_MM;
                const monthStr = (month < 10) ? `0${month.toString()}` : month.toString();

                const day = this.m_DD;
                const dayStr = (day < 10) ? `0${day.toString()}` : day.toString();


                result = `${yearStr}${monthStr}${dayStr}`;
            }
            break;

            case EDateAndTimeFormat.YYYY:
            {
                result = this.m_YYYY.toString();
            }
            break;

            case EDateAndTimeFormat.MM:
            {
                result = (this.m_MM < 10) ? `0${this.m_MM.toString()}` : this.m_MM.toString();
            }
            break;

            case EDateAndTimeFormat.DD:
            {
                result = (this.m_DD < 10) ? `0${this.m_DD.toString()}` : this.m_DD.toString();
            }
            break;

            case EDateAndTimeFormat.hhmmss:
            {
                const hour = this.m_hh;
                const hourStr = (hour < 10) ? `0${hour.toString()}` : hour.toString();

                const minute = this.m_mm;
                const minuteStr = (minute < 10) ? `0${minute.toString()}` : minute.toString();

                const second = this.m_ss;
                const secondStr = (second < 10) ? `0${second.toString()}` : second.toString();


                result = `${hourStr}:${minuteStr}:${secondStr}`;
            }
            break;

            case EDateAndTimeFormat.hh:
            {
                result = (this.m_hh < 10) ? `0${this.m_hh.toString()}` : this.m_hh.toString();
            }
            break;

            case EDateAndTimeFormat.mm:
            {
                result = (this.m_mm < 10) ? `0${this.m_mm.toString()}` : this.m_mm.toString();
            }
            break;

            case EDateAndTimeFormat.ss:
            {
                result = (this.m_ss < 10) ? `0${this.m_ss.toString()}` : this.m_ss.toString();
            }
            break;

            default:
            {
                result = "ERR";
            }
            break;
        }

        return result;
    }
}