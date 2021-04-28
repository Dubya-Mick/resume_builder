import React from 'react'

function TextArea(props) {
    const {
        onChange,
        name,
        placeholder,
        value
    } = props;

    return (
        <div>
            <textarea 
            onChange={onChange}
            name={name}
            placeholder={placeholder}
            value={value}
            />
        </div>
    )
}

export default TextArea
