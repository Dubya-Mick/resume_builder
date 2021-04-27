import React from 'react'
import SchoolForm from './SchoolForm'

function EducationForm(props) {
    const { 
        education, 
        handleSchoolChange,
        handleAddSchool,
        handleDeleteSchool,
    } = props;
    const schoolForms = education.map((school) => (
        <div key={school.id}>
            <SchoolForm
                school={school}
                handleSchoolChange={handleSchoolChange}
                handleAddSchool={handleAddSchool}
                handleDeleteSchool={handleDeleteSchool}
            />
        </div>
    ))

    return (
        <div>
            {schoolForms}
        </div>
    )
}

export default EducationForm
