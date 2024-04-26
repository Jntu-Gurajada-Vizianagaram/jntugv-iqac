import React, { useState } from 'react';
import axios from 'axios';
import './Faculty.css';

const Faculty = () => {
  const [facultyDetails, setFacultyDetails] = useState({
    faculty_name: '',
    department: '',
    contact_no: '',
    email: '',
    degree: '',
    specialization: '',
    academic_year: '',
    subjects_taught: '',
      topics_to_add: '',
      topics_to_delete: '',
      subjects_to_add: '',
      subjects_to_delete: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFacultyDetails((prevDetails) => ({
      ...prevDetails,
      [name]: value,
    }));
  };

  const handleSave = (e) => {
    e.preventDefault(); // Prevent the default form submission behavior
    // Add your save logic here
    console.log('Saved:', facultyDetails);
    axios.post('http://localhost:4000/insert_faculty_data/',facultyDetails)
    .then((response)=>{
      console.log(response.data)
    })
    .catch((error)=>{
      console.log(error)
    })

    // Reload the page
    // window.location.reload();
  };

  const handleCancel = () => {
    // Add your cancel logic here
    console.log('Cancelled');
  };


  return (
    <form className='FFF' onSubmit={handleSave}>
  <h2 className='FFF2'>FACULTY FEEDBACK FORM</h2>
  <label className="form-label">
    1. Name : &nbsp;
    <div className='inp1'>
      <input type="text" name="faculty_name" value={facultyDetails.faculty_name} onChange={handleChange} />
    </div>
  </label>

      <label className="form-label">
        2. Department : &nbsp;
        <div className='inp1'>
        <input type="text" name="department" value={facultyDetails.department} onChange={handleChange} />
      </div>
      </label>

      <label className="form-label">
        3. Contact Number : &nbsp;
        <div className='inp1'>
        <input type="text" name="contact_no" value={facultyDetails.contact_no} onChange={handleChange} />
      </div>
      </label>

      <label className="form-label">
        4. Email ID : &nbsp;
        <div className='inp1'>
        <input type="text" name="email" value={facultyDetails.email} onChange={handleChange} />
      </div>
      </label>

      <label className="form-label">
        5. Degree : &nbsp;
        <div className='inp1'>
        <input type="text" name="degree" value={facultyDetails.degree} onChange={handleChange} />
      </div>
      </label>

      <label className="form-label">
        6. Specialization : &nbsp;
        <div className='inp1'>
        <input type="text" name="specialization" value={facultyDetails.specialization} onChange={handleChange} />
      </div>
      </label>

      <label className="form-label">
        7. Academic Year : &nbsp;
        <div className='inp1'>
        <input type="text" name="academic_year" value={facultyDetails.academic_year} onChange={handleChange} />
      </div>
      </label>

      <label className="form-label">
        8. Subjects Taught : &nbsp;
        <div className='inp1'>
        <input type="text" name="subjects_taught" value={facultyDetails.subjects_taught} onChange={handleChange} />
      </div>
      </label>

      <label>
        9. Suggestions related to syllabus:
      </label>

      <label className="form-label">
        A. Topics in a subject suggested to be Added / Updated : &nbsp;
        <div className='inp1'>
        <input
          type="text"
          name="topics_to_add"
          value={facultyDetails.topics_to_add}
          onChange={handleChange}
        />
        </div>
      </label>

      <label className="form-label">
        B. Topics in a subject suggested to be Deleted : &nbsp;
        <div className='inp1'>
        <input
          type="text"
          name="topics_to_delete"
          value={facultyDetails.topics_to_delete}
          onChange={handleChange}
        />
        </div>
      </label>

      <label className="form-label">
        C. New Subject / Subjects proposed for Addition into the New syllabus : &nbsp;
        <div className='inp1'>
        <input
          type="text"
          name="subjects_to_add"
          value={facultyDetails.subjects_to_add}
          onChange={handleChange}
        />
        </div>
      </label>

      <label className="form-label">
        D. Subject / Subjects proposed for Deletion from the current syllabus : &nbsp;
        <div className='inp1'>
        <input
          type="text"
          name="subjects_to_delete"
          value={facultyDetails.subjects_to_delete}
          onChange={handleChange}
        />
        </div>
      </label>
      <br /> <br />

      <div className="button-container">
        <button type="submit">Save</button>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <button type="button" onClick={handleCancel}>
          Cancel
        </button>
      </div>
    </form>
  );
};

export default Faculty;