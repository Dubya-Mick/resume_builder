import React from 'react'
import TextArea from '../helpers/TextArea';


function JobDetailsForm(props) {

    const {
        jobDetails,
        jobID,
        handleResponsibilityChange,
    } = props;


    const detailsList = jobDetails.map((detail) => (
        <TextArea
        onChange={(e) => handleResponsibilityChange(e, jobID, detail.id)}
        name="responsibilities"
        placeholder="Responsibilities"
        value={detail.detail}
    />
    ))


    return (
        <div>
            {detailsList}
        </div>
    )
}

export default JobDetailsForm
