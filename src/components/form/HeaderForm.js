import React from 'react';
import Input from '../helpers/Input';
import './cvform.css';

function HeaderForm(props) {
  const { handlePersonalChange, personal } = props;
  return (
    <div className="input-chunk">
      <Input
        onChange={(e) => handlePersonalChange(e)}
        name="name"
        placeholder="Name"
        value={personal.name}
      />
      <Input
        onChange={(e) => handlePersonalChange(e)}
        name="addressOne"
        placeholder="Street"
        value={personal.addressOne}
      />
      <Input
        onChange={(e) => handlePersonalChange(e)}
        name="addressTwo"
        placeholder="Country/Region/City"
        value={personal.addressTwo}
      />
      <Input
        onChange={(e) => handlePersonalChange(e)}
        name="email"
        placeholder="Email"
        value={personal.email}
      />
      <Input
        onChange={(e) => handlePersonalChange(e)}
        name="phone"
        placeholder="Phone Number"
        value={personal.phone}
      />
    </div>
  );
}

export default HeaderForm;
