import React from 'react'

function Job(props) {
    const jobInfo = props.jobInfo;
    return (
        <div>
            <h3>{jobInfo.company}</h3>
            <h4>{jobInfo.position}</h4>
            <div>{jobInfo.location}</div>
            <span>{jobInfo.from} - {jobInfo.to}</span>
            <p>{jobInfo.responsibilities}</p>
        </div>
    )
}

export default Job
