import React from 'react'
import Add from '../helpers/Add';
import JobForm from './JobForm';

function WorkForm(props) {
    const {
        work,
        handleWorkChange,
        handleAddJob,
        handleDeleteJob,
    } = props;

    const jobForms = work.map((job) => (
        <div key={job.id}>
            <JobForm 
                job={job}
                handleWorkChange={handleWorkChange}
                handleDeleteJob={handleDeleteJob}
            />
        </div>
    ));

    return (
        <div>
            {jobForms}
            <Add clickHandler={handleAddJob}/>
        </div>
    )
}

export default WorkForm
