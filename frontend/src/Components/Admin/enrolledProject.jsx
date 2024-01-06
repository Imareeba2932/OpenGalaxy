import React, { useState, useEffect } from "react";
import {  Bar } from 'react-chartjs-2';
import { Chart as ChartJS,CategoryScale, LinearScale, Tooltip, BarElement, Legend } from 'chart.js';

ChartJS.register(CategoryScale, LinearScale, Tooltip, Legend, BarElement);

const enrolledProject = () => {
  const [data, setData] = useState([]);
  const [selectedOption, setSelectedOption] = useState("Option 1");

  useEffect(() => {
    // Fetch data from backend
    const fetchData = async () => {
      const response = await fetch("http://localhost:3000/");
      const data = await response.json();
      setData(data);
    };

    fetchData();
  }, [selectedOption]);

  const handleSelectOption = (e) => {
    setSelectedOption(e.target.value);
  };

  return (
    <div>
      <select value={selectedOption} onChange={handleSelectOption}>
        <option value="Option 1">Option 1</option>
        <option value="Option 2">Option 2</option>
        <option value="Option 3">Option 3</option>
      </select>
      <BarChart
        width={500}
        height={400}
        data={data}
        margin={{ top: 20, right: 30, bottom: 30, left: 50 }}
      >
        <XAxis dataKey="name" />
        <YAxis />
        <Bar dataKey="value" fill="#8884d8" />
        <Tooltip />
      </BarChart>
    </div>
  );
};

export default enrolledProject;