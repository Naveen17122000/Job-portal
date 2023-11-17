import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Sidebar from '../Dashboard/Sidebar'
import Box from '@mui/material/Box';
import NavBar from '../Dashboard/NavBar';
import './AddJob.css';
import '../Dashboard/Dashboard.css'
import Header from './Header';
import AdSidebar from './AdSidebar';
import { Link } from 'react-router-dom';
function JobAd() {
    const [openSidebarToggle, setOpenSidebarToggle] = useState(false)
        const OpenSidebar = () => {
          setOpenSidebarToggle(!openSidebarToggle)
        }
    const [formData, setFormData] = useState({
        jobTitle: '',
        salary: '',
        city: '',
        state: '',
        industry: '',
        jobType: '',
        jobRequirements: '',
        idealCandidate: '',
    });

    const [isJobAvailable, setIsJobAvailable] = useState(false);
    const [successMessage, setSuccessMessage] = useState('');
    const [errorMessage, setErrorMessage] = useState('');


    useEffect(() => {
        if (successMessage) {
            setFormData({
                jobTitle: '',
                salary: '',
                city: '',
                state: '',
                industry: '',
                jobType: '',
                jobRequirements: '',
                idealCandidate: '',
            });
            setIsJobAvailable(false);
            alert('Job successfully posted');
        }
    }, [successMessage]);

    const handleFormSubmit = (e) => {
        e.preventDefault();

        const dataToSend = {
            ...formData,
            isJobAvailable: isJobAvailable,
        };

        axios
            .post('HTTP URL', dataToSend)
            .then((response) => {
                setSuccessMessage('Job successfully posted');
                setErrorMessage('');
                console.log('Data successfully posted:', response.data);
            })
            .catch((error) => {
                setSuccessMessage('');
                setErrorMessage('Error posting job: ' + error.message);
                console.error('Error posting data:', error);
                alert('Error posting job: ' + error.message);
            });
    };

    const handleChange = (e) => {
        const { id, type, value, checked } = e.target;
        if (id === 'isJobAvailable') {
            setIsJobAvailable(checked);
        } else {
            const newValue = type === 'checkbox' ? checked : value;
            setFormData((prevData) => ({ ...prevData, [id]: newValue }));
        }
    };


    return (
        <div className='Hgrid-container'>
        <Header OpenSidebar={OpenSidebar}/>
        <AdSidebar openSidebarToggle={openSidebarToggle} OpenSidebar={OpenSidebar}/>
          
             {/* <NavBar />
        <Box height={30} />
        <Box sx={{ display: 'flex' }}>
            <Sidebar />
            <Box component="main" sx={{ flexGrow: 1, p: 3 }}> */}
                <div className='create'>
                <Link to="/admindash"><button className='back'>Back</button></Link>
                    <form className='form' onSubmit={handleFormSubmit}>
                        <h2> Add JOB</h2>
                        <div className='grid-container'>
                        <div className='grid-item'>
                            <input className='create-fields' type='text' placeholder=" " id="jobTitle" />
                            <label className='labels' htmlFor="jobTitle">Job Title</label>
                        </div>
                        <div className='grid-item'>
                            <input className='create-fields' type='text' placeholder=" " id="salary" />
                            <label className='labels' htmlFor="salary">Salary</label>
                        </div>
                        <div className='grid-item'>
                            <input className='create-fields' type='text' placeholder=" " id="city" />
                            <label className='labels' htmlFor="city">City</label>
                        </div>
                        <div className='grid-item'>
                            <input className='create-fields' type='text' placeholder=" " id="state" />
                            <label className='labels' htmlFor="state">State</label>
                        </div>
                        <div className='grid-item'>
                            <input className='create-fields' type='text' placeholder=" " id="industry" />
                            <label className='labels' htmlFor="industry">Industry</label>
                        </div>
                        <div className='grid-item'>
                            <input className='create-fields' type='text' placeholder=" " id="jobType" />
                            <label className='labels' htmlFor="jobType">Job Type</label>
                        </div>
                        </div>
                        <div>
                            <textarea  className='text'id="jobRequirements" placeholder=" "  />
                            <label className='labels' htmlFor="jobRequirements">Job Requirements</label>
                        </div>
                        <div>
                            <textarea className='text' id="idealCandidate" placeholder=" " />
                            <label className='labels' htmlFor="idealCandidate">Ideal Candidate</label>
                        </div>
                        <div className='check-box' ><input 
                            type="checkbox"
                            id="isJobAvailable"
                            onChange={handleChange}
                            checked={isJobAvailable} />
                            <label htmlFor="isJobAvailable">Is this Job Available</label>
                        </div>
                        <button className='job-btn'>Submit</button>
                    </form>
                </div>
            {/* </Box>
        </Box>*/}
    </div> 
   
    );

    }

export default JobAd;