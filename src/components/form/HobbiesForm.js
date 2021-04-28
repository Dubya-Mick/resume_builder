import React from 'react'
import Add from '../helpers/Add';
import HobbyForm from './HobbyForm';

function HobbiesForm(props) {
    const {
        hobbies,
        handleHobbiesChange,
        handleAddHobby,
        handleDeleteHobby,
    } = props;

    const hobbyForms = hobbies.map((hobby) => (
        <div key={hobby.id}>
            <HobbyForm
                hobby={hobby}
                handleHobbiesChange={handleHobbiesChange}
                handleDeleteHobby={handleDeleteHobby}
            />
        </div>
    ))

    return (
        <div>
            {hobbyForms}
            <Add clickHandler={handleAddHobby} />
        </div>
    )
}

export default HobbiesForm
