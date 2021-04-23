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
            <h1>Work Experience</h1>
            {workSection}
        </div>
    )
}

export default Work
