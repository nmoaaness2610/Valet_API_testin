// Helper class to build headers and parameters for API requests
export class HeaderBuilder {

    /**
     * Constructs a series name from an array of currency codes.
     * The series name is prefixed with 'FX' and joined by '%2C' (URL encoding for comma).
     * 
     * @param currencies - An array of currency codes, e.g., ['AUDCAD', 'USDCAD']
     * @returns A string representing the series name, e.g., 'FXAUDCAD%2CFXUSDCAD'
     */
    static buildSerisename(currencies: string[]): string {
        // Map each currency code to 'FX' prefix and join them with '%2C'
        const seriseName = currencies.map(name => `FX${name}`).join('%2C');

        // Return the series name as a string
        return seriseName.toString();
    }

    /**
     * Sets the output format for the API request.
     * Defaults to 'json' if no format is provided.
     * 
     * @param format - The desired output format, e.g., 'json', 'csv'
     * @returns The format string
     */
    static setOutputformat(format: string = 'json'): string {
        // Return the output format
        return format;
    }

    /**
     * Sets the date parameter for the API request.
     * 
     * @param inputDate - The date string to be used in the API request
     * @returns The date string
     */
    static setDate(inputDate: string): string {
        // Return the input date
        return inputDate;
    }
}