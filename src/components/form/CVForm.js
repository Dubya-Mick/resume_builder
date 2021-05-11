import React from 'react';
import EducationForm from './EducationForm';
import HeaderForm from './HeaderForm';
import HobbiesForm from './HobbiesForm';
import HonorsForm from './HonorsForm';
import WorkForm from './WorkForm';
import './cvform.css';

function CVForm(props) {
  const {
    handlePersonalChange,
    handleSchoolChange,
    handleAddSchool,
    handleDeleteSchool,
    handleSchoolDetailChange,
    handleAddSchoolDetail,
    handleDeleteSchoolDetail,
    handleWorkChange,
    handleAddJob,
    handleDeleteJob,
    handleHonorsChange,
    handleAddHonor,
    handleDeleteHonor,
    handleHobbiesChange,
    handleAddHobby,
    handleDeleteHobby,
    handleResponsibilityChange,
    handleAddResponsibility,
    handleDeleteResponsibility,
    personal,
    education,
    work,
    honors,
    hobbies,
  } = props;
  return (
    <div className="cv-form">
      <section>
        <h2>Personal Info</h2>
        <HeaderForm
          handlePersonalChange={handlePersonalChange}
          personal={personal}
        />
      </section>
      <section className="section">
        <h1>Education</h1>
        <EducationForm
          education={education}
          handleSchoolChange={handleSchoolChange}
          handleAddSchool={handleAddSchool}
          handleDeleteSchool={handleDeleteSchool}
          handleSchoolDetailChange={handleSchoolDetailChange}
          handleAddSchoolDetail={handleAddSchoolDetail}
          handleDeleteSchoolDetail={handleDeleteSchoolDetail}
        />
      </section>
      <section className="section">
        <h1>Work</h1>
        <WorkForm
          work={work}
          handleWorkChange={handleWorkChange}
          handleAddJob={handleAddJob}
          handleDeleteJob={handleDeleteJob}
          handleResponsibilityChange={handleResponsibilityChange}
          handleAddResponsibility={handleAddResponsibility}
          handleDeleteResponsibility={handleDeleteResponsibility}
        />
      </section>
      <section className="section">
        <h1>Honors</h1>
        <HonorsForm
          honors={honors}
          handleHonorsChange={handleHonorsChange}
          handleAddHonor={handleAddHonor}
          handleDeleteHonor={handleDeleteHonor}
        />
      </section>
      <section className="section">
        <h1>Hobbies</h1>
        <HobbiesForm
          hobbies={hobbies}
          handleHobbiesChange={handleHobbiesChange}
          handleAddHobby={handleAddHobby}
          handleDeleteHobby={handleDeleteHobby}
        />
      </section>
    </div>
  );
}

export default CVForm;
