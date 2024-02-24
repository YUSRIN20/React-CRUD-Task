import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Home = () => {
    const navigate =  useNavigate()

    // State to store user details fetched from the API
    const [UserDetails, SetUserDetails] = useState([])

    // Fetch user details from the API when the component mounts
    useEffect(() => {
        fetchData()
    }, [])

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

    // Array containing user images (not used in the current implementation)
    const userImages = [{
        images: [
            "https://img.freepik.com/free-vector/businessman-character-avatar-isolated_24877-60111.jpg?t=st=1708758482~exp=1708762082~hmac=2bb1bf59158311ff3a2f668a0b1b8aa128e08ee755ba0db2f46eaac820b2c528&w=826",
        ]
    }]

    // Function to navigate to the create page
    const handleCreate = () => {
        navigate('/create');
    }

    return (
        <div className='container p-5 mt-1'>
            <h1 className='mb-5 text-center'>Home</h1>
            <div class="row row-cols-1 row-cols-md-2 row-cols-lg-3 row-cols-xl-3 g-4">
                {/* Mapping through the UserDetails array to display user details */}
                {UserDetails.map((item, index) => {
                    return (
                        <div key={index} class="col h-100">
                            <div class="card h-100 " id='cards-w'>
                                {/* Mapping through the userImages array (not used in the current implementation) */}
                                {userImages.map((item, index) => {
                                    return (
                                        <div key={index}>
                                            <img src={item.images} class="card-img-top" alt="..." />
                                        </div>
                                    )
                                })}
                                <div class="card-body">
                                    <h5 class="card-title">Name: {item.user_name}</h5>
                                    <h5 class="card-title">Age: {item.user_age}</h5>
                                    <p class="card-text">Email: {item.user_email}</p>
                                    <h6 class="card-title">Country/Region: {item.user_country}</h6>
                                </div>
                            </div>
                        </div>
                    )
                })}
            </div>
            <div class ="ms-1 mt-5"> 
               <h3>
                For Create New User:
                  <button className='btn btn-success ms-2' onClick={() => { handleCreate() }}>Create</button>
                </h3> 
            </div>
            <div class ="mt-5 text-center">
                <h3>Go to the  Next Page to Access the User Information</h3>
            </div>
            <div className='d-flex justify-content-center mt-5'>
                {/* Pagination (not fully implemented in the current code) */}
                <ul class="pagination pagination-lg">
                    <li class="page-item active" aria-current="page">
                        <span class="page-link">1</span>
                    </li>
                    <li class="page-item"><button class="page-link" onClick={()=>{navigate('/userDetails')}}>2</button></li>
                </ul>
            </div>
        </div>
    );
};

export default Home;
