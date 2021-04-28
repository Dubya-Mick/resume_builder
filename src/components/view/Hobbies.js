import React from 'react'
import Hobby from './Hobby';

function Hobbies(props) {
    const hobbies = props.hobbies;
    const hobbyList = hobbies.map((hobby) => (
        <div key={hobby.id}>
            <Hobby hobby={hobby} />
        </div>
    ))
    return (
        <div>
            <h3>Extracurriculars</h3>
            {hobbyList}
        </div>
    )
}

export default Hobbies
