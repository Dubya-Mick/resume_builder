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
        handleWorkChange,
        handleAddJob,
        handleDeleteJob,
        handleHonorsChange,
        handleAddHonor,
        handleDeleteHonor,
        handleHobbiesChange,
        handleAddHobby,
        handleDeleteHobby,
        personal, 
        education,
        work, 
        honors,
        hobbies,
    } = props;
    return (
        <div>
            <h2>Personal Info</h2>
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
                <h1>Work</h1>
                <WorkForm 
                    work={work}
                    handleWorkChange={handleWorkChange}
                    handleAddJob={handleAddJob}
                    handleDeleteJob={handleDeleteJob}
                />
            </section>
            <section>
                <h1>Honors</h1>
                <HonorsForm 
                    honors={honors}
                    handleHonorsChange={handleHonorsChange}
                    handleAddHonor={handleAddHonor}
                    handleDeleteHonor={handleDeleteHonor}
                />
            </section>
            <section>
                <h1>Hobbies</h1>
                <HobbiesForm 
                    hobbies={hobbies}
                    handleHobbiesChange={handleHobbiesChange}
                    handleAddHobby={handleAddHobby}
                    handleDeleteHobby={handleDeleteHobby}
                />
            </section>
        </div>
    )
}

export default CVForm
