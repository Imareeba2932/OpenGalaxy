import React, { useState, useEffect } from 'react'
import { useParams, useNavigate } from "react-router-dom";

const ManageGithubUser = () => {
    // const navigate = useNavigate(); 
  const [project, setProject] = useState([]);

//   const { category } = useParams();

  const fetchProjects = async () => {
    const res = await fetch("http://localhost:3000/user/getall");

    console.log(res.status);

    const data = await res.json();
    console.log(data);
    // if (category) {
    //   setServices(data.filter((ser) => ser.category === category));
    // } else {
    setProject(data);
    // }
  };

  useEffect(() => {
    fetchProjects();
  }, []);

  const deleteProject = async (id) => {
    console.log(id);

    const res = await fetch('http://localhost:3000/user/delete/' + id, { method: 'DELETE' });

    if (res.status === 200) {
      fetchProjects();
      // alert.success('User Deleted Successfully');

    }
  }
  
  const displayProjects = () => {
    return project.map((pro, index) => (
      <tr>
        {/* <td>
          <img style={{ height: 50 }} src={service.simage} alt="" />
        </td> */}
        <td>{pro.githubId}</td>
        <td>{pro.username}</td>
        <td>{pro.displayName}</td>
        {/* <td>{pro.createdAt}</td> */}
        <td>
        <button className='btn btn-danger' onClick={() => { deleteProject(pro._id) }} >Delete</button>
        </td>
        
      </tr>
    ));
  }


  return (
    <div>
      <header className=" mt-2">
        <div className="container py-5">
          <h1 className="">Manage Project</h1>
          <hr />
          <div className="row">
            <div className="col-md-4">
            </div>
          </div>
        </div>
      </header>



      <div className="container">

        <table className="table table-primary table-striped table-bordered">
          <thead>
            <tr>
              {/* <th>Image</th> */}
              <th>Github Id</th>
              {/* <th colSpan={2}>Description</th> */}
              <th>UserName</th>
              <th>DisplayName</th>
              {/* <th>CreatedAt</th> */}
              <th></th>
            </tr>
          </thead>
          <tbody>
            {displayProjects()}
          </tbody>
        </table>
      </div>

    </div>
  )
}

export default ManageGithubUser;