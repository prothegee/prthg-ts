/**
 * @brief prthgts utility class
*/
export default class CUtility
{
    private m_alphanumeric:string = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";

    constructor()
    {
    }

    /**
     * @brief generate random number
     * 
     * @param min 
     * @param max 
     * @return number
    */
    public GenerateRandomNumber(min:number, max:number, isRound:boolean):number
    {
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
    public GenerateRandomAlphanumeric(length:number):string
    {
        let result:string = "";

        if (length <= 0) { length = 1; }

        for (let i:number = 0; i < length; i++)
        {
            const j:number = this.GenerateRandomNumber(0, this.m_alphanumeric.length - 1, true);
            result += this.m_alphanumeric.at(j);
        }

        return result;
    }

    /**
     * @brief generate random uuid
     * 
     * @return std::string 
     */
    public GenerateRandomUUID():string
    {
        let result:string = "";
        const str1 = this.GenerateRandomAlphanumeric(8), str2 = this.GenerateRandomAlphanumeric(4), str3 = this.GenerateRandomAlphanumeric(4), str4 = this.GenerateRandomAlphanumeric(4), str5 = this.GenerateRandomAlphanumeric(12);

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
    public CheckInputIsAlphabetic(input:string):boolean
    {
        return !/[^a-zA-Z]/.test(input);
    }

    /**
     * @brief check if input is alphanumeric value
     * 
     * @param input 
     * @return true 
     * @return false 
     */
    public CheckInputIsAlphaNumeric(input:string):boolean
    {
        return !/[^a-zA-Z0-9]/.test(input);
    }

    /**
     * @brief change input to letter case
     * 
     * @param input 
     * @param letterCase 0 is lowercase, 1 is uppercase, 2 is mixedcase
     * @return std::string 
     */
    public ChangeInputLetterCase(input:string, letterCase:number):string
    {
        let result:string = "";

        switch (letterCase)
        {
            case 0:
            {
                for (let i:number = 0; i < input.length; i++)
                {
                    result += input[i].toString().toLowerCase();
                }
            }
            break;

            case 1:
            {
                for (let i:number = 0; i < input.length; i++)
                {
                    result += input[i].toString().toUpperCase();
                }
            }
            break

            case 2:
            {
                for (let i:number = 0; i < input.length; i++)
                {
                    // 0 is lower, 1 is upper
                    const mixedcase:number = this.GenerateRandomNumber(0, 2, true);

                    if (mixedcase == 0 && this.CheckInputIsAlphabetic(input[i].toString()))
                    {
                        result += input[i].toString().toLowerCase();
                    }
                    else if (mixedcase == 1 && this.CheckInputIsAlphabetic(input[i].toString()))
                    {
                        result += input[i].toString().toUpperCase();
                    }
                    else
                    {
                        result += input[i].toString();
                    }
                }
            }
            break

            default:
            {
                result = input;
            }
            break;
        }

        return result;
    }
}
