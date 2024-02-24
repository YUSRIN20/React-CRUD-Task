import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const UserDetails = ({ SetId }) => {
    const navigate = useNavigate()

    // State to store user details fetched from the API
    const [UserDetails, SetUserDetails] = useState([])

    // State to trigger re-rendering when a user is deleted
    const [DeleteData, SetDeleteData] = useState([])

    // Fetch user details from the API when the component mounts or when DeleteData changes
    useEffect(() => {
        fetchData()
    }, [DeleteData])

    // Function to fetch user details from the API
    const fetchData = async () => {
        try {
            const response = await axios.get('https://65d7900c27d9a3bc1d7b508c.mockapi.io/api/Users');
            // Set the fetched user details to the state
            SetUserDetails(response.data);
        } catch (error) {
            console.log(error);
        }
    }

    // Function to handle editing a user
    const handleEdit = (id) => {
        // Set the ID of the user to edit in the parent component
        SetId(id);
        // Navigate to the edit page with the user ID as a parameter
        navigate(`/edit/${id}`);
    }

    // Function to handle deleting a user
    const handleDelete = async (id) => {
        try {
            // Make a DELETE request to delete the user from the API
            await axios.delete(`https://65d7900c27d9a3bc1d7b508c.mockapi.io/api/Users/${id}`);
            // Toggle the state to trigger re-rendering and fetch updated user details
            SetDeleteData(prevData => !prevData);
            // Display a success message using toast
            toast.success("User Deleted Successfully");
        } catch (error) {
            console.log(error);
            // Display an error message using toast if deletion fails
            toast.error("Failed to delete user");
        }
    }

    // Function to navigate to the create page
    const handleCreate = () => {
        navigate('/create')
    }

    return (
        <div>
            <h1 className='mt-2  text-center'>User  Details</h1>
            {/* Table to display user details */}
            <table class="table mt-3">
                <thead>
                    <tr>
                        <th scope="col">No</th>
                        <th scope="col">User-Name</th>
                        <th scope="col">User-Age</th>
                        <th scope="col">User-Email-Id</th>
                        <th scope="col">User-Country</th>
                        <th scope="col">Edit</th>
                        <th scope="col">Delete</th>
                    </tr>
                </thead>
                <tbody>
                    {/* Mapping through UserDetails to display user details */}
                    {UserDetails.map((item, index) => {
                        return (
                            <tr key={index}>
                                <th scope="row">{item.id}</th>
                                <td>{item.user_name}</td>
                                <td>{item.user_age}</td>
                                <td>{item.user_email}</td>
                                <td>{item.user_country}</td>
                                {/* Button to edit a user */}
                                <td><button className='btn btn-warning' onClick={() => { handleEdit(item.id) }}>Edit</button></td>
                                {/* Button to delete a user */}
                                <td><button className='btn btn-danger' onClick={() => { handleDelete(item.id) }}>Delete</button></td>
                            </tr>
                        )
                    })}
                </tbody>
            </table>
            {/* Button to navigate to the create page */}
            <div class ="ms-1 mt-5"> 
               <h3>
                For Create New User:
                  <button className='btn btn-success ms-2' onClick={() => { handleCreate() }}>Create</button>
                </h3> 
            </div>
            {/* Pagination (not fully implemented in the current code) */}
            <div className='d-flex justify-content-center mt-5'>
                <ul class="pagination pagination-lg">
                    <li class="page-item"><button class="page-link" onClick={() => { navigate('/') }}>1</button></li>
                    <li class="page-item active" aria-current="page">
                        <span class="page-link">2</span>
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default UserDetails;
