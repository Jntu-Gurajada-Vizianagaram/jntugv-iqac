import React, { useState } from 'react';
import axios from 'axios';
import './Alumni.css';

const Alumni = () => {
  const [alumniDetails, setAlumniDetails] = useState({
    aluminiName: '',
    address: '',
    contact : '',
    email: '',
    year: '',
    degree: '',
    specialization: '',
    presentStatus: '',
    suitableToVisit: '',
    willingToSupport: '',
    syllabus: '',
    recommendsModifications:'',
    suggestions:''

  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setAlumniDetails((prevDetails) => ({
      ...prevDetails,
      [name]: value,
    }));
  };

  const handleSave = (e) => {
    e.preventDefault(); 
    console.log('Saved:', alumniDetails);
    axios.post('http://localhost:4000/insert_alumini_data/',alumniDetails)
    .then((response)=>{
      console.log(response.data)
    })
    .catch((error)=>{
      console.log(error)
    })
   
    // window.location.reload();
  };

  const handleCancel = () => {
    // Add your cancel logic here
    console.log('Cancelled');
  };

  return (
    <form className='AFF'>
      <h2 className='AFF2'>ALUMNI FEEDBACK FORM</h2>

      <label className="form-label">
        1. Name : &nbsp;
        <div className='inp1'>
        <input type="text" name="aluminiName" value={alumniDetails.aluminiName} onChange={handleChange} />
      </div>
      </label>

      <label className="form-label">
        2. Address : &nbsp;
        <div className='inp1'>
        <input type="text" name="address" value={alumniDetails.address} onChange={handleChange} />
      </div>
      </label>

      <label className="form-label">
        3. Contact Number : &nbsp;
        <div className='inp1'>
        <input type="text" name="contact" value={alumniDetails.contact} onChange={handleChange} />
      </div>
      </label>

      <label className="form-label">
        4. Email ID : &nbsp;
        <div className='inp1'>
        <input type="text" name="email" value={alumniDetails.email} onChange={handleChange} />
      </div>
      </label>

      <label className="form-label">
        5. Year of passing : &nbsp;
        <div className='inp1'>
        <input type="text" name="year" value={alumniDetails.year} onChange={handleChange} />
      </div>
      </label>

      <label className="form-label">
        6. Degree : &nbsp;
        <div className='inp1'>
        <input type="text" name="degree" value={alumniDetails.degree} onChange={handleChange} />
      </div>
      </label>

      <label className="form-label">
        7. Specialization : &nbsp;
        <div className='inp1'>
        <input type="text" name="specialization" value={alumniDetails.specialization} onChange={handleChange} />
      </div>
      </label>

      <label className="form-label">
        8. Present status : &nbsp;
        <div className='inp1'>
        <input type="text" name="presentStatus" value={alumniDetails.presentStatus} onChange={handleChange} />
      </div>
      </label>

      <label className="form-label">
        9. Suitable date to Visit this University : &nbsp;
        <div className='inp1'>
        <input type="text" name="suitableToVisit" value={alumniDetails.suitableToVisit} onChange={handleChange} />
      </div>
      </label>

      <label className="form-label">
        10. Willingness to Support University Students :
        <div style={{ display: 'flex', flexDirection: 'row' }}>
          <label>
            <input
              type="radio"
              name="willingToSupport"
              value="yes"
              onChange={handleChange}
              checked={alumniDetails.willingToSupport === 'yes'}
            />
            Yes
          </label>
          <label style={{ marginLeft: '10px' }}>
            <input
              type="radio"
              name="willingToSupport"
              value="no"
              onChange={handleChange}
              checked={alumniDetails.willingToSupport === 'no'}
            />
            No
          </label>
        </div>
      </label>

      <label>
        11. Any Suggestions related to syllabus :
      </label>

      <label className="form-label">
        A. Is syllabus up to the mark? :
        <div style={{ display: 'flex', flexDirection: 'row' }}>
          <label>
            <input
              type="radio"
              name="syllabus"
              value="Yes"
              onChange={handleChange}
              checked={alumniDetails.syllabus === 'Yes'}
            />
            Yes
          </label>
          <label className="form-label" style={{ marginLeft: '10px' }}>
            <input
              type="radio"
              name="syllabus"
              value="No"
              onChange={handleChange}
              checked={alumniDetails.syllabus === 'No'}
            />
            No
          </label>
        </div>
      </label>

      <label className="form-label">
        B. Recommends modifications to be embedded in the syllabus. : &nbsp;
        <div className='inp1'>
        <input
          type="text"
          name="recommendsModifications"
          value={alumniDetails.recommendsModifications}
          onChange={handleChange}
        /></div>
      </label>

      <label className="form-label">
        12. Other suggestions : &nbsp;
        <div className='inp1'>
        <input type="text" name="suggestions" value={alumniDetails.suggestions} onChange={handleChange} />
      </div>
      </label>
      <br /> <br />

      <div className="button-container">
        <button type="button" onClick={handleSave}>
          Save
        </button>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <button type="button" onClick={handleCancel}>
          Cancel
        </button>
      </div>
    </form>
  );
};

export default Alumni;