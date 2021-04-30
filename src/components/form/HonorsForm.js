import React from 'react'
import Add from '../helpers/Add';
import HonorForm from './HonorForm';
import './cvform.css';

function HonorsForm(props) {
    const {
        honors,
        handleHonorsChange,
        handleAddHonor,
        handleDeleteHonor,
    } = props;

    const honorForms = honors.map((honor) => (
        <div key={honor.id}>
            <HonorForm
                honor={honor}
                handleHonorsChange={handleHonorsChange}
                handleDeleteHonor={handleDeleteHonor}
            />
        </div>
    ))


    return (
        <div>
            <div className="form-chunk">
                {honorForms}
            </div>
            <Add content="Add Honor" clickHandler={handleAddHonor} />
        </div>
    )
}

export default HonorsForm
