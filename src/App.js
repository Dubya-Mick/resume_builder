import React, { useState, useRef, useEffect } from 'react';
import uniqid from 'uniqid';
import './App.css';
import CVForm from './components/form/CVForm';
import CVBody from './components/view/CVBody';
import ReactToPrint from 'react-to-print';
import AppHeader from './components/AppHeader';
import OrderChoice from './components/OrderChoice';

function App() {
  const [cv, setCV] = useState({
    eduFirst: true,
    hobbiesFirst: false,
    personalInfo: {
      name: '', 
      addressOne: '',
      addressTwo: '',
      email: '', 
      phone: '', 
    },
    education: [
      {
        id: uniqid(),
        schoolName: '',
        major: '',
        location: '',
        from: '',
        to: '',
        details: [{id: uniqid(), text: ''}],
      },
    ],
    work: [
      {
        id: uniqid(),
        company: '', 
        position: '',  
        from: '', 
        to: '',
        responsibilities: [{id: uniqid(), detail: ''}],
      },
    ],
    honors: [
      {
        id: uniqid(),
        title: '',
        year: '',
      },
    ],
    hobbies: [
      {
        id: uniqid(),
        title: '',
      },
    ]
  })

  // checkboxes controlling order of cv componenents
  const handleEduCheckBoxChange = (e) => {
    setCV({...cv, eduFirst: e.target.checked});
  }

  const handleHobbyCheckBoxChange = (e) => {
    setCV({...cv, hobbiesFirst: e.target.checked});
  }

  const handlePersonalChange = (e) => {
    const {name, value} = e.target;
    const {personalInfo} = cv;
    personalInfo[name] = value;
    setCV({...cv, personalInfo: personalInfo});
  }

  const handleSchoolChange = (e, id) => {
    const {name, value} = e.target;
    const {education} = cv;
    const newEdu = education.map(function(school) {
      if (school.id === id) {
        // object spread operator for modifying only one property
        return {...school, [name]: value}; 
      } 
      return school;
    });
    setCV({...cv, education: newEdu});
  }

  const addSchool = () => {
    const {education} = cv;
    education.push({
      id: uniqid(),
      schoolName: '',
      major: '',
      location: '',
      from: '',
      to: '',
      details: [{id: uniqid(), text: ''}],
    });
    setCV({...cv, education: education});
  }

  const deleteSchool = (id) => {
    const {education} = cv;
    const newEdu = education.filter((school) => school.id !== id);
    setCV({...cv, education: newEdu});
  }

  const deleteSchoolDetail = (schoolID, detailID) => {
    const {education} = cv;
    const newEdu = education.map((school) => {
      if (school.id === schoolID) {
        const newDetails = school.details.filter((detail) => detail.id !== detailID);
        return {...school, details: newDetails};
      } else {
        return school;
      }
    });
    setCV({...cv, education: newEdu});
  }

  const addSchoolDetail = (id) => {
    const {education} = cv;
    const newEdu = education.map((school) => {
      if (school.id === id) {
        const newDetails = school.details;
        newDetails.push({id: uniqid(), text: ''});
        return {...school, details: newDetails}
      } else {
        return school;
      }
    });
    setCV({...cv, education: newEdu});
  }

  const handleSchoolDetailChange = (e, schoolID, detailID) => {
    const {value} = e.target;
    const {education} = cv;
    const newEdu = education.map((school) => {
      if (school.id === schoolID) {
        const newDetails = school.details.map((detail) => {
          if (detail.id === detailID) {
            return {...detail, text: value};
          } else {
            return detail;
          }
        });
        return {...school, details: newDetails};
      } else {
        return school;
      }
    });
    setCV({...cv, education: newEdu});
  }

  const handleWorkChange = (e, id) => {
    const {name, value} = e.target;
    const {work} = cv;
    const newWork = work.map(function(job) {
      if (job.id === id) {
        return {...job, [name]: value}
      } else {
        return job;
      }
    });
    setCV({...cv, work: newWork});
  }

  const deleteResponsibility = (jobID, detailID) => {
    const {work} = cv;
    const newWork = work.map((job) => {
      if (job.id === jobID) {
        const newResponsibilities = job.responsibilities.filter((jobDetail) => jobDetail.id !== detailID);
        return {...job, responsibilities: newResponsibilities}
      } else {
        return job;
      }
    });
    setCV({...cv, work: newWork});
  }

  const addResponsibility = (id) => {
    const {work} = cv;
    const newWork = work.map((job) => {
      if (job.id === id) {
        const newResponsibilities = job.responsibilities;
        newResponsibilities.push({id: uniqid(), detail: ''});
        return {...job, responsibilities: newResponsibilities};
      } else {
        return job;
      }
    })
    setCV({...cv, work: newWork});
  }

  const handleResponsibilityChange = (e, jobID, detailID) => {
    const {value} = e.target;
    const {work} = cv;
    const newWork = work.map((job) => {
      if (job.id === jobID) {
        const newResponsibilities = job.responsibilities.map((jobDetail) => {
          if (jobDetail.id === detailID) {
            return {...jobDetail, detail: value};
          } else {
            return jobDetail;
          }
        });
        const newJob = {...job, responsibilities: newResponsibilities}
        return newJob
      } else {
        return job;
      }
    });
    setCV({...cv, work: newWork});
  }

  const addJob = () => {
    const {work} = cv;
    work.push({
      id: uniqid(),
      company: '', 
      position: '',  
      from: '', 
      to: '',
      responsibilities: [{id: uniqid(), detail: ''}],
    });
    setCV({...cv, work: work});
  }

  const deleteJob = (id) => {
    const {work} = cv;
    const newWork = work.filter((job) => job.id !== id);
    setCV({...cv, work: newWork});
  }

  const handleHonorsChange = (e, id) => {
    const {name, value} = e.target;
    const {honors} = cv;
    const newHonors = honors.map(function(honor) {
      if (honor.id === id) {
        return {...honor, [name]: value};
      } else {
        return honor;
      }
    });
    setCV({...cv, honors: newHonors});
  }

  const addHonor = () => {
    const {honors} = cv;
    honors.push({
      id: uniqid(),
      title: '',
      year: '',
    });
    setCV({...cv, honors: honors});
  }

  const deleteHonor = (id) => {
    const {honors} = cv;
    const newHonors = honors.filter((honor) => honor.id !== id);
    setCV({...cv, honors: newHonors});
  }

  const handleHobbiesChange = (e, id) => {
    const {name, value} = e.target;
    const {hobbies} = cv;
    const newHobbies = hobbies.map(function(hobby) {
      if (hobby.id === id) {
        return {...hobby, [name]: value};
      } else {
        return hobby;
      }
    });
    setCV({...cv, hobbies: newHobbies});
  }

  const addHobby = () => {
    const {hobbies} = cv;
    hobbies.push({
      id: uniqid(),
      title: ''
    });
    setCV({...cv, hobbies: hobbies});
  }

  const deleteHobby = (id) => {
    const {hobbies} = cv;
    const newHobbies = hobbies.filter((hobby) => hobby.id !== id);
    setCV({...cv, hobbies: newHobbies});
  }

  useEffect(() => {
    document.body.classList.add('body-style')
  }, [])

  const {eduFirst, hobbiesFirst, personalInfo, education, work, honors, hobbies} = cv;
  // useRef needed here for React to Print
  const componentRef = useRef();
  
  return (
    <div>
      <AppHeader />
      <div className="form-and-cv-main">
        <div className="cv-form-container">
          <CVForm
            handlePersonalChange={handlePersonalChange}
            handleSchoolChange={handleSchoolChange}
            handleAddSchool={addSchool}
            handleDeleteSchool={deleteSchool}
            handleDeleteSchoolDetail={deleteSchoolDetail}
            handleAddSchoolDetail={addSchoolDetail}
            handleSchoolDetailChange={handleSchoolDetailChange}
            handleWorkChange={handleWorkChange}
            handleAddJob={addJob}
            handleDeleteJob={deleteJob}
            handleHonorsChange={handleHonorsChange}
            handleAddHonor={addHonor}
            handleDeleteHonor={deleteHonor}
            handleHobbiesChange={handleHobbiesChange}
            handleAddHobby={addHobby}
            handleDeleteHobby={deleteHobby}
            handleResponsibilityChange={handleResponsibilityChange}
            handleAddResponsibility={addResponsibility}
            handleDeleteResponsibility={deleteResponsibility}
            personal={personalInfo}
            education={education}
            work={work}
            honors={honors}
            hobbies={hobbies}
          />
        </div>
        <div>
        <OrderChoice 
          eduFirst={eduFirst}
          hobbiesFirst={hobbiesFirst}
          handleEduCheckBoxChange={handleEduCheckBoxChange}
          handleHobbyCheckBoxChange={handleHobbyCheckBoxChange}
        />
        <ReactToPrint
            trigger={() => <button className="print">Print or Save Resume as PDF</button>}
            content={() => componentRef.current}
        />
          <div className="cv-view-container">
            <CVBody CVInfo={cv} ref={componentRef}/>
          </div>
        </div>
      </div>
    </div>
  )
}

export default App


