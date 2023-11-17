import React from 'react'
import "./Profile.css";
const Profile = () => {
  return (
    <div className='Profiles'>
      <div className='Profile'>
        <h1>Arjun</h1><hr />
        <h1><box-icon type='solid' name='envelope' size="lg"></box-icon>code@codemstr.com</h1><hr />
        <h1><box-icon name='mobile' size="lg"></box-icon>(+91) 99999 99999</h1><hr />
        <h1><box-icon name='map' type='solid' size="lg"></box-icon> Hyderabad</h1>
      </div>
      <div className='About'>
        <div className='about-me'>
          <h1>About me</h1><hr />
          <p>body2. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos blanditiis tenetur unde suscipit,
             quam beatae rerum inventore consectetur, neque doloribus, cupiditate numquam dignissimos labo</p>
        </div>
        <div className='details'>
        <h1>Details</h1><hr />
        <table>
          <tr>
            <td>Full Name:<hr /></td>
            <td>Arjun<hr /></td>
          </tr>
          <tr>
            <td>Father's Name:<hr /></td>
            <td>Kumar<hr /></td>
          </tr>
          <tr>
            <td>Address:<hr /></td>
            <td>Hyderabad, India<hr /></td>
          </tr>
          <tr>
            <td>Zip Code:<hr /></td>
            <td>500001<hr /></td>
          </tr>
          <tr>
            <td>Website:<hr /></td>
            <td>https://trickuweb.com<hr /></td>
          </tr>
        </table>
        </div>
      </div>
    </div>
  )
}

export default Profile
