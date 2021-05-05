import React from 'react'
import Add from '../helpers/Add';
import Delete from '../helpers/Delete';
import TextArea from '../helpers/TextArea';
import './details.css';


function JobDetailsForm(props) {

    const {
        jobDetails,
        jobID,
        handleResponsibilityChange,
        handleAddResponsibility,
        handleDeleteResponsibility,
    } = props;


    const detailsList = jobDetails.map((detail) => (
        <div key={detail.id} className="detail-and-delete">
            <TextArea
                onChange={(e) => handleResponsibilityChange(e, jobID, detail.id)}
                name="responsibilities"
                placeholder="Responsibilities"
                value={detail.detail}
            />
            <Delete 
                styleClass="detail-delete"
                content="X" 
                clickHandler={() => handleDeleteResponsibility(jobID, detail.id)} />
        </div>
    ))


    return (
        <div>
            <div className="detail-wrapper">
                {detailsList}
            </div>
            <Add content="Add Responsibility" clickHandler={() => handleAddResponsibility(jobID)}/>
        </div>
    )
}

export default JobDetailsForm
