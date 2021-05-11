import React from 'react';
import OrderCheckBox from './helpers/OrderCheckBox';

function OrderChoice(props) {
  const {
    eduFirst,
    hobbiesFirst,
    handleEduCheckBoxChange,
    handleHobbyCheckBoxChange,
  } = props;
  return (
    <div className="order-choice">
      <label>
        Education Before Work:
        <OrderCheckBox
          checked={eduFirst}
          handleCheckBoxChange={handleEduCheckBoxChange}
        />
      </label>

      <label>
        Hobbies Before Honors:
        <OrderCheckBox
          checked={hobbiesFirst}
          handleCheckBoxChange={handleHobbyCheckBoxChange}
        />
      </label>
    </div>
  );
}

export default OrderChoice;
