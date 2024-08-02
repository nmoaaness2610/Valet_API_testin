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
        // Check if the rates array is empty
        if (rates.length === 0) {
            return 0; // Return 0 or handle according to your requirements
        }

        // Calculate the sum of all rates
        const sum = rates.reduce((accumulator, currentRate) => accumulator + currentRate, 0);

        // Calculate and return the average
        return sum / rates.length;
    }
}
