import React from 'react'

function Job(props) {
    const jobInfo = props.jobInfo;
    const responsibilities = jobInfo.responsibilities.map((jobDetail) => (
        <li key={jobDetail.id}>{jobDetail.detail}</li>
    ))


    return (
        <div>
            <h3>{jobInfo.company}</h3>
            <h4>{jobInfo.position}</h4>
            <div>{jobInfo.location}</div>
            <span>{jobInfo.from} - {jobInfo.to}</span>
            <ul>
                {responsibilities}
            </ul>
        </div>
    )
}

export default Job
