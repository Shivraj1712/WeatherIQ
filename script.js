// Async function to fetch weather data for multiple cities and display it on the page
let getData = async () => {
    // List of cities to fetch weather data for
    const cities = ["Delhi", "London", "Tokyo", "Paris", "Sydney","New York"];

    // Loop through each city one by one
    for (let cityName of cities) {
        try {
            // Build the API URL with the current city and your API key
            let url = "https://api.openweathermap.org/data/2.5/weather?q=" + cityName + "&appid=62bc6dcbfb2f0238c727f0d65b9597fa&units=metric";

            // Fetch the weather data from the API
            let response = await fetch(url);

            // Parse the JSON response into a JavaScript object
            let data = await response.json();

            // Extract required weather details from the response
            let city = data.name;
            let temp = data.main.temp;
            let humidity = data.main.humidity;
            let pressure = data.main.pressure;
            let windspeed = data.wind.speed;

            // Select the container element where city weather details will be added
            let container = document.querySelector(".container");

            // Create a div to hold this city's weather details
            let cityDetails = document.createElement("div");

            // Use city name as the class for styling (optional)
            cityDetails.className = "city";

            // Create heading elements for each piece of weather info
            let cityNameElement = document.createElement("h2");
            cityNameElement.innerText = city;

            let tempElement = document.createElement("h4");
            tempElement.innerText = `Temperature: ${temp}°C`;

            let windspeedElement = document.createElement("h4");
            windspeedElement.innerText = `Wind Speed: ${windspeed} m/s`;

            let pressureElement = document.createElement("h4");
            pressureElement.innerText = `Pressure: ${pressure} hPa`;

            let humidityElement = document.createElement("h4");
            humidityElement.innerText = `Humidity: ${humidity}%`;

            // Append all info elements to the cityDetails div
            cityDetails.appendChild(cityNameElement);
            cityDetails.appendChild(tempElement);
            cityDetails.appendChild(pressureElement);
            cityDetails.appendChild(humidityElement);
            cityDetails.appendChild(windspeedElement);

            // Finally, append this city’s weather div to the container on the page
            container.appendChild(cityDetails);

        } catch (error) {
            // If an error happens (e.g., network issue or city not found), handle it gracefully

            // Select the container where you want to show the error message
            let container = document.querySelector(".container");

            // Create a div for the error message
            let errorDiv = document.createElement("div");

            // Optional: add a class to style the error message differently
            errorDiv.className = "error-card";

            // Show a friendly message mentioning the city that failed
            errorDiv.innerText = `⚠️ Sorry, weather data not available for ${cityName}`;

            // Add the error message div to the container
            container.appendChild(errorDiv);

            // Log the actual error to the console for debugging
            console.error(`Error fetching data for ${cityName}:`, error);
        }
    }
};

// Call the function to start fetching and displaying data
getData();
let body=document.querySelector("body");
let mode=true;//true means light mode
// Adding functionality to toggle button
let togglebtn=document.querySelector("#toggle");
togglebtn.addEventListener("click",()=>{
    if(mode==true){
        togglebtn.innerText="☀️";
        mode=false;
        body.style.background="linear-gradient(125deg,#1e3c72,#2a5298)";
        body.style.color="#e6f7ff";
        togglebtn.style.backgroundColor="#e6f7f9";
        let Cities=document.getElementsByClassName("city");
    }else{
        togglebtn.innerText="🌙";
        mode=true;
        body.style.background="linear-gradient(125deg,#86f7f9,#66a6ff)";
        body.style.color="#222";
        togglebtn.style.backgroundColor="#222";
    }
});