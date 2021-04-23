import React from 'react'
import uniqid from 'uniqid'

function Hobbies(props) {
    const hobbies = props.hobbies;
    const hobbyList = hobbies.map((hobby) => (
        <div key={uniqid()}>{hobby}</div>
    ))
    return (
        <div>
            <h3>Extracurriculars</h3>
            {hobbyList}
        </div>
    )
}

export default Hobbies
