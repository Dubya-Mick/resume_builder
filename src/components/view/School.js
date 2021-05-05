import React from 'react'

function School(props) {
    const schoolInfo = props.schoolInfo;
    const details = schoolInfo.details.map((detail) => (
        <li key={detail.id}>{detail.text}</li>
    ));
    return (
        <div>
            <div className="job-school-title">
                <div className="position-location">{schoolInfo.location}</div>
                <div>{schoolInfo.schoolName}</div>
                <div className="dates">{schoolInfo.from} - {schoolInfo.to}</div>
            </div>
                <i>{schoolInfo.major}</i>
                <div className="list-items">
                    {details}
                </div>
        </div>
    )
}

export default School
