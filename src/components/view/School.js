import React from 'react'

function School(props) {
    const schoolInfo = props.schoolInfo;
    return (
        <div>
            <h3>{schoolInfo.schoolName}</h3>
            <p>{schoolInfo.major}</p>
            <span> {schoolInfo.location}, {schoolInfo.from} - {schoolInfo.to}</span>
        </div>
    )
}

export default School
