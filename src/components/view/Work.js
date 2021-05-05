import React from 'react'
import Job from './Job'
import uniqid from 'uniqid'

function Work(props) {
    const workInfo = props.work;

    const workSection = workInfo.map((job) => (
        <Job key={uniqid()} jobInfo={job}/>
    ))

    return (
        <div>
            <div className="title">Work Experience</div>
            <hr />
            <div className="school-job-list">
                {workSection}
            </div>
        </div>
    )
}

export default Work
