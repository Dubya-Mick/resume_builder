import React from 'react'
import Add from '../helpers/Add';
import JobForm from './JobForm';
import './cvform.css'

function WorkForm(props) {
    const {
        work,
        handleWorkChange,
        handleAddJob,
        handleDeleteJob,
        handleResponsibilityChange,
        handleAddResponsibility,
        handleDeleteResponsibility,
    } = props;

    const jobForms = work.map((job) => (
        <div key={job.id}>
            <JobForm 
                job={job}
                handleWorkChange={handleWorkChange}
                handleDeleteJob={handleDeleteJob}
                handleResponsibilityChange={handleResponsibilityChange}
                handleAddResponsibility={handleAddResponsibility}
                handleDeleteResponsibility={handleDeleteResponsibility}
            />
        </div>
    ));

    return (
        <div>
            <div className="form-chunk">
                {jobForms}
            </div>
            <Add content="Add Job" clickHandler={handleAddJob}/>
        </div>
    )
}

export default WorkForm
