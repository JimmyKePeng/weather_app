# Weather App

A simple weather application that allows users to enter a ZIP code and get the current weather information, including temperature and weather description, from the OpenWeather API. The app also updates the background image based on the temperature (sunny for warmer weather and cloudy for cooler weather).

## Features

- Enter a ZIP code to check the current weather.
- Display weather details such as temperature and description.
- Dynamically change the background image based on the temperature (sunny for warm weather and cloudy for cool weather).

## Technologies Used

- **Node.js**: Backend runtime for server-side JavaScript.
- **Express**: Web framework for Node.js to handle HTTP requests.
- **EJS**: Templating engine to render dynamic HTML pages.
- **Axios**: Promise-based HTTP client for making requests to the OpenWeather API.
- **Dotenv**: To manage API keys securely with environment variables.
- **CSS**: Styling for the app’s frontend.

## Installation

1. Clone the repository.

2. Navigate to the project directory.

3. Install the necessary dependencies:

    ```bash
    npm install
    ```

4. Create a `.env` file in the root directory and add your OpenWeather API key:

    ```env
    API_KEY=your-openweather-api-key
    ```

5. Start the application:

    ```bash
    node index.js
    ```

6. The app will be available at `http://localhost:3000`.

## Usage

1. Open the app in your browser.
2. Enter a valid ZIP code in the input field and click **Enter**.
3. The app will display the weather information, and the background image will change based on the temperature.
4. The weather details are updated every time a new ZIP code is entered.

## Example

When the user enters the ZIP code `94601` (Oakland, CA), the app might display:

- Weather: Clear Sky
- Temperature: 72°F
- Background image: Sunny

## Security

Make sure to keep **API key** secure by using environment variables. The API key is not committed to GitHub but should be saved in a `.env` file in the root directory of the project.

