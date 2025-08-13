const cityName = document.getElementById("cityDisplay");
const temp = document.getElementById("tempDisplay");
const wind = document.getElementById("wind");
const humidity = document.getElementById("humidity");
setInterval(()=>{
    const currentData = new Date();
    const dateDisplay = document.getElementById("dateDisplay");
    const hr = document.getElementById("hour");
    const min = document.getElementById("minute");
    dateDisplay.innerText = currentData.getDate() + ' / ' + (currentData.getMonth()+1) + ' / '+ currentData.getFullYear(); 
    hr.innerText = String(currentData.getHours()).padStart(2,'0');
    min.innerText = String(currentData.getMinutes()).padStart(2,'0');
},1000);
const City = document.getElementById("cityname").value;

async function getData(city){
    try{
        const apiUrl = "https://api.openweathermap.org/data/2.5/weather?q=" + city + "&appid=62bc6dcbfb2f0238c727f0d65b9597fa&units=metric";
        const response = await fetch(apiUrl);
        const data = await response.json();
        cityName.innerText = data.name; 
        temp.innerText = data.main.temp + " °C";
        wind.innerText = data.wind.speed + " km/h";
        humidity.innerText = data.main.humidity + " %";
    }
    catch(error){
        alert("Sorry something went wrong!");
    }
}
getData("London");
function searchData() {
    const cityInput = document.getElementById("cityname");
    const City = cityInput.value.trim();
    if (City) {
        getData(City);
        cityInput.value = "";
    } else {
        getData("London");
    }
}
