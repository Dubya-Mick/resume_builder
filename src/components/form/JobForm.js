import React from 'react'
import Delete from '../helpers/Delete';
import Input from '../helpers/Input';
import TextArea from '../helpers/TextArea';
import './cvform.css'

function JobForm(props) {
    const {
        job,
        handleWorkChange,
        handleDeleteJob
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
                <Input
                    onChange={(e) => handleWorkChange(e, job.id)}
                    name="location"
                    placeholder="Location"
                    value={job.location}
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
                <TextArea
                    onChange={(e) => handleWorkChange(e, job.id)}
                    name="responsibilities"
                    placeholder="Responsibilities"
                    value={job.responsibilities}
                />
        </div>           
            <Delete clickHandler={() => handleDeleteJob(job.id)}/>
        </div>
    )
}

export default JobForm
