import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './UserApplication.css';
import { Link } from 'react-router-dom';
import Header from './Header';
import AdSidebar from './AdSidebar';

function UserApplication() {
  const [applications, setApplications] = useState([]);
  const [error, setError] = useState(null);
  const [openSidebarToggle, setOpenSidebarToggle] = useState(false)
  const OpenSidebar = () => {
    setOpenSidebarToggle(!openSidebarToggle)
  }

  useEffect(() => {
    axios.get('URL')
      .then(response => {
        setApplications(response.data);
      })
      .catch(error => {
        setError(error);
      });
  }, []);

  return (
    <>  
    <div className='Hgrid-container'>
    <Header OpenSidebar={OpenSidebar}/>
    <AdSidebar openSidebarToggle={openSidebarToggle} OpenSidebar={OpenSidebar}/>

     
      <div className='user-box'>
         <Link to="/admindash"><button className='bback'>Back</button></Link>
      <h1>User Application</h1><br /><br />

        <table className='table'>
          <thead>
            <tr>
              <th>First Name</th>
              <th>Surname</th>
              <th>Location</th>
              <th>Job Position/Title</th>
              <th>Application Date</th>
              <th>Applicant</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {applications.map(application => (
              <tr key={application.id}>
                <td>{application.firstName}</td>
                <td>{application.surname}</td>
                <td>{application.location}</td>
                <td>{application.jobPosition}</td>
                <td>{application.applicationDate}</td>
                <td>{application.applicant}</td>
                <td>
                  <a href={`YOUR_DOWNLOAD_API_URL/${application.id}`} download>
                    Download
                  </a>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      </div>
    </>
  );
}

export default UserApplication;
