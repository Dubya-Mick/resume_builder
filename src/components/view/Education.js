import React from 'react';
import uniqid from 'uniqid';
import School from './School';

function Education(props) {
  const educationInfo = props.education;
  const educationSection = educationInfo.map((school) => (
    <School key={uniqid()} schoolInfo={school} />
  ));
  if (educationSection.length > 0) {
    return (
      <div>
        <div className="title">Education</div>
        <hr />
        <div className="school-job-list">
          {educationSection}
        </div>
      </div>
    );
  }
  return null;
}

export default Education;
