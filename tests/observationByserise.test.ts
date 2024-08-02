import { test, expect } from '@playwright/test';
import { UrlBuilder } from '../utilities/UrlBuilder'; // Importing UrlBuilder class for constructing API URLs
import { HeaderBuilder } from '../utilities/HeaderBuilder'; // Importing HeaderBuilder class for building request parameters
import { ForexUtils } from '../utilities/ForexUtils'


// Test case to validate that a successful GET request to the observations endpoint returns a status 200
test('GET request to observations by series endpoint should return status 200', async ({ request }) => {
  // Define the parameters for the API request
  const startDate = HeaderBuilder.setDate('2023-01-23'); // Set the start date
  const endDate = HeaderBuilder.setDate('2023-07-19'); // Set the end date
  const seriesNames = HeaderBuilder.buildSerisename(['AUDCAD', 'USDCAD']); // Build the series names string
  const url = UrlBuilder.getObservationSeries(seriesNames, 'csv', startDate, endDate); // Construct the URL

  // Send the GET request
  const response = await request.get(url);

  // Assert that the response status is 200 (OK)
  expect(response.status()).toBe(200);
});

// Test case to validate that using an incorrect currency code returns a status 404
test('Use wrong currency code does not exist 404', async ({ request }) => {
  // Define the parameters for the API request with an incorrect currency code
  const startDate = HeaderBuilder.setDate('2023-01-23'); // Set the start date
  const endDate = HeaderBuilder.setDate('2023-07-19'); // Set the end date
  const seriesNames = HeaderBuilder.buildSerisename(['AACAD', 'USDCAD']); // Build the series names string with an invalid code
  const url = UrlBuilder.getObservationSeries(seriesNames, 'csv', startDate, endDate); // Construct the URL

  // Send the GET request
  const response = await request.get(url);

  // Assert that the response status is 404 (Not Found)
  expect(response.status()).toBe(404);
});

// Test case to validate that using a future date as the start date returns a status 400
test('Use future date as a start date, 400', async ({ request }) => {
  // Define the parameters for the API request with a future start date
  const startDate = HeaderBuilder.setDate('2025-01-23'); // Set a future start date
  const endDate = HeaderBuilder.setDate('2023-07-19'); // Set the end date
  const seriesNames = HeaderBuilder.buildSerisename(['AUDCAD', 'USDCAD']); // Build the series names string
  const url = UrlBuilder.getObservationSeries(seriesNames, 'csv', startDate, endDate); // Construct the URL

  // Send the GET request
  const response = await request.get(url);

  // Assert that the response status is 400 (Bad Request)
  expect(response.status()).toBe(400);
});

// Test case to validate the response format is JSON
test('Validate the response format', async ({ request }) => {
  // Define the parameters for the API request
  const startDate = HeaderBuilder.setDate('2022-01-23'); // Set the start date
  const endDate = HeaderBuilder.setDate('2023-07-19'); // Set the end date
  const seriesNames = HeaderBuilder.buildSerisename(['AUDCAD', 'USDCAD']); // Build the series names string
  const format = HeaderBuilder.setOutputformat(); // Set the output format (assuming 'json' by default)
  const url = UrlBuilder.getObservationSeries(seriesNames, format, startDate, endDate); // Construct the URL

  // Send the GET request
  const response = await request.get(url);

  // Check the content type of the response
  const contentType = response.headers()['content-type'];
  
  // Assert that the response status is 200 (OK)
  expect(response.status()).toBe(200);
  
  // Assert that the response content type is JSON
  expect(contentType).toContain('application/json');
});

test('Calculate average Forex conversion rate for CAD to AUD over the last 10 weeks', async ({ request }) => {
  const startDate = HeaderBuilder.setDate('2023-05-15'); // Set the start date
  const endDate = HeaderBuilder.setDate('2023-07-16'); // Set the end date
  const seriesNames = HeaderBuilder.buildSerisename(['AUDCAD']); // Build the series names string
  const url = UrlBuilder.getObservationSeries(seriesNames, 'csv', startDate, endDate); // Construct the URL

  // Send the GET request
  const response = await request.get(url);
  expect(response.status()).toBe(200);

  // Parse CSV response
  const responseBody = await response;
  const jsonAnswer = ForexUtils.parseJsonResponse(responseBody ,'FXAUDCAD');
  const averageRates = ForexUtils.calculateAverage(jsonAnswer)
  
  expect(averageRates).toBe(0.99);
  
});