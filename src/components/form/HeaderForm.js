import React from 'react'
import Input from '../helpers/Input';

function HeaderForm(props) {
    const {handlePersonalChange, personal} = props;
    return (
        <div>
            <Input 
                onChange={(e) => handlePersonalChange(e)}
                name='name'
                placeholder='Name'
                value={personal.name}
            />
            <Input 
                onChange = {(e) => handlePersonalChange(e)}
                name='title'
                placeholder='Current Role or Title'
                value={personal.title}
            />
            <Input 
                onChange = {(e) => handlePersonalChange(e)}
                name='email'
                placeholder='Email'
                value={personal.email}
            />
            <Input 
                onChange = {(e) => handlePersonalChange(e)}
                name='phone'
                placeholder='Phone Number'
                value={personal.phone}
            />
        </div>
    )
}

export default HeaderForm
