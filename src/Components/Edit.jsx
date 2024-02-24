import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './style/Edit.css'
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Edit = ({ id }) => {
    const navigate = useNavigate()

    // State to store edited data
    const [editData, SetEditData] = useState({
        user_name: '',
        user_age: '',
        user_email: '',
        user_country: ''
    })

    // Fetch data from the API when the component mounts
    useEffect(() => {
        fetchData()
    }, [])

    // Function to fetch data from the API
    const fetchData = async () => {
        try {
            const response = await axios.get(`https://65d7900c27d9a3bc1d7b508c.mockapi.io/api/Users/${id}`);
            // Set the fetched data to the state
            SetEditData(response.data);
        } catch (error) {
            console.log(error);
        }
    }

    // Function to handle changes in input fields
    const handleChange = (e) => {
        const { name, value } = e.target;

        // Update the state with the new value
        SetEditData((preData) => ({
            ...preData,
            [name]: value
        }));
    }

    // Function to handle form submission
    const handleFormSubmit = async (e) => {
        e.preventDefault();
        try {
            // Make a PUT request to update the data in the API
            await axios.put(`https://65d7900c27d9a3bc1d7b508c.mockapi.io/api/Users/${id}`, editData);
            // Display a success message using toast
            toast.success("Data Updated Successfully");
            // Redirect to the userDetails page after successful update
            navigate('/userDetails');
        } catch (error) {
            console.log(error);
            // Display an error message using toast if the update fails
            toast.error("Failed to update data");
        }
    }

    return (
        <div class="form-container">
            <div class="form-box-container pe-5">
                <h2>Edit Data:</h2>
                <form onSubmit={handleFormSubmit} class="fw-bolder">
                    <div class='my-3'>
                        <label className='form-label'>User Name<span class="text-danger">*</span>
                            <input className='form-control Inputs' id="" type='text' name='user_name' value={editData.user_name} onChange={handleChange}></input>
                        </label>
                    </div>
                    <div class='mb-3'>
                        <label >Age<span class="text-danger">*</span>
                            <input className='form-control Inputs' type='text' name='user_age' value={editData.user_age} onChange={handleChange}></input>
                        </label>
                    </div>
                    <div class='mb-3'>
                        <label>User Email<span class="text-danger">*</span>
                            <input className='form-control Inputs' type='email' name='user_email' value={editData.user_email} onChange={handleChange}></input>
                        </label>
                    </div>
                    <div class='mb-3'>
                        <label>User Country<span class="text-danger">*</span>
                            <input className='form-control Inputs' type='text' name='user_country' value={editData.user_country} onChange={handleChange}></input>
                        </label>
                    </div>
                    <div class="d-flex justify-content-center" id="btn-div">
                        <button type="submit" class="btn btn-primary " style={{ fontSize: "large" }}>Update</button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Edit;
