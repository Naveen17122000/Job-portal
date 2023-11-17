import React, { useState } from 'react';
import './Account.css'

const Account = () => {
    const [isChecked, setIsChecked] = useState(false);
    
      const handleToggle = () => {
        setIsChecked(!isChecked);
    }
    return(
        <div>
            <label className='g1'><h2>General Setting</h2></label>
            <div className='box523'>
                <div className='box642'>
                    <input className='g2' placeholder='UserName'></input>
                    <input className='g3' type='email' placeholder='Account Email'></input>
                    <label className='g4'>UserType</label>
                    <select className='g5'>
                        <option>SuperAdmin</option>
                    </select>
                    <label className='g6'>Location</label>
                    <select className='g7'>
                        <option>India</option>
                        <option>USA</option>
                        <option>Afghanistan</option>
                    </select>
                </div>
                <label id='advanc76e'>Advance setting</label>
                <div className='box723'>
                    <label id='assig11n'>Assign Responsibility</label>
                    <div className={`toggle-switc12h ${isChecked ? 'checked' : ''}`} onClick={handleToggle}>
                        <div className="toggle-switch-circ12le" />
                    </div>
                    <label className='g8'>Gilad Gray</label>
                    
                        <div className={`toggle-swit12ch ${isChecked ? 'checked' : ''}`} onClick={handleToggle}>
                            <div className="toggle-switch-circ12le" />
                        </div>
                    <label className='jas12on'>Jason Killian</label>
                    <div className={`toggle-switch ${isChecked ? 'checked' : ''}`} onClick={handleToggle}>
                        <div className="toggle-switch-circ12le" />
                    </div>
                    <label className='g9'>Antonie Llorca</label>
                    <label className='g10'>Be Careful</label>
                </div>


            </div>
           
        
        </div>

    );
}
export default Account;