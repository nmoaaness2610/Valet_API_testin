// Class to build URL endpoints for the Bank of Canada Valet API
export class UrlBuilder {
    // Base URL for the API endpoint
    private static baseUrl: string = 'https://www.bankofcanada.ca/valet';

    /**
     * Constructs the URL for the observations endpoint with the specified parameters.
     * 
     * @param seriesNames - A comma-separated string of series names to include in the URL
     * @param format - The desired format of the response, e.g., 'json', 'csv'
     * @param startDate - The start date for the observations, formatted as 'YYYY-MM-DD'
     * @param endDate - The end date for the observations, formatted as 'YYYY-MM-DD'
     * @returns The full URL string for the API request
     */
    static getObservationSeries(
        seriesNames: string, 
        format: string, 
        startDate: string, 
        endDate: string
    ): string {
        // Build the URL by concatenating the base URL with endpoint-specific paths and query parameters
        return `${this.baseUrl}/observations/${seriesNames}/${format}?start_date=${startDate}&end_date=${endDate}`;
    } 
}