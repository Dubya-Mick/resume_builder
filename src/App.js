import React, { Component } from 'react'
import uniqid from 'uniqid'
import './App.css'
import CVForm from './components/form/CVForm'
import CVBody from './components/view/CVBody'

class App extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
      personalInfo: {
        name: 'Scoobert Doobert', 
        title: 'Burger Developer',
        email: 'scoob@gmail.com', 
        phone: '1800-Scoobin', 
      },
      education: [
        {
          id: uniqid(),
          schoolName: 'Burger University',
          major: 'B.S. Burger Science',
          location: 'Chicago, IL',
          from: '1982',
          to: '1986',
        },
        {
          id: uniqid(),
          schoolName: 'Burger High',
          major: 'Burger GED',
          location: 'Chicago, IL',
          from: '1978',
          to: '1982',
        }
      ],
      work: [
        {
          id: uniqid(),
          company: 'Scoob Burger Corp', 
          position: 'CEO', 
          location: 'London, KY', 
          from: 'May 2015', 
          to: 'Present',
          responsibilities: [{id: uniqid(), detail: 'one'}, {id: uniqid(), detail: 'two'}, {id: uniqid(), detail: 'three'}],
        },
        {
          id: uniqid(),
          company: 'Trunt Burger Inc.', 
          position: 'Intern', 
          location: 'Paris, KY', 
          from: 'June 1986', 
          to: 'May 2015',
          responsibilities: [{id: uniqid(), detail: 'one'}, {id: uniqid(), detail: 'two'}, {id: uniqid(), detail: 'three'}],
        }
      ],
      honors: [
        {
          id: uniqid(),
          title: 'Burger of the Year',
          year: '2018',
        },
        {
          id: uniqid(),
          title: 'Most likely to grill',
          year: '1980',
        }
      ],
      hobbies: [
        {
          id: uniqid(),
          title: 'Grilling'
        },
        {
          id: uniqid(),
          title: 'Pool'
        },
        {
          id: uniqid(),
          title: 'Business'
        },
      ]
    }
  }

  handlePersonalChange = (e) => {
    const {name, value} = e.target;
    const {personalInfo} = this.state;
    personalInfo[name] = value;
    this.setState({personalInfo: personalInfo})
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
    });
    this.setState({education: education});
  }

  deleteSchool = (id) => {
    const {education} = this.state;
    const newEdu = education.filter((school) => school.id !== id);
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
    this.setState({work: newWork})
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
    this.setState({work: newWork})
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
    this.setState({work: newWork})
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
      location: '', 
      from: '', 
      to: '',
      responsibilities: '',
    });
    this.setState({work: work})
  }

  deleteJob = (id) => {
    const {work} = this.state;
    const newWork = work.filter((job) => job.id !== id);
    this.setState({work: newWork})
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
    this.setState({honors: newHonors})
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
    this.setState({honors: newHonors})
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
    this.setState({hobbies: newHobbies})
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
    const {personalInfo, education, work, honors, hobbies} = this.state;
    
    return (
      <div className="mainCV">
        <div className="cv-form-container">
          <CVForm
            handlePersonalChange={this.handlePersonalChange}
            handleSchoolChange={this.handleSchoolChange}
            handleAddSchool={this.addSchool}
            handleDeleteSchool={this.deleteSchool}
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
        <CVBody CVInfo={this.state}/>
      </div>
    )
  }
}

export default App


