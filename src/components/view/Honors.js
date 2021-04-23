import React from 'react'
import uniqid from 'uniqid'

function Honors(props) {
    const honors = props.honors;
    console.log(honors);

    const honorList = honors.map((honor) => (
        <div key={uniqid()}>{honor.title} ({honor.year}) </div>
    ))

    return (
        <div>
            <h3>Honors</h3>
            {honorList}
        </div>
    )
}

export default Honors
