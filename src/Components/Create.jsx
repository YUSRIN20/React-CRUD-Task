import axios from 'axios';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './style/Create.css'
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Create = () => {
    const navigate = useNavigate()
    const [CreateData, SetCreateData] = useState({
        user_name: '',
        user_age: '',
        user_email: '',
        user_country: ''
    })

    // Function to handle changes in input fields
    const handleChange = (e)=>{
        const {name,value}  = e.target;  // Destructuring name and value from event target
        SetCreateData((preData)=>({
            ...preData,
            [name]:value  // Updating the state with the new value
        }));
    }

    // Function to handle form submission
    const handleFormSubmit  = async(e)=>{
        e.preventDefault(); // Preventing default form submission behavior
        try {
            // Making a POST request to the API endpoint with the form data
            await axios.post('https://65d7900c27d9a3bc1d7b508c.mockapi.io/api/Users', CreateData);
            // Displaying a success message using toast
            toast.success("New User Data Created Successfully");
            // Navigating to the userDetails page after successful creation
            navigate('/userDetails');
        } catch (error) {
            console.log(error);
            // Displaying an error message using toast if the creation fails
            toast.error("Failed to create data");
        }
    }

    return (
        <div class ="form-container">
            <div class="form-box-container pe-5">
                <h2>Create Data:</h2>
                <form onSubmit={handleFormSubmit}>
                    <div  class ='my-3'>
                        <label>User Name<span class="text-danger">*</span>
                            <input className='form-control' type='text' name='user_name' value={CreateData.user_name} onChange={handleChange}required></input>
                        </label>
                    </div>
                    <div  class ='mb-3'>
                        <label>Age<span class="text-danger">*</span>
                            <input className='form-control' type='text' name='user_age' value={CreateData.user_age} onChange={handleChange} required></input>
                        </label>
                    </div>
                    <div class ='mb-3'>
                        <label>User Email<span class="text-danger">*</span>
                            <input className='form-control' type='email' name='user_email' value={CreateData.user_email} onChange={handleChange} required></input>
                        </label>
                    </div>
                    <div  class ='mb-3'>
                        <label>User Country<span class="text-danger">*</span>
                            <input className='form-control' type='text' name='user_country' value={CreateData.user_country} onChange={handleChange} required></input>
                        </label>
                    </div>
                    <div class="d-flex justify-content-center" id="btn-div">
                        <button type="submit" class="btn btn-primary" style={{fontSize:"large"}}>Create</button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Create;
