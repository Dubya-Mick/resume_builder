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
        <div>
            <div className="input-chunk">
                <Input
                    onChange={(e) => handleHobbiesChange(e, hobby.id)}
                    name="title"
                    placeholder="Hobby"
                    value={hobby.title}
                />
            </div>
            <Delete content="Delete Hobby" clickHandler={() => handleDeleteHobby(hobby.id)} />
        </div>
    )
}

export default HobbyForm
