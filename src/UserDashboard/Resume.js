import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Resume.css';

const Resume = () => {
  const [formData, setFormData] = useState({
    firstname: '',
    secondname: '',
    email: '',
    mobilenumber: '',
    qualification:'',
    address:'',
    skills:'',  
    languages:'',
    updateresume:'',
  });

   const handleInputChange = async (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    

    // Store registration data in local storage
    localStorage.setItem('userProfile', JSON.stringify(formData));
    // Redirect to the login page
    window.location.href = '/';
  };
  

  return (
    <div className="r1">
      <h2 className='r2'>Update Resume</h2><br /><br />
      <form onSubmit={handleSubmit}>
        <div className="r3">
          <input className="r3s"
            type="text"
            name="firstname"
            placeholder='FirstName'
            value={formData.firstname}
            onChange={handleInputChange}
          />
        </div>
        <div className="r4">
          <input className="r3s"
            type="text"
            name="secondname"
            placeholder='SecondName'
            value={formData.secondname}
            onChange={handleInputChange}
          />
        </div>
        <div className="r5">
          <input className="r3s"
            type="email"
            name="email"
            placeholder='Email'
            value={formData.email}
            onChange={handleInputChange}
          />
        </div>
        <div className="r5">
          <input className="r3s"
            type="number"
            name="number"
            placeholder='Mobile Number'
            value={formData.number}
            onChange={handleInputChange}
          />
        </div>
        <div className="r5">
          <input className="r3s"
            type="text"
            name="qualification"
            placeholder='Qualification'
            value={formData.qualification}
            onChange={handleInputChange}
          />
        </div>
        <div className="r5">
          <input className="r3s"
            type="text"
            name="address"
            placeholder='Address'
            value={formData.address}
            onChange={handleInputChange}
          />
        </div>
        <div className="r5">
          <input className="r3s"
            type="text"
            name="skills"
            placeholder='skills'
            value={formData.skills}
            onChange={handleInputChange}
          />
        </div>
        <div className="r5">
          <input className="r3s"
            type="text"
            name="languages"
            placeholder='LanguagesKnown'
            value={formData.languages}
            onChange={handleInputChange}
          />
        </div>
        <div className="r5">
          <input className="r3s"
            type="file"
            name="updateresume"
            placeholder='UpdateResume'
            value={formData.updateresume}
            onChange={handleInputChange}
          />
        </div>
        <div>
          <button type="submit" className="r6">Submit</button>
        </div>
      </form>
    </div>
  );
};

export default Resume;
