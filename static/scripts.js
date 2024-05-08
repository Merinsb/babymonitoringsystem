// scripts.js
// Function to update the humidity value
function updateHumidity(value) {
    document.getElementById('humidityValue').textContent = value + '%';
}

function updateTemperature(value) {
    document.getElementById('temperatureValue').textContent = value + '°C';
}

function updateMoisture(value) {
    document.getElementById('moistureValue').textContent = value;
}
// Function to fetch and update humidity dynamically
function fetchSensorData() {
    fetch('/update_temperature')
        .then(response => response.json())
        .then(data => {
            const temperatureValue = data.temperature;
            updateTemperature(temperatureValue);
        })
        .catch(error => console.error('Error fetching temperature:', error));
    
    fetch('/update_humidity')
        .then(response => response.json())
        .then(data => {
            const humidityValue = data.humidity;
            updateHumidity(humidityValue);
        })
        .catch(error => console.error('Error fetching humidity:', error));
    
    fetch('/update_moisture')
        .then(response => response.json())
        .then(data => {
            const moistureValue = data.moisture;
            updateMoisture(moistureValue);
        })
        .catch(error => console.error('Error fetching moisture:', error));
    
}

// Call fetchSensorData to update sensor data initially
fetchSensorData();

// Update sensor data every 0.5 seconds
setInterval(fetchSensorData, 500);
