import React from 'react'

function OrderCheckBox(props) {
    const { checked, handleCheckBoxChange } = props;
    return (
        <input 
            type="checkbox"
            checked={checked}
            onChange={(e) => handleCheckBoxChange(e)}
        />
    )
}

export default OrderCheckBox
