import React from 'react';
import Delete from '../helpers/Delete';
import Input from '../helpers/Input';
import './cvform.css';
import JobDetailsForm from './JobDetailsForm';

function JobForm(props) {
  const {
    job,
    handleWorkChange,
    handleDeleteJob,
    handleResponsibilityChange,
    handleAddResponsibility,
    handleDeleteResponsibility,
  } = props;

  return (
    <div>
      <div className="input-chunk">
        <Input
          onChange={(e) => handleWorkChange(e, job.id)}
          name="company"
          placeholder="Company/Institution"
          value={job.company}
        />
        <Input
          onChange={(e) => handleWorkChange(e, job.id)}
          name="position"
          placeholder="Position"
          value={job.position}
        />
        <div className="from-to">
          <Input
            onChange={(e) => handleWorkChange(e, job.id)}
            name="from"
            placeholder="From"
            value={job.from}
          />
          <Input
            onChange={(e) => handleWorkChange(e, job.id)}
            name="to"
            placeholder="To"
            value={job.to}
          />
        </div>
        <JobDetailsForm
          handleResponsibilityChange={handleResponsibilityChange}
          handleAddResponsibility={handleAddResponsibility}
          handleDeleteResponsibility={handleDeleteResponsibility}
          jobDetails={job.responsibilities}
          jobID={job.id}
        />
        <Delete
          content="X"
          clickHandler={() => handleDeleteJob(job.id)}
          styleClass="school-job-delete"
        />

      </div>

    </div>
  );
}

export default JobForm;
