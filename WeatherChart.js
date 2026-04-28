
import React from 'react';
import { Line } from 'react-chartjs-2';
function WeatherChart({ data }) {
 const chartData = {
 labels: data.map(item => new Date(item.dt * 1000).toLocaleTimeString()),
 datasets: [
 {
 label: 'Temperature (°C)',
 data: data.map(item => item.temp),
 borderColor: 'blue',
 fill: false,
 }
 ]
 };
 return <Line data={chartData} />;
}
export default WeatherChart; 