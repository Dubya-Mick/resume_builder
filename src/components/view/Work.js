import React from 'react';
import uniqid from 'uniqid';
import Job from './Job';

function Work(props) {
  const workInfo = props.work;

  const workSection = workInfo.map((job) => (
    <Job key={uniqid()} jobInfo={job} />
  ));

  if (workSection.length > 0) {
    return (
      <div>
        <div className="title">Work Experience</div>
        <hr />
        <div className="school-job-list">
          {workSection}
        </div>
      </div>
    );
  }
  return null;
}

export default Work;
