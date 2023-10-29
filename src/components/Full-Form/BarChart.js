// import React, { useEffect, useState } from "react";
// import { Bar } from "react-chartjs-2";
// import {Chart as ChartJS} from "chart.js/auto"
// import axios from "axios"

// function BarChart(){
//     const [barData, setBarData] = useState([])

//     useEffect(()=>{
//         axios.get("http://localhost:3000/Data")
//         .then((res) => {
//           setBarData(res.data);
//         })
//     }, [])

//     const labels = barData.map((val) => `${val.fname}${val.lname}`);
//     const values = barData.map((val) => val.id)

//     const BarChart = {
//         label :labels,
//         datasets: [
//             {
//                 data: values,
//                 backgroundColor :['red', 'blue', 'green', 'orange', 'purple', 'yellow']
//             }
//         ]
        
//     }
//     return (
//         <div>
//           <h1>Users Bar Chart</h1>
//           <div style={{ maxWidth: '400px' }}>
//             <Bar data={BarChart} />
//           </div>
//         </div>
//       );
// }

// export default BarChart



import React, { useEffect, useState } from 'react';
import { Bar } from 'react-chartjs-2';
import {Chart as ChartJS} from "chart.js/auto"
import axios from 'axios';

const BarChart = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:3000/Data")
      .then((res) => {
        setData(res.data);
      })
  }, []);

  // Extract labels and values from the data
  const labels = data.map((item) => `${item.fname} ${item.lname}`);
  const values = data.map((item) => item.id);

  // Create data for the bar chart
  const barChartData = {
    labels: labels,
    datasets: [
      {
        label: 'User IDs',
        data: values,
        backgroundColor: 'teal', // You can change the color as needed
        borderColor: 'rgba(75, 192, 192, 1', // You can change the color as needed
        borderWidth: 1,
      },
    ],
  };

  return (
    <> 
      <div style={{ Width: '100%' }}>
        <h1>Users Bar Chart</h1>
          <Bar data={barChartData} />
      </div>
    </>
  );
};

export default BarChart;
