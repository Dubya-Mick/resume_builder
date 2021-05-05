import React from 'react'
import './cvheader.css'

function CVHeader(props) {

    const {name, addressOne, addressTwo, email, phone} = props.personalInfo;

    return (
        <div className="cv-Header">
            <div className="address">
                <div>{addressOne}</div>
                <div>{addressTwo}</div>
            </div>
            <div>
                <div className="name">{name}</div>
            </div>
            <div className="phone-email">
                <div>{phone}</div>
                <div>{email}</div>
            </div>
        </div>
    )
}

export default CVHeader
