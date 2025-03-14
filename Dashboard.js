// src/Dashboard.js
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Line } from 'react-chartjs-2';

const Dashboard = () => {
  const [trafficData, setTrafficData] = useState([]);

  useEffect(() => {
    fetchTrafficData();
    const interval = setInterval(fetchTrafficData, 30000); // Refresh every 30 seconds
    return () => clearInterval(interval);
  }, []);

  const fetchTrafficData = async () => {
    try {
      const res = await axios.get('http://localhost:5000/api/traffic-data');
      setTrafficData(res.data);
    } catch (error) {
      console.error("Error fetching traffic data", error);
    }
  };

  // Prepare data for the chart
  const chartData = {
    labels: trafficData.map(d => new Date(d.timestamp).toLocaleTimeString()),
    datasets: [
      {
        label: 'Vehicle Count',
        data: trafficData.map(d => d.vehicle_count),
        fill: false,
        backgroundColor: 'rgb(75,192,192)',
        borderColor: 'rgba(75,192,192,0.2)',
      },
      {
        label: 'Average Speed',
        data: trafficData.map(d => d.average_speed),
        fill: false,
        backgroundColor: 'rgb(255,99,132)',
        borderColor: 'rgba(255,99,132,0.2)',
      },
      {
        label: 'Congestion Level',
        data: trafficData.map(d => d.congestion_level),
        fill: false,
        backgroundColor: 'rgb(255,205,86)',
        borderColor: 'rgba(255,205,86,0.2)',
      },
    ]
  };

  return (
    <div>
      <h1>Smart Traffic Dashboard</h1>
      <Line data={chartData} />
      <p>Data updates every 30 seconds.</p>
    </div>
  );
};

export default Dashboard;
