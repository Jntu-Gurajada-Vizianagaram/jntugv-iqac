import React, { useState } from 'react';
import axios from 'axios';

import './Student.css';

const Student = () => {
  const [studentDetails, setStudentDetails] = useState({
    student_name: '',
    roll_number: '',
    degree: '',
    specialization: '',
    academic_year: '',
    year_of_studying: '',
    email: '',
    suggestions: '',
     q1: '',
     q2: '',
     q3: '',
        q4: '',
        q5: '',
        q6: '',
        q7: '',
        q8: '',
        q9: '',
        q10: '',
        q11: '',
        q12: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setStudentDetails((prevDetails) => ({
      ...prevDetails,
      [name]: value,
    }));
  };
  // const handleSemesterChange = (e) => {
  //   const { name, value } = e.target;
  //   setStudentDetails((prevDetails) => ({
  //     ...prevDetails,
  //     semester: {
  //       ...prevDetails.semester,
  //       [name]: value,
  //     },
  //   }));
  // };

  // const handleSuggestionChange = (e) => {
  //   const { name, value } = e.target;
  //   setStudentDetails((prevDetails) => ({
  //     ...prevDetails,
  //     semester: {
  //       ...prevDetails.semester,
  //       feedback: {
  //         ...prevDetails.semester.feedback,
  //         [name]: value,
  //       },
  //     },
  //   }));
  // };

  const handleSave = (e) => {
    console.log('Saved:', studentDetails);
    e.preventDefault(); // Prevent the default form submission behavior
    // Add your save logic here
    console.log('Saved:', studentDetails);
    axios.post('http://localhost:4000/insert_student_data/',studentDetails)
    .then((response)=>{
      // console.log(response.data)
      window.alert("Successfully Feedback submitted");
    })
    .catch((error)=>{
      console.log(error)
    })

  };

  const handleCancel = () => {
    console.log('Cancelled');
  };

  return (
    <form className='SFF'> 
        <h2 className='SFF2'>STUDENT FEEDBACK FORM</h2>
      <label className="form-label">
        1. Name : &nbsp;
        <div className='inp1'>
        <input type="text" name="student_name" value={studentDetails.student_name} onChange={handleChange} />
      </div>
      </label>
      
      <label className="form-label">
        2. Roll Number : &nbsp;
        <div className='inp1'>
        <input type="text" name="roll_number" value={studentDetails.roll_number} onChange={handleChange} />
      </div>
      </label>
      
      <label className="form-label">
        3. Degree : &nbsp;
        <div className='inp1'>
        <input type="text" name="degree" value={studentDetails.degree} onChange={handleChange} />
      </div>
      </label>
      
      <label className="form-label">
        4. Specialization : &nbsp;
        <div className='inp1'>
        <input type="text" name="specialization" value={studentDetails.specialization} onChange={handleChange} />
      </div>
      </label>
      
      <label className="form-label">
        5. Year of studying : &nbsp;
        <div className='inp1'>
        <input type="text" name="year_of_studying" value={studentDetails.year_of_studying} onChange={handleChange} />
      </div>
      </label>
      
      <label className="form-label">
        6. Semester : &nbsp;
        <div className='inp1'>
        <input type="text" name="academic_year" value={studentDetails.academic_year} onChange={handleChange} />
      </div>
      </label>
      
      <label className="form-label">
        7. Email ID : &nbsp;
        <div className='inp1'>
        <input type="text" name="email" value={studentDetails.email} onChange={handleChange} />
      </div>
      </label>

      <label className="form-label">
        8. Any other suggestions : &nbsp;
        <div className='inp1'>
        <input type="text" name="suggestions" value={studentDetails.suggestions} onChange={handleChange} />

      </div>
      </label>

      <h3>Feedback Questionnaire</h3>
      <table style={{ width: '80%' }} class='table'>
        <thead>
          <tr>
            <th>Parameter</th>
            <th>1</th>
            <th>2</th>
            <th>3</th>
            <th>4</th>
            <th>5</th>
          </tr>
        </thead>
        <tbody>
          {[
            { question: 'Rate the syllabus of the courses in relation to the competencies expected from the course' },
            { question: 'Rate the relevance of the units in Syllabus relevant to the course' },
            { question: 'Rate the content of course and relevance of the Units' },
            { question: 'Rate the offering of the electives in terms of their relevance to the specialization streams' },
            { question: 'Rate the electives offered in relation to the Technological advancements' },
            { question: 'Rate the applicability/relevance of the curriculum with respect to current technological standards' },
            { question: 'Usefulness of the course in terms of knowledge, concepts, vocational skills, analytical abilities and broadening perspectives' },
            { question: 'Rate the percentage of courses having laboratory components' },
            { question: 'Rate the appropriateness of the sequence of courses provided in the curriculum' },
            { question: 'Rate the depth of syllabus of the course in relation to the competencies expected by the Industry' },
            { question: 'Rate the design of course with respect to self-learning' },
            { question: 'Rate the composition of the course in terms of Basic Science, Engineering Science, Humanities, Discipline Core, Discipline Elective, Open Elective, etc.' },
          ].map((item, index) => (
          <tr key={index}>
            <td>{item.question}</td>
            {[1, 2, 3, 4, 5].map((rating) => (
              <td key={rating}>
                <label>
                  <input
                    type="radio"
                    name={'q' + (index + 1)} // Correct the concatenation syntax
                    value={rating}
                    checked={studentDetails['q' + (index + 1)] === String(rating)} // Use 'rating' directly, without jQuery
                    onChange={handleChange}
                  />
                </label>
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    </table><br/>


      <div className="button-container">
        <button type="button1" onClick={handleSave}>
          Save
        </button>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <button type="button1" onClick={handleCancel}>
        Cancel
      </button>
    </div>
  </form>
);
};

export default Student;