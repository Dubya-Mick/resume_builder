import React from 'react'
import './CVHeader.css'

function CVHeader(props) {

    const {name, title, email, phone, linkedIn} = props.personalInfo;

    return (
        <div className="CVHeader">
            <div>
                <h1>{name}</h1>
                <h2>{title}</h2>
            </div>
            <div>
                <ul>
                    <li>Email: {email}</li>
                    <li>Phone: {phone}</li>
                    <li>LinkedIn: {linkedIn}</li>
                </ul>
            </div>
        </div>
    )
}

export default CVHeader
