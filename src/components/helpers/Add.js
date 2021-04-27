import React from 'react'

function Add(props) {
    const {clickHandler} = props

    return (
        <div>
            <button onClick={clickHandler}>Add</button>
        </div>
    )
}

export default Add
