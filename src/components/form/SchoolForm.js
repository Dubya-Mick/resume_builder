import React from 'react'
import Delete from '../helpers/Delete';
import Input from '../helpers/Input'
import './cvform.css'

function SchoolForm(props) {
    const {
        school, 
        handleSchoolChange, 
        handleDeleteSchool,
    } = props;
    return (
        <div>
            <div className="input-chunk">
                <Input
                    onChange={(e) => handleSchoolChange(e, school.id)}
                    name="schoolName"
                    placeholder="Name of Institution"
                    value={school.schoolName}
                />
                <Input
                    onChange={(e) => handleSchoolChange(e, school.id)}
                    name="location"
                    placeholder="City/Location"
                    value={school.location}
                />
                <Input
                    onChange={(e) => handleSchoolChange(e, school.id)}
                    name="major"
                    placeholder="Major or Degree"
                    value={school.major}
                />
                <div className="from-to">
                    <Input
                        onChange={(e) => handleSchoolChange(e, school.id)}
                        name="from"
                        placeholder="From"
                        value={school.from}
                    />
                    <Input
                        onChange={(e) => handleSchoolChange(e, school.id)}
                        name="to"
                        placeholder="To"
                        value={school.to}
                    />
                </div>
                <Delete 
                    content="X" 
                    clickHandler={() => handleDeleteSchool(school.id)} 
                    styleClass="school-job-delete"
                />
            </div>

        </div>
    )
}

export default SchoolForm
