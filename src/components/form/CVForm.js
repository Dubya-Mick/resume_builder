import React from 'react'
import EducationForm from './EducationForm';
import HeaderForm from './HeaderForm'
import HobbiesForm from './HobbiesForm';
import HonorsForm from './HonorsForm';
import WorkForm from './WorkForm';


function CVForm(props) {
    const { 
        handlePersonalChange, 
        handleSchoolChange, 
        handleAddSchool,
        handleDeleteSchool,
        personal, 
        education, 
    } = props;
    return (
        <div>
            <h1>Header</h1>
            <HeaderForm 
                handlePersonalChange={handlePersonalChange}
                personal={personal}
            />
            <section>
                <h1>Education</h1>
                <EducationForm 
                    education={education}
                    handleSchoolChange={handleSchoolChange}
                    handleAddSchool={handleAddSchool}
                    handleDeleteSchool={handleDeleteSchool}
                />
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
