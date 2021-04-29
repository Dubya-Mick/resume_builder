import React from 'react'
import './cvheader.css'

function CVHeader(props) {

    const {name, title, email, phone} = props.personalInfo;

    return (
        <div className="cv-Header">
            <div>
                <h1>{name}</h1>
                <h2>{title}</h2>
            </div>
            <div>
                <ul>
                    <li>Email: {email}</li>
                    <li>Phone: {phone}</li>
                </ul>
            </div>
        </div>
    )
}

export default CVHeader
