import React from 'react';

function Job(props) {
  const { jobInfo } = props;
  const responsibilities = jobInfo.responsibilities.map((jobDetail) => (
    <li key={jobDetail.id}>{jobDetail.detail}</li>
  ));

  return (
    <div>
      <div className="job-school-title">
        <div className="position-location">{jobInfo.position}</div>
        <div>{jobInfo.company}</div>
        <div className="dates">
          {jobInfo.from}
          {' '}
          -
          {' '}
          {jobInfo.to}
        </div>
      </div>
      <ul className="list-items">
        {responsibilities}
      </ul>
    </div>
  );
}

export default Job;
