// ForexUtils.ts
export class ForexUtils {
    /**
     * Parses the JSON response to extract conversion rates for a specific series name.
     * @param jsonResponse - The JSON response object from the API.
     * @param seriesName - The series name to extract rates for.
     * @returns An array of conversion rates.
     */
    static parseJsonResponse(jsonResponse: any, seriesName: string): number[] {
        const conversionRates: number[] = [];
        console.log(jsonResponse, 'response json');

        // Check if 'observations' exists in the response and is an array
        if (jsonResponse && Array.isArray(jsonResponse.observations)) {
            console.log('Observations:', jsonResponse.observations); // Debugging line
            // Loop through each observation
            jsonResponse.observations.forEach((observation: any) => {
                console.log('Observation:', observation); // Debugging line
                if (observation[seriesName] && observation[seriesName].v) {
                    console.log(`Extracting rate for ${seriesName}:`, observation[seriesName].v); // Debugging line
                    // Parse and add the conversion rate to the array
                    const rate = parseFloat(observation[seriesName].v);
                    if (!isNaN(rate)) {
                        conversionRates.push(rate);
                    }
                }
            });
        } else {
            console.log('No observations found in the response.'); // Debugging line
        }
        
        console.log('Conversion Rates:', conversionRates); // Debugging line
        return conversionRates;
    }

    /**
     * Parses CSV API response and returns a list of conversion rates for the given series name.
     * @param csvResponse - The CSV response string from the API.
     * @param seriesName - The series name to extract rates for.
     * @returns An array of conversion rates.
     */
    static parseCsvResponse(csvResponse: string, seriesName: string) {
        // TODO: 
        // 1. Split the CSV response string into lines based on new lines.
        // 2. Identify the header line and find the column index for the series name.
        // 3. Loop through each line of data, skipping the header.
        // 4. Extract the conversion rate values based on the identified column index.
        // 5. Convert these values to numbers and store them in an array.
        // 6. Return the array of conversion rates.
    }

    /**
     * Parses XML API response and returns a list of conversion rates for the given series name.
     * @param xmlResponse - The XML response string from the API.
     * @param seriesName - The series name to extract rates for.
     * @returns An array of conversion rates.
     */
    static parseXmlResponse(xmlResponse: string, seriesName: string) {
        // TODO:
        // 1. Use an XML parser to convert the XML response string into a JavaScript object.
        // 2. Navigate through the object to locate the nodes or elements containing the conversion rates.
        // 3. Extract the conversion rate values for the given series name.
        // 4. Convert these values to numbers and store them in an array.
        // 5. Return the array of conversion rates.
    }

    /**
     * Calculates the average of a list of conversion rates.
     * @param rates - An array of conversion rates.
     * @returns The average conversion rate.
     */
    static calculateAverage(rates: number[]) {
        // TODO:
        // 1. Check if the array of rates is empty; if it is, return 0 or an appropriate default value.
        // 2. Calculate the sum of all the values in the array.
        // 3. Divide the sum by the number of elements in the array to get the average.
        // 4. Return the calculated average.
    }
}
