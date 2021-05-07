import React from 'react'
import Hobby from './Hobby';
import './cvbody.css'

function Hobbies(props) {
    const hobbies = props.hobbies;
    const hobbyList = hobbies.map((hobby) => (
        <div key={hobby.id}>
            <Hobby hobby={hobby} />
        </div>
    ));

    if (hobbyList.length > 0) {
        return (
            <div>
                <div className="title">Extracurriculars</div>
                <hr />
                {hobbyList}
            </div>
        )
    }
    return null;

}

export default Hobbies
