import React from 'react';

function School(props) {
  const { schoolInfo } = props;
  const details = schoolInfo.details.map((detail) => (
    <li key={detail.id}>{detail.text}</li>
  ));
  return (
    <div>
      <div className="job-school-title">
        <div className="position-location">{schoolInfo.location}</div>
        <div>{schoolInfo.schoolName}</div>
        <div className="dates">
          {schoolInfo.from}
          {' '}
          -
          {' '}
          {schoolInfo.to}
        </div>
      </div>
      <i>{schoolInfo.major}</i>
      <ul className="list-items">
        {details}
      </ul>
    </div>
  );
}

export default School;
