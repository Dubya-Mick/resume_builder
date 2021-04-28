import React from 'react'
import Delete from '../helpers/Delete';
import Input from '../helpers/Input';

function HobbyForm(props) {
    const {
        hobby,
        handleHobbiesChange,
        handleDeleteHobby,
    } = props;

    return (
        <div>
            <Input 
                onChange={(e) => handleHobbiesChange(e, hobby.id)}
                name="title"
                placeholder="Hobby"
                value={hobby.title}
            />
            <Delete clickHandler={() => handleDeleteHobby(hobby.id)} />
        </div>
    )
}

export default HobbyForm
