import React ,{useState} from 'react'
import './UserHeader.css'
import 'boxicons';
import { Link } from 'react-router-dom';
const UserHeader = () => {
    const [isHovering, setIsHovering] = useState(false);

    const handleMouseOver = () => {
      setIsHovering(true);
    };
  
    const handleMouseOut = () => {
      setIsHovering(false);
    };
  return (
    <div className='User-Heade12r'>
         <div className="search-bo12x">
    <button class="btn-searc12h"><box-icon  color='white' size='md' name='search' /></button>
    <input type="text" className="input-searc12h" placeholder="Type to Search..." />
  </div>
       <div className='User-log12o'><h1>Job Portal</h1></div> 
        <div className='User-Logou12t' onMouseOver={handleMouseOver}
          onMouseOut={handleMouseOut}>
        <Link to='/'><box-icon name='log-out' size="lg"></box-icon></Link></div>
        {isHovering && (
        <div className='Logout-Hove12r'> <h1>Logout</h1>
        </div> )}
        
    </div>
  )
}

export default UserHeader
