import React from 'react'
import './textarea.css'

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
            className="text-area"
            onChange={onChange}
            name={name}
            placeholder={placeholder}
            value={value}
            />
        </div>
    )
}

export default TextArea
