import React from 'react'
import Swal from "sweetalert2";
import { useState } from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { enqueueSnackbar } from 'notistack';
import { useNavigate } from 'react-router-dom'
import AddTask from './AddTask';


const AddProjectSchema = Yup.object().shape({});

const AddProject = () => {

    const navigate = useNavigate();

    const [selProject, setSelProject] = useState("");


    const addProjectForm = useFormik({
        initialValues: {
            name: '',
            description: '',
            longDesc: '',
            image: '',
            createdAt: new Date(),
        },
        onSubmit: async (values, action) => {
            values.image = selProject;
            console.log(values);


            const res = await fetch('http://localhost:3000/project/add', {
                method: 'POST',
                body: JSON.stringify(values),
                headers: {
                    'Content-Type': 'application/json'
                }
            });

            console.log(res.status);
            action.resetForm();

            if (res.status === 200) {
                Swal.fire({
                    icon: "success",
                    title: "Item Uploaded Successfully",
                });
                navigate('/Project')
                enqueueSnackbar('Project Added Successfully', {
                    variant: 'success', anchorOrigin: {
                        vertical: 'top',
                        horizontal: 'right',
                    }

                });
            } else {
                Swal.fire({
                    icon: "error",
                    title: "Error",
                    text: "Something went wrong",
                });
            }
        },
        validationSchema: AddProjectSchema
    });

    const uploadFile = (e) => {
        const file = e.target.files[0];
        if (!file) return;
        setSelProject(file.name);
        const fd = new FormData();
        fd.append("myfile", file);
        fetch("http://localhost:3000/util/uploadfile", {
            method: "POST",
            body: fd,
        }).then((res) => {
            if (res.status === 200) {
                console.log("file uploaded");
            }
        });
    };

    return (

        <div className="container-fluid bg-img-addproduct d-flex ">
            <div className="card   d-block m-auto bg-transparent  shadow " style={{width:"450px",border:"none"}}>
                <div className="card-header">
                    <h1 className="text-center fw-bold" style={{ fontFamily: "serif" }}>Add Project</h1>
                </div>
                <div className="card-body d-flex justify-content-center">
                    <form onSubmit={addProjectForm.handleSubmit}>


                        <div className="form-outline">
                           
                            <input  
                                type="text" style={{fontFamily:"cursive"}}
                                className="form-control shadow input mb-4"
                                id="name" placeholder="Enter Project Name"
                                onChange={addProjectForm.handleChange}
                                value={addProjectForm.values.name}
                            />
                        </div>


                        <div className="form-outline">
                           
                            <input style={{fontFamily:"cursive"}}
                                type="text"
                                className="form-control shadow input mb-4"
                                id="description"  placeholder=" Description"
                                onChange={addProjectForm.handleChange}
                                value={addProjectForm.values.description}
                            />


                        </div>

                        <div className="form-outline">
                            
                            <textarea
                                type="text"  style={{fontFamily:"cursive"}}
                                className="form-control shadow input mb-4"
                                id="longDesc" placeholder="Long Description"
                                onChange={addProjectForm.handleChange}
                                value={addProjectForm.values.longDesc}
                            />
                        </div>



                        <div className="form-outline">
                            <label className="form-label" htmlFor="form3Example1m1">
                                Upload Image
                            </label>
                            <input
                                type="file" style={{fontFamily:"cursive"}}
                                className="form-control shadow input"
                                onChange={uploadFile}
                            />
                        </div>

                        <div className="text-center">
                            <button style={{fontFamily:"serif"}}
                                type="submit"
                                className="btn btn-primary shadow fw-bold fs-5 mt-4 w-50 mb-4"
                            >
                                Add Project
                            </button>
                        </div>
                        
                    </form >
              </div >
            </div >
        </div >




    )
}

export default AddProject