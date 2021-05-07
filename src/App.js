import React, { Component } from 'react';
import uniqid from 'uniqid';
import './App.css';
import CVForm from './components/form/CVForm';
import CVBody from './components/view/CVBody';
import ReactToPrint from 'react-to-print';
import AppHeader from './components/AppHeader';
import OrderChoice from './components/OrderChoice';



class App extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
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
          details: [{id: uniqid(), text: ''}]
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
          title: ''
        },
      ]
    }
  }

  handleEduCheckBoxChange = (e) => {
    this.setState({eduFirst: e.target.checked});
  }

  handleHobbyCheckBoxChange = (e) => {
    this.setState({hobbiesFirst: e.target.checked});
  }

  handlePersonalChange = (e) => {
    const {name, value} = e.target;
    const {personalInfo} = this.state;
    personalInfo[name] = value;
    this.setState({personalInfo: personalInfo});
  }

  handleSchoolChange = (e, id) => {
    const {name, value} = e.target;
    const {education} = this.state;
    const newEdu = education.map(function(school) {
      if (school.id === id) {
        // object spread operator for modifying only one property
        return {...school, [name]: value}; 
      } 
      return school;
    });
    this.setState({education: newEdu});
  }

  addSchool = () => {
    const {education} = this.state;
    education.push({
      id: uniqid(),
      schoolName: '',
      major: '',
      location: '',
      from: '',
      to: '',
      details: [{id: uniqid(), text: ''}],
    });
    this.setState({education: education});
  }

  deleteSchool = (id) => {
    const {education} = this.state;
    const newEdu = education.filter((school) => school.id !== id);
    this.setState({education: newEdu});
  }

  deleteSchoolDetail = (schoolID, detailID) => {
    const {education} = this.state;
    const newEdu = education.map((school) => {
      if (school.id === schoolID) {
        const newDetails = school.details.filter((detail) => detail.id !== detailID);
        return {...school, details: newDetails};
      } else {
        return school;
      }
    });
    this.setState({education: newEdu});
  }

  addSchoolDetail = (id) => {
    const {education} = this.state;
    const newEdu = education.map((school) => {
      if (school.id === id) {
        const newDetails = school.details;
        newDetails.push({id: uniqid(), text: ''});
        return {...school, details: newDetails}
      } else {
        return school;
      }
    });
    this.setState({education: newEdu});
  }

  handleSchoolDetailChange = (e, schoolID, detailID) => {
    const {value} = e.target;
    const {education} = this.state;
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
    this.setState({education: newEdu});
  }

  handleWorkChange = (e, id) => {
    const {name, value} = e.target;
    const {work} = this.state;
    const newWork = work.map(function(job) {
      if (job.id === id) {
        return {...job, [name]: value}
      } else {
        return job;
      }
    });
    this.setState({work: newWork});
  }

  deleteResponsibility = (jobID, detailID) => {
    const {work} = this.state;
    const newWork = work.map((job) => {
      if (job.id === jobID) {
        const newResponsibilities = job.responsibilities.filter((jobDetail) => jobDetail.id !== detailID);
        return {...job, responsibilities: newResponsibilities}
      } else {
        return job;
      }
    });
    this.setState({work: newWork});
  }

  addResponsibility = (id) => {
    const {work} = this.state;
    const newWork = work.map((job) => {
      if (job.id === id) {
        const newResponsibilities = job.responsibilities;
        newResponsibilities.push({id: uniqid(), detail: ''});
        return {...job, responsibilities: newResponsibilities};
      } else {
        return job;
      }
    })
    this.setState({work: newWork});
  }

  handleResponsibilityChange = (e, jobID, detailID) => {
    const {value} = e.target;
    const {work} = this.state;
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
    this.setState({work: newWork});
  }

  addJob = () => {
    const {work} = this.state;
    work.push({
      id: uniqid(),
      company: '', 
      position: '',  
      from: '', 
      to: '',
      responsibilities: [{id: uniqid(), detail: ''}],
    });
    this.setState({work: work});
  }

  deleteJob = (id) => {
    const {work} = this.state;
    const newWork = work.filter((job) => job.id !== id);
    this.setState({work: newWork});
  }

  handleHonorsChange = (e, id) => {
    const {name, value} = e.target;
    const {honors} = this.state;
    const newHonors = honors.map(function(honor) {
      if (honor.id === id) {
        return {...honor, [name]: value};
      } else {
        return honor;
      }
    });
    this.setState({honors: newHonors});
  }

  addHonor = () => {
    const {honors} = this.state;
    honors.push({
      id: uniqid(),
      title: '',
      year: '',
    });
    this.setState({honors: honors});
  }

  deleteHonor = (id) => {
    const {honors} = this.state;
    const newHonors = honors.filter((honor) => honor.id !== id);
    this.setState({honors: newHonors});
  }

  handleHobbiesChange = (e, id) => {
    const {name, value} = e.target;
    const {hobbies} = this.state;
    const newHobbies = hobbies.map(function(hobby) {
      if (hobby.id === id) {
        return {...hobby, [name]: value};
      } else {
        return hobby;
      }
    });
    this.setState({hobbies: newHobbies});
  }

  addHobby = () => {
    const {hobbies} = this.state;
    hobbies.push({
      id: uniqid(),
      title: ''
    });
    this.setState({hobbies: hobbies});
  }

  deleteHobby = (id) => {
    const {hobbies} = this.state;
    const newHobbies = hobbies.filter((hobby) => hobby.id !== id);
    this.setState({hobbies: newHobbies});
  }

  componentDidMount() {
    document.body.classList.add('body-style')
  }

  render() {
    const {eduFirst, hobbiesFirst, personalInfo, education, work, honors, hobbies} = this.state;
    
    return (
      <div>
        <AppHeader />
        <div className="form-and-cv-main">
          <div className="cv-form-container">
            <CVForm
              handlePersonalChange={this.handlePersonalChange}
              handleSchoolChange={this.handleSchoolChange}
              handleAddSchool={this.addSchool}
              handleDeleteSchool={this.deleteSchool}
              handleDeleteSchoolDetail={this.deleteSchoolDetail}
              handleAddSchoolDetail={this.addSchoolDetail}
              handleSchoolDetailChange={this.handleSchoolDetailChange}
              handleWorkChange={this.handleWorkChange}
              handleAddJob={this.addJob}
              handleDeleteJob={this.deleteJob}
              handleHonorsChange={this.handleHonorsChange}
              handleAddHonor={this.addHonor}
              handleDeleteHonor={this.deleteHonor}
              handleHobbiesChange={this.handleHobbiesChange}
              handleAddHobby={this.addHobby}
              handleDeleteHobby={this.deleteHobby}
              handleResponsibilityChange = {this.handleResponsibilityChange}
              handleAddResponsibility = {this.addResponsibility}
              handleDeleteResponsibility = {this.deleteResponsibility}
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
            handleEduCheckBoxChange={this.handleEduCheckBoxChange}
            handleHobbyCheckBoxChange={this.handleHobbyCheckBoxChange}
          />
          <ReactToPrint
                trigger={() => <button className="print">Print or Save Resume as PDF</button>}
                content={() => this.componentRef}
          />
            <div className="cv-view-container">
                <CVBody CVInfo={this.state} ref={(el) => (this.componentRef = el)}/>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default App


