import React from 'react'
import Delete from '../helpers/Delete';
import Input from '../helpers/Input';
import './cvform.css'

function HobbyForm(props) {
    const {
        hobby,
        handleHobbiesChange,
        handleDeleteHobby,
    } = props;

    return (
        <div className="input-chunk">
            <div>
                <Input
                    onChange={(e) => handleHobbiesChange(e, hobby.id)}
                    name="title"
                    placeholder="Hobby"
                    value={hobby.title}
                />
            </div>
            <Delete 
                content="X" 
                clickHandler={() => handleDeleteHobby(hobby.id)} 
                styleClass="hobby-delete"
            />
        </div>
    )
}

export default HobbyForm
