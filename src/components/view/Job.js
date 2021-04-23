import React from 'react'

function Job(props) {
    const jobInfo = props.jobInfo;
    return (
        <div>
            <h3>{jobInfo.position}, {jobInfo.company}</h3>
            <div>{jobInfo.location}</div>
            <span>{jobInfo.from} - {jobInfo.to}</span>
            <p>{jobInfo.responsibilities}</p>
        </div>
    )
}

export default Job
