const  temperature = 25;
const windSpeed = 15;

const calculateWindChill = (temp, speed) => 13.12 + 0.6215 * temp - 11.37 * Math.pow(speed, 0.16) + 0.3965 * temp * Math.pow(speed, 0.16);

const wcDisplay = document.querySelector('#windchill');
if (temperature <= 10 && windSpeed > 4.8) {
    const windChill = calculateWindChill(temperature, windSpeed);
    wcDisplay.textContent = `${windChill.toFixed(1)} °C`;
} else {
    wcDisplay.textContent = 'N/A';
}