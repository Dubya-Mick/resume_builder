import React from 'react';
import Add from '../helpers/Add';
import Delete from '../helpers/Delete';
import TextArea from '../helpers/TextArea';
import './details.css';

function SchoolDetailsForm(props) {
  const {
    handleSchoolDetailChange,
    handleAddSchoolDetail,
    handleDeleteSchoolDetail,
    schoolDetails,
    schoolID,
  } = props;

  const detailsList = schoolDetails.map((detail) => (
    <div key={detail.id} className="detail-and-delete">
      <TextArea
        onChange={(e) => handleSchoolDetailChange(e, schoolID, detail.id)}
        name="details"
        placeholder="Detail"
        value={detail.text}
      />
      <Delete
        styleClass="detail-delete"
        clickHandler={() => handleDeleteSchoolDetail(schoolID, detail.id)}
      />
    </div>
  ));

  return (
    <div>
      <div className="detail-wrapper">
        {detailsList}
      </div>
      <Add content="Add Detail" clickHandler={() => handleAddSchoolDetail(schoolID)} />
    </div>
  );
}

export default SchoolDetailsForm;
