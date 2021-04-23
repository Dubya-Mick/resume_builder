import React from 'react'
import School from './School'
import uniqid from 'uniqid'

function Education(props) {
    const educationInfo = props.education;
    const educationSection = educationInfo.map((school) => (
        <School key={uniqid()} schoolInfo={school}/>
    ));

    return (
        <div className="education-section">
            <h1>Education</h1>
            {educationSection}
        </div>
    )
}

export default Education
