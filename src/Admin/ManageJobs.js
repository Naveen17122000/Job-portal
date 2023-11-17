import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './ManageJob.css';
import { Link } from 'react-router-dom';
import Header from './Header';
import AdSidebar from './AdSidebar';
function ManageJobs() {
  const [jobData, setJobData] = useState([]);
  const [error, setError] = useState(null);
  const [openSidebarToggle, setOpenSidebarToggle] = useState(false)
        const OpenSidebar = () => {
          setOpenSidebarToggle(!openSidebarToggle)
        }

  useEffect(() => {
    // Replace 'YOUR_API_URL' with your actual API URL
    axios.get('YOUR_API_URL')
      .then((response) => {
        setJobData(response.data);
      })
      .catch((error) => {
        setError(error);
      });
  }, []);

  return (
    <div className='Hgrid-container'>
    <Header OpenSidebar={OpenSidebar}/>
    <AdSidebar openSidebarToggle={openSidebarToggle} OpenSidebar={OpenSidebar}/>

    <div className='box-body'>
      <Link to="/admindash"><button className='back'>Back</button></Link>
      <table className='job'>
      <h1>Manage Job</h1>
        <tbody>
          <tr>
            <th>Job Title</th>
            <th>Location</th>
            <th>Salary</th>
            <th>No. of Applicants</th>
            <th>Status</th>
            <th>Action</th>
          </tr>
          {jobData.map((job, index) => (
            <tr key={index}>
              <td>{job.jobTitle}</td>
              <td>{job.location}</td>
              <td>{job.salary}</td>
              <td>{job.applicants}</td>
              <td>{job.status}</td>
              <td>
                <button>Update Job</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
    </div>
  );
}

export default ManageJobs;
