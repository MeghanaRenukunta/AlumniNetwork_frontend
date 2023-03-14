// import React from "react";
// function Profile(){
//     return (
//     <div className="profile container">
//         <div className="text-center">
//             <h2 className="display-2">CREATE PROFILE</h2>
//         </div>
//         <div className="card mx-auto" style={{width:" 65% "}}>
//             <div className="card-body">
//                 <form action="/action_page.php" method="get">
//                     <p>Full Name :</p>
//                     <div className="d-flex">
//                     <div className="mb-4 me-5">
//                         <label for="firstname">First Name</label>
//                         <input type="text" id="firstname" placeholder=""  required/>
//                     </div>
//                     <div className="mb-4">
//                         <label for="last">Last Name</label>
//                         <input type="text" id="last"  placeholder="" required/>
//                     </div>
//                 </div>
//                     <div className="mb-4">
//                         <label for="roll">Roll No.</label>
//                         <input type="text" id="roll"  placeholder="" required/>
//                     </div>
                
//                     <div className="mb-4">
//                         <label className="form-label" for="contact">Contact Details</label>
//                         <div className="input-group mb-4">
//                             <span className="input-group-text" style={{border:" 1px rgb(111, 109, 109) solid"}}><i className="fa fa-phone"></i>
//                             </span>
//                             <input type="number" id="contact" className="form-control" style={{border:" 2px solid rgb(0, 0, 0)",margin:"2px 0",padding:"5px",
//                             borderRadius: "2px"}}
//                             placeholder="" required/>
//                         </div>
//                     </div>

//                     <div className="mb-4 ms-0">
//                         <label className="form-label" for="form2Example11">E-mail</label>
//                         <div className="input-group mb-4">
//                             <span className="input-group-text" style={{border:" 1px rgb(111, 109, 109) solid"}}><i className="fa fa-user"></i>
//                             </span>
//                             <input type="email" id="form2Example11" className="form-control" style={{border: "2px solid rgb(0, 0, 0)",margin:"2px 0",padding:"5px",
//                             borderRadius: "2px"}}
//                             placeholder="abc@gmail.com" />
//                         </div>
//                     </div>

//                     <div className="mb-4">
//                         <label for="user">Address</label>
//                         <input type="text" id="user"  placeholder="" required/>
//                     </div>
//                     <div className="d-flex">
//                         <div className="mb-4 me-5">
//                             <label for="user">Branch</label>
//                             <select id="user" name="Branch" style={{border:"2px solid black",padding:"5px"}}>
//                                 <option value=""></option>
//                                 <option value="CSE">CSE</option>
//                                 <option value="AIML">AIML</option>
//                                 <option value="IT">IT</option>
//                                 <option value="CSD">CSD</option>
//                               </select>
//                         </div>

//                         <div className="mb-4 ms-2">
//                             <label for="user">Course  </label>
//                             <select id="user" name="Course" style={{border:"2px solid black",padding:"5px"}}>
//                                 <option value=""></option>
//                                 <option value="BTech">BTech</option>
//                                 <option value="Data Analyst">Data Analyst</option>
//                                 <option value="Web Development">Web Development</option>
//                                 <option value="Animation">Animation</option>
//                               </select>
//                         </div>
//                     </div>
//                         <div className="mb-4">
//                             <label for="yog">Year of Graduation</label>
//                             <input type="number" min="1900" max="2099" step="1" value="2016" />
//                         </div>

//                         <div className="mb-4">
//                             <label for="user">Qualifications</label>
//                             <input type="text" id="user"  placeholder="" required/>
//                         </div>
//                         <div className="mb-4">
//                             <label for="user">Trade</label>
//                             <input type="text" id="user"  placeholder="" required/>
//                         </div>
                    
//                     <div className="mb-4">
//                         <label for="user">Languages</label>
//                         <input type="text" id="user"  placeholder="" required/>
//                     </div>
//                     <div className="mb-4">
//                         <label for="exp">Experience</label>
//                         <input type="number" id="exp" min="0" max="15" step="1" value="0" />
//                     </div>
//                     <div className="mb-4">
//                         <label for="com">Company</label>
//                         <input type="text" id="com" placeholder="" required/>
//                     </div>
//                     <div className="mb-4">
//                         <label for="stat">Present Status</label>
//                         <input type="text" id="stat" placeholder="" required/>
//                     </div>
//                     <div className="">
//                         <label for="bio">About Yourself</label>
//                         <br/>
//                         <textarea id="bio" name="bio" rows="4" cols="50" placeholder="Write about yourself"></textarea>
//                         <br/>
//                     </div>
//                     <br/>
//                     <div className="">
//                         <label for="myimg">Upload your profile:</label>
//                     <input type="file" id="myimg" name="myimg"/>
//                     </div>
//                     <br/>
//                     <div className="">
//                         <label for="myfile">Upload your resume:</label>
//                     <input type="file" id="myfile" name="myfile"/>
//                     </div>
//                     <br/>
                    


//                     <div className="d-flex align-items-center justify-content-center pb-4">
//                         <p className="click mb-0 me-2">Click here to create profile...</p>
//                         <a href="home.html" className="btn">
//                             Create
//                         </a>
//                     </div>
//                 </form>
//             </div>
//         </div>
//     </div>
    
//     );
// }
// export default Profile;

import React, { useState } from "react";
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import { useNavigate } from "react-router-dom";

function Profile() {
    const navigate = useNavigate();
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [rollNo, setRollNo] = useState("");
  const [contact, setContactDetails] = useState("");
  const [email, setEmail] = useState("");
  const [address, setAddress] = useState("");
  const [selectedBranch, setBranch] = useState("");
  const [course, setCourse] = useState("");
  const [year, setYearOfGraduation] = useState("");
  const [qualifications, setQualifications] = useState("");
  const [trade, setTrade] = useState("");
  const [languages, setLanguages] = useState("");
  const [experience, setExperience] = useState("");
  const [company, setCompany] = useState("");
  const [presentStatus, setPresentStatus] = useState("");
  const [about, setAbout] = useState("");
  const [profileImg, setProfileImg] = useState(null);
  const [resume, setResume] = useState(null);
  const [showError, setShowError] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const [showStatus, setProfileStatus] = useState(false);
  const [ProfileMessage, setProfileMessage] = useState('');
//   const [formData, setFormData] = useState({});

  const handleFirstNameChange = (event) => {
    setFirstName(event.target.value);
  };

  const handleLastNameChange = (event) => {
    setLastName(event.target.value);
  };

  const handleRollNoChange = (event) => {
    setRollNo(event.target.value);
  };

  const handleContactDetailsChange = (event) => {
    setContactDetails(event.target.value);
  };

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handleAddressChange = (event) => {
    setAddress(event.target.value);
  };

  const handleBranchChange = (event) => {
    setBranch(event.target.value);
  };

  const handleCourseChange = (event) => {
    setCourse(event.target.value);
  };

  const handleYearOfGraduationChange = (event) => {
    setYearOfGraduation(event.target.value);
  };

  const handleQualificationsChange = (event) => {
    setQualifications(event.target.value);
  };

  const handleTradeChange = (event) => {
    setTrade(event.target.value);
  };

  const handleLanguagesChange = (event) => {
    setLanguages(event.target.value);
  };

  const handleExperienceChange = (event) => {
    setExperience(event.target.value);
  };

  const handleCompanyChange = (event) => {
    setCompany(event.target.value);
  };

  const handlePresentStatusChange = (event) => {
    setPresentStatus(event.target.value);
  };

  const handleAboutChange = (event) => {
    setAbout(event.target.value);
  };

  const handleProfileImgChange = (e) => {
    setProfileImg(e.target.files[0]);
  };

  const handleResumeChange = (e) => {
    setResume(e.target.files[0]);
  };

  function handleClose() {
    setShowError(false);
  }

  function home(){
    navigate('/AlumniHome');
  }

  async function handleSubmit(event) {
    event.preventDefault();
    try {
        const response = await fetch('http://localhost:8000/Profile1', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({ firstName, lastName,email,course,selectedBranch,trade })
        });
    console.log(firstName)
  
    if (response.ok) {
    const data = await response.json();

    // localStorage.setItem('firstName',data.firstName)
    // localStorage.setItem('lastName',data.lastName)
    // localStorage.setItem('course',data.course)
    // localStorage.setItem('selectedBranch',data.selectedBranch)
    // localStorage.setItem('trade',data.trade)

    console.log('profile successful!')
    setProfileStatus(true);
    setProfileMessage(data.message)

    
  } 
  else
   {
    // If the response is not successful, parse the error message and display it to the user
    const data = await response.json();
    setErrorMessage(data.error);
    setShowError(true);
  }
}
catch (error) {
  // If there's a network error, display a generic error message
  setErrorMessage('An error occurred. Please try again later.');
  setShowError(true);
}
}
 return (
    <div className="profile container">
      <div className="text-center">
        <h2 className="display-2">CREATE PROFILE</h2>
      </div>
      <div className="card mx-auto" style={{ width: " 65% " }}>
        <div className="card-body">
          <form onSubmit={handleSubmit}>
            
            <p>Full Name :</p>
            <div className="d-flex">
              <div className="mb-4 me-5">
                <label htmlFor="firstname" className="me-2">First Name</label>
                <input
                  type="text"
                  id="firstname"
                  placeholder=""
                  value={firstName}
                  onChange={handleFirstNameChange}
                  required
                />
              </div>
              <div className="mb-4">
                <label htmlFor="last" className="me-2">Last Name</label>
                <input
                  type="text"
                  id="last"
                  placeholder=""
                  value={lastName}
                  onChange={handleLastNameChange}
                  required
                  />
                  </div>
                  </div>
                <div className="mb-4">
                <label htmlFor="roll" className="me-2">Roll No.</label>
                <input
                type="text"
                id="roll"
                placeholder=""
                required
                value={rollNo}
                onChange={handleRollNoChange}
                />
                </div>
                <div className="mb-4">
                <label className="form-label me-2" htmlFor="contact">
                    Contact Details
                </label>
                <div className="input-group mb-4">
                <span
                className="input-group-text"
                style={{ border: " 1px rgb(111, 109, 109) solid", height:"35px", padding:"1px" }}
                ><i className="fa fa-phone"></i>
                </span>
                <input
                type="number"
                id="contact"
                className="form-control"
                style={{
                    border: "1.5px solid rgb(0, 0, 0)",
                    padding: "5px",
                    borderRadius: "2px",
                }}
                placeholder=""
                required
                value={contact}
                onChange={handleContactDetailsChange}
                />
            </div>
            </div>

            <div className="mb-4 ms-0">
              <label className="form-label me-2" htmlFor="form2Example11">
                E-mail
              </label>
              <div className="input-group mb-4">
                <span
                  className="input-group-text"
                  style={{ border: " 1px rgb(111, 109, 109) solid", height:"35px" ,padding:"1px" }}
                >
                  <i className="fa fa-user"></i>
                </span>
                <input
                  type="email"
                  id="form2Example11"
                  className="form-control"
                  style={{
                    border: "1.5px solid rgb(0, 0, 0)",
                    padding: "5px",
                    borderRadius: "2px",
                  }}
                  placeholder="abc@gmail.com"
                  value={email}
                  onChange={handleEmailChange}
                />
              </div>
            </div>
            <div className="mb-4">
            <label htmlFor="user" className="me-2">Address</label>
            <input type="text" 
            id="user" 
            style={{
              border: "1.5px solid rgb(0, 0, 0)",
            }}
            placeholder="" 
            value={address} 
            onChange={handleAddressChange} 
            required />
            </div>

            <div className="d-flex">
            <div className="mb-4 me-5">
                <label htmlFor="user" className="me-2">Branch</label>
                <select id="user" 
                name="Branch" 
                style={{border:"1.5px solid black",padding:"5px"}} 
                value={selectedBranch}
                 onChange={handleBranchChange}>
                <option value=""></option>
                <option value="CSE">CSE</option>
                <option value="AIML">AIML</option>
                <option value="IT">IT</option>
                <option value="CSD">CSD</option>
                </select>
            </div>
            <div className="mb-4 me-5">
            <label htmlFor="course" className="me-2">Course</label>
            <select
                id="course"
                name="course"
                style={{ border: "1.5px solid black", padding: "5px" }}
                value={course}
                onChange={handleCourseChange}
            >
                <option value=""></option>
                <option value="BTech">BTech</option>
                <option value="Data Analyst">Data Analyst</option>
                <option value="Web Development">Web Development</option>
                <option value="Animation">Animation</option>
            </select>
            </div>
           
            <div className="mb-4">
                <label htmlFor="yog" className="me-2">Year of Graduation</label>
                <input
                type="number"
                id="yog"
                name="yog"
                min="1900"
                max="2099"
                step="1"
                value={year}
                onChange={handleYearOfGraduationChange}
                />
            </div>
            </div>
        <div className="mb-4 d-flex">
            <label htmlFor="qual" className="me-2">Qualifications</label>
            <input
            type="text"
            id="qual"
            name="qual"
            placeholder=""
            required
            value={qualifications}
            onChange={handleQualificationsChange}
            />
        

        <div className="mb-4 ms-5">
            <label htmlFor="trade" className="me-2">Trade</label>
            <input
            type="text"
            id="trade"
            name="trade"
            placeholder=""
            required
            value={trade}
            onChange={handleTradeChange}
            />
        </div>
        </div>

        <div className="mb-4 me-5 d-flex">
            <label htmlFor="langs" className="me-2">Languages</label>
            <input
            type="text"
            id="langs"
            name="langs"
            placeholder=""
            required
            value={languages}
            onChange={handleLanguagesChange}
            />
        

        <div className="mb-4 ms-5">
            <label htmlFor="exp" className="me-2">Experience</label>
            <input
            type="number"
            id="exp"
            name="exp"
            min="0"
            max="15"
            step="1"
            value={experience}
            onChange={handleExperienceChange}
            />
        </div>
        </div>

        <div className="mb-4 me-5 d-flex">
            <label htmlFor="com" className="me-2">Company</label>
            <input
            type="text"
            id="com"
            name="com"
            placeholder=""
            required
            value={company}
            onChange={handleCompanyChange}
            />
        
        <div className="mb-4 ms-5">
        <label htmlFor="stat" className="me-2">Present Status</label>
        <input type="text" 
        id="stat"
        placeholder="" 
        value={presentStatus} 
        onChange={handlePresentStatusChange} 
        required/>
      </div>
      </div>
      <div className="">
        <label htmlFor="bio" className="me-2">About Yourself</label>
        <br/>
        <textarea id="bio" 
        name="bio" 
        rows="4" 
        cols="50" 
        placeholder="Write about yourself" 
        value={about} 
        onChange={handleAboutChange}>
        </textarea>
        <br/>
      </div>
      <br/>
      <div className="">
        <label htmlFor="myimg"className="me-2">Upload your profile:</label>
        <input 
        type="file" 
        id="myimg" 
        name="myimg" 
        onChange={handleProfileImgChange}/>
      </div>
      <br/>
      <div className="">
        <label htmlFor="myfile"className="me-2">Upload your resume:</label>
        <input 
        type="file" 
        id="myfile" 
        name="myfile" 
        onChange={handleResumeChange}/>
      </div>
      <br/>
      <div className="text-center pt-1 mb-1 pb-1">
         <button type="submit" className="btn btn-primary" href="AlumniHome">
            Create Profile
        </button>
        </div>
        <Modal show={showError} onHide={handleClose}>
                <Modal.Header closeButton>
                  <Modal.Title>Error</Modal.Title>
                </Modal.Header>
                <Modal.Body>{errorMessage}</Modal.Body>
                <Modal.Footer>
                  <Button variant="secondary" onClick={handleClose}>
                    Close
                  </Button>
                </Modal.Footer>
              </Modal>

              <Modal show={showStatus} onHide={home}>
                <Modal.Header closeButton>
                  <Modal.Title>{firstName}</Modal.Title>
                </Modal.Header>
                <Modal.Body>{ProfileMessage}</Modal.Body>
                <Modal.Footer>
                  <Button variant="secondary" onClick={home}>
                    Home
                  </Button>
                </Modal.Footer>
              </Modal>
         
        </form>
        </div>
        </div>
        </div>
)};
export default Profile;




