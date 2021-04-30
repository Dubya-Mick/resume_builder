import React from 'react'
import './add.css'

function Add(props) {
    const {clickHandler, content} = props;

    return (
        <div>
            <button onClick={clickHandler} className="add">{content}</button>
        </div>
    )
}

export default Add
