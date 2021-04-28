import React from 'react'
import Delete from '../helpers/Delete';
import Input from '../helpers/Input';

function HonorForm(props) {
    const {
        honor,
        handleHonorsChange,
        handleDeleteHonor,
    } = props;

    return (
        <div>
            <Input 
                onChange={(e) => handleHonorsChange(e, honor.id)}
                name="title"
                placeholder="Title of Honor"
                value={honor.title}
            />
            <Input 
                onChange={(e) => handleHonorsChange(e, honor.id)}
                name="year"
                placeholder="Year Received"
                value={honor.year}
            />
            <Delete clickHandler={() => handleDeleteHonor(honor.id)} />
        </div>
    )
}

export default HonorForm
