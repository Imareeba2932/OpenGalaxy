import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

const CountOfInterns = () => {
    const {id} = useParams();
  const [enrollmentData, setEnrollmentData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('http://localhost:3000/enroll/getbyid/' +id); // Replace with your actual API endpoint
        setEnrollmentData(response.data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      <h2>Total Enrolled Projects by User</h2>
      <ul>
        {enrollmentData.map((user) => (
          <li key={user.user_id}>
            {user.username}: {user.total_enrolled_projects} projects
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CountOfInterns ;
