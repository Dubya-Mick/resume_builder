import React from 'react'
import './add.css'

function Add(props) {
    const {clickHandler} = props

    return (
        <div>
            <button onClick={clickHandler} className="add">Add</button>
        </div>
    )
}

export default Add
