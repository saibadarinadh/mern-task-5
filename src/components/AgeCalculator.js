import React, { useState } from 'react';

function AgeCalculater() {
  const [dateOfBirth, setDateOfBirth] = useState('');
  const [age, setAge] = useState(null);

  const calculateAge = () => {
    const birthDate = new Date(dateOfBirth);
    const currentDate = new Date();
    const ageInMilliseconds = currentDate - birthDate;
    const ageInYears = ageInMilliseconds / (1000 * 60 * 60 * 24 * 365.25);
    setAge(ageInYears.toFixed(2));
  };

  return (
    <div class="position-absolute top-50 start-50 translate-middle" >
      <center>
      <h1><b>Age Calculator</b></h1>
      <div>
        
        <h6 style={{padding:'5px'}}><b>Enter your date of birth</b></h6>
        <input style={{width:'350px'}}
          type="date"
          value={dateOfBirth}
          onChange={(e) => setDateOfBirth(e.target.value) }
        />
        
      </div >
      <div style={{padding:'10px'}}>
      <button  type="button" class="btn btn-primary " onClick={calculateAge} >Calculate Age</button>
      {age !== null && (
        <div>
          <h5 style={{padding:'10px'}}><b>You are {age} years old</b></h5>
        </div>
      )}
      </div>
      </center>
      
    </div>
  );
}

export default AgeCalculater;
