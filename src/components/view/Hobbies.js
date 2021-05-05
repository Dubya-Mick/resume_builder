import React from 'react'
import Hobby from './Hobby';
import './cvbody.css'

function Hobbies(props) {
    const hobbies = props.hobbies;
    const hobbyList = hobbies.map((hobby) => (
        <div key={hobby.id}>
            <Hobby hobby={hobby} />
        </div>
    ))
    return (
        <div>
            <div className="title">Extracurriculars</div>
            <hr />
            {hobbyList}
        </div>
    )
}

export default Hobbies
