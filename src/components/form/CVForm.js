import React from 'react'
import EducationForm from './EducationForm';
import HeaderForm from './HeaderForm'
import HobbiesForm from './HobbiesForm';
import HonorsForm from './HonorsForm';
import WorkForm from './WorkForm';


function CVForm(props) {
    const {handlePersonalChange, personal} = props;
    return (
        <div>
            <HeaderForm 
                handlePersonalChange={handlePersonalChange}
                personal={personal}
            />
            <section>
                <EducationForm />
            </section>
            <section>
                <WorkForm />
            </section>
            <section>
                <HonorsForm />
            </section>
            <section>
                <HobbiesForm />
            </section>
        </div>
    )
}

export default CVForm
