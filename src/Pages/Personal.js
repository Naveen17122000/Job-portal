import './Personal.css';

function Personal(){
    return(
        <div>
            <div className='box100'>
                <div className='box101'>
                    <label className='per09'><h2>Personal Information</h2></label>
                    <input className='i1' placeholder='Name'></input>
                    <input className='i2' placeholder='Location'></input>
                    <input className='i3' placeholder='Bio'></input>
                    <label className='i4'>UserType</label>
                    <select className='s121'>
                        <option>SuperAdmin</option>
                    </select>
                </div>
                <div className='box102'>
                    <label className='i5'><h2>Contact Information</h2></label>
                    <input className='i6' placeholder='PhoneNumber'></input>
                    <input className='i7' placeholder='Email' type='email' ></input>
                    <input className='i8' placeholder='Profile URL'></input>
                    <input className='i9' placeholder='Address'></input>
                </div>

            </div>
        </div>




            
    
            
    );
}
export default Personal;