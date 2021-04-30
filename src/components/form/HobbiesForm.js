import React from 'react'
import Add from '../helpers/Add';
import HobbyForm from './HobbyForm';
import './cvform.css'

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
            <div className='form-chunk'>
                {hobbyForms}
            </div>
            <Add content="Add Hobby" clickHandler={handleAddHobby} />
        </div>
    )
}

export default HobbiesForm
