import React, { Component } from 'react'
import './App.css'
import CVBody from './components/view/CVBody'
import CVHeader from './components/view/CVHeader'

class App extends Component {
  render() {


    // main cv wrapper 

    const CVData = {
      personalInfo: {
        name: 'Scoobert Doobert', 
        title: 'Burger Developer',
        email: 'scoob@gmail.com', 
        phone: '1800-Scoobin', 
        linkedIn: 'linkded.com/scoob',
      },
      education: [
        {
          schoolName: 'Burger University',
          major: 'B.S. Burger Science',
          location: 'Chicago, IL',
          from: '1982',
          to: '1986',
        },
        {
          schoolName: 'Burger High',
          major: 'Burger GED',
          location: 'Chicago, IL',
          from: '1978',
          to: '1982',
        }
      ],
      work: [
        {
          company: 'Scoob Burger Corp', 
          position: 'CEO', 
          location: 'London, KY', 
          from: 'May 2015', 
          to: 'Present',
          responsibilities: 'Currently heading many advanced research teams with an emphasis on agility and boardroom dominance.',
        },
        {
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

    return (
      <div className="mainCV">
        <CVHeader personalInfo={CVData.personalInfo}/>
        <CVBody CVInfo={CVData}/>
      </div>
    )
  }
}

export default App


