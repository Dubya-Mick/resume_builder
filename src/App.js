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
          responsibilities: 'Currently heading many advanced research teams with an emphasis on agility and boardroom dominance.',
        },
        {
          id: uniqid(),
          company: 'Trunt Burger Inc.', 
          position: 'Intern', 
          location: 'Paris, KY', 
          from: 'June 1986', 
          to: 'May 2015',
          responsibilities: 'Fetched condiments including ketchup, mustard, and donkey sauce for the higher-ups',
        }
      ],
      honors: [
        {
          title: 'Burger of the Year',
          year: '2018',
        },
        {
          title: 'Most likely to grill',
          year: '1980',
        }
      ],
      hobbies: ['Grilling', 'Pickling', 'Business']
    }
  }

  handlePersonalChange = (e) => {
    const {name, value} = e.target;
    const personalInfo = {...this.state.personalInfo};
    personalInfo[name] = value;
    this.setState({personalInfo: personalInfo})
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

  deleteSchool = (idNum) => {
    const {education} = this.state;
    const newEdu = education.filter((school) => school.id !== idNum);
    this.setState({education: newEdu});
  }






  
  render() {
    const {personalInfo} = this.state;
    
    return (
      <div className="mainCV">
        <CVForm 
          handlePersonalChange={this.handlePersonalChange}
          personal={personalInfo}
          
        
        />
        <CVBody CVInfo={this.state}/>
      </div>
    )
  }
}

export default App


