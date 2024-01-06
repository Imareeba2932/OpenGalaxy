import React from 'react'
import { enqueueSnackbar } from 'notistack';
import header from '../assets/header.png'
import { useState } from 'react';
import { useEffect } from 'react';
import { Link } from 'react-router-dom';

const Project = () => {
  const [projects, setProjects] = useState([]);
  const user = JSON.parse(sessionStorage.getItem('user'));


  // const { category } = useParams();

  const fetchProject = async () => {
    const res = await fetch("http://localhost:3000/project/getall");

    console.log(res.status);

    const data = await res.json();
    console.log(data);
    // if (category) {
    //   setServices(data.filter((ser) => ser.category === category));
    // } else {
    setProjects(data);
    // }
  };

  useEffect(() => {
    fetchProject();
  }, []);

  const displayProject = () => {
    return projects.map((pro) => (
      <div className="conatainer ">
        <div className="col-md-8">
          <div className="card p-3 mb-5 bg-dark p-card shadow">
            <div className="row d-flex align-items-center">
              <div className="col-md-5">
                <img
                  className="img-fluid p-card-img"
                  src={"http://localhost:3000/" + pro.image}
                  alt=""
                />
              </div>
              <div className="col-md-7">
                <h3 style={{ paddingLeft: "20px" }} className="mt-3 text-light">{pro.name}</h3>
                <p style={{ paddingLeft: "20px" }} className="text-light">{pro.description}</p>
                <Link to={'/ViewProject/' + pro._id} className="btn btn-outline-primary m-2 " onClick={(e) => {
                  if (!user){
                    e.preventDefault();
                    enqueueSnackbar('Please login to apply', { variant: 'error' });
                  }
                }}>Apply Now</Link>
              
              </div>
            </div>
          </div>
        </div>
      </div>
    ));
  }

  return (
    
    
      <div className='container mb-5 d-flex justify-content-center'>
        <div className='row p-5'> {displayProject()} </div>
      </div>
  )
}

export default Project