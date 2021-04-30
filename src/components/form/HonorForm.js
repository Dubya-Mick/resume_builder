import React from 'react'
import Delete from '../helpers/Delete';
import Input from '../helpers/Input';
import './cvform.css'

function HonorForm(props) {
    const {
        honor,
        handleHonorsChange,
        handleDeleteHonor,
    } = props;

    return (
        <div>
            <div className="input-chunk from-to">
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
            </div>
            <Delete content="Delete Honor" clickHandler={() => handleDeleteHonor(honor.id)} />
        </div>
    )
}

export default HonorForm
