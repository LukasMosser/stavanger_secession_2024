function roundToOneDecimalPlace(number) {
    return Math.round(number * 10) / 10;
}

// JavaScript to fetch and display the temperature in Stavanger, Norway
document.addEventListener("DOMContentLoaded", function() {
    fetchTemperature();
});

function fetchTemperature() {
    const apiKey = '4145153dd93b50589eb09be727cb1797';
    const url = `https://api.openweathermap.org/data/2.5/weather?q=Stavanger,no&appid=4145153dd93b50589eb09be727cb1797`;

    fetch(url)
    .then(response => response.json())
    .then(data => {
        const temperature = data.main.temp;
        document.getElementById('temperature').textContent = `${roundToOneDecimalPlace(temperature-273.15)}°C`;
    })
    .catch(error => console.log('Error fetching temperature data:', error));
}