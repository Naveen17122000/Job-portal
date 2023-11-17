import React from 'react';
import'./Job.css';
import Box from '@mui/material/Box';

import NavBar from '../Dashboard/NavBar';
import { Link } from 'react-router-dom';
import Sidebar from '../Dashboard/Sidebar';

function Job(){
    return (
        <div className='bgcolor'>
            
        <Box height={30} />
        <Box sx={{ display: 'flex' }}>
        
        <Box component="main" sx={{ flexGrow :1,p:3}}>
            <div className='j1'>
            <form className='JobForm'>
                <h1 id='hire'> Jobs Get Hired Quickly</h1>
                
                <div className="j2">
                    <p><strong>Position:</strong> Customer Support Executive</p>
                    <p><strong>Requirement:</strong> BTech or MTech</p>
                    <p><strong>Job Type:</strong> Remote</p>
                    <p><strong>Job Location:</strong> Hyderabad</p>
                    <p><strong>Salary:</strong> 300000</p>
                    <a className='link1' href="https://www.techtarget.com/searchcustomerexperience/definition/customer-service-and-support">Apply</a>
                </div>

                <div className="j2">
            
                    <p><strong>Position:</strong>Senior Python Developer</p>
                    <p><strong>Requirement:</strong>Btech or Bsc</p>
                    <p><strong>Job Type:</strong>Onsite</p> 
                    <p><strong>Job Location:</strong>Chennai</p> 
                    <p><strong>Salary:</strong>400000</p> 
                    <a className='link1'  href="https://in.linkedin.com/jobs/view/senior-python-developer-at-spiralogics-inc-3731586757">Apply</a>
                    
                </div>

                <div className="j2">
            
                    <p><strong>Position:</strong>Testing</p>
                    <p><strong>Requirement:</strong>Btech</p>
                    <p><strong>Job Type:</strong>Onsite</p> 
                    <p><strong>Job Location:</strong>Pune</p> 
                    <p><strong>Salary:</strong>500000</p> 
                    <a className='link1' href="https://owasp.org/www-project-web-security-testing-guide/latest/4-Web_Application_Security_Testing/02-Configuration_and_Deployment_Management_Testing/06-Test_HTTP_Methods">Apply</a>
                    
                </div>

                <div className="j2">
            
                    <p><strong>Position:</strong>Technical Support Engineer</p>
                    <p><strong>Requirement:</strong>Btech or Mtech</p>
                    <p><strong>Job Type:</strong>Onsite</p> 
                    <p><strong>Job Location:</strong>kerala</p> 
                    <p><strong>Salary:</strong>600000</p> 
                    <a className='link1' href="https://www.naukri.com/technical-support-engineer-jobs-in-pan-india">Apply</a>
                    
                </div>
                <div className="j2">
            
                    <p><strong>Position:</strong>Graphics Designer</p>
                    <p><strong>Requirement:</strong>Any Graduation</p>
                    <p><strong>Job Type:</strong>Onsite</p> 
                    <p><strong>Job Location:</strong>Mumbai</p> 
                    <p><strong>Salary:</strong>800000</p> 
                    <a className='link1' href="https://www.befunky.com/features/graphic-designer/">Apply</a>
                    
                </div>
                <div className="j2">
            
                    <p><strong>Position:</strong>Java Developer</p>
                    <p><strong>Requirement:</strong>Any Graduation</p>
                    <p><strong>Job Type:</strong>Onsite</p> 
                    <p><strong>Job Location:</strong>Chennai</p> 
                    <p><strong>Salary:</strong>900000</p> 
                    <a className='link1' href="https://www.befunky.com/features/graphic-designer/">Apply</a>
                    
                </div>
            </form>
            
            </div>
            </Box>
      </Box>
    </div>
  );
}
export default Job;

