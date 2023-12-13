import React, { useEffect, useState } from 'react';
import { Pie } from 'react-chartjs-2';
import {Chart as ChartJS} from 'chart.js/auto'
import BarChart from './BarChart';
import axios from 'axios';


const PieChart = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:3000/Data")
      .then((res) => {
        setData(res.data);
      })
  }, []);

  const labels = data.slice().reverse().map((item) => `${item.fname} ${item.lname}`);
  const values = data.slice().reverse().map((item) => item.id);

  const pieChartData =  {
    labels: labels,
    datasets: [
      {
        data: values,
        backgroundColor: [
          'red', 'blue', 'green', 'orange', 'purple', 'yellow',
        ],
      },
    ],
  };

  return (
    <div className='charts'>
      <div style={{ Width: '100%' }} className='pie-div'>
        <h1>Users Pie Chart</h1>
          <Pie data={pieChartData} className='pie'/>
      </div>
      <>
        <BarChart/>
      </>
    </div>
  );
};

export default PieChart;
