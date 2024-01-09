import React from 'react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Bar } from 'react-chartjs-2';

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const options = {
  plugins: {
    title: {
      display: true,
      text: 'Bar Chart - Stacked',
    },
  },
  responsive: true,
  scales: {
    x: {
      stacked: true,
      display: false,
    },
    y: {
      stacked: true,
      
       border: {
       
        display: true,
        dash: [5, 5], // Set a dashed line pattern [dash, gap]
      },
       grid: {
        color: 'rgb(105,105,105)', // Set the color for the X-axis grid lines
        
      },
       ticks: {
        padding: 10, // Adjust padding between ticks and axis
        fontSize: 100, // Set the font size of the ticks
        // Other tick settings...
        callback: function (value, index, values) {
          return '$' + value; // Prepend '$' to the y-axis tick labels
        },
      },
    },
  },
};

const labels = ['20', '','25', '', '30', '', '35', '', '40', '', '60', '', '65'];

const data = {
  labels,
  datasets: [
    {
      label: 'Employer: K 73,500',
       data: [8,16,24,32,40,48,56,64,72,80,88,96,100],
      backgroundColor: 'rgba(8,0,163,255)',
       barThickness: 14,
    },
    {
      label: 'Employee: K 52,500',
       data: [8,16,24,32,40,48,56,64,72,80,88,96,100],
      backgroundColor: 'rgba(73,53,255,255)',
       barThickness: 14,
    },
    {
      label: 'Total Interest K 244,313',
      data: [8,16,24,32,40,48,56,64,72,80,88,96,100],
      backgroundColor: 'rgba(133,175,255,255)',
       barThickness: 14,
       
    },
  ],
};

const StackedBarChart = () => {
  return <Bar  options={options} data={data} />;
};

export default StackedBarChart;
