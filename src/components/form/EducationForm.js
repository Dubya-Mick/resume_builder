import React from 'react';
import Add from '../helpers/Add';
import SchoolForm from './SchoolForm';
import './cvform.css';

function EducationForm(props) {
  const {
    education,
    handleSchoolChange,
    handleAddSchool,
    handleDeleteSchool,
    handleSchoolDetailChange,
    handleAddSchoolDetail,
    handleDeleteSchoolDetail,
  } = props;

  const schoolForms = education.map((school) => (
    <div key={school.id}>
      <SchoolForm
        school={school}
        handleSchoolChange={handleSchoolChange}
        handleDeleteSchool={handleDeleteSchool}
        handleSchoolDetailChange={handleSchoolDetailChange}
        handleAddSchoolDetail={handleAddSchoolDetail}
        handleDeleteSchoolDetail={handleDeleteSchoolDetail}
      />
    </div>
  ));

  return (
    <div>
      <div className="form-chunk">
        {schoolForms}
      </div>
      <Add content="Add School" clickHandler={handleAddSchool} />
    </div>
  );
}

export default EducationForm;
