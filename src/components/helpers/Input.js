import React from 'react'

function Input(props) {
    const {onChange, name, placeholder, value} = props;
    return (
        <div>
            <input 
                onChange={onChange}
                name={name}
                placeholder={placeholder}
                value={value}
            />
        </div>
    )
}

export default Input
