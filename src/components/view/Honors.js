import React from 'react'
import Honor from './Honor';

function Honors(props) {
    const honors = props.honors;

    const honorList = honors.map((honor) => (
        <div key={honor.id}>
            <Honor honor={honor}/>
        </div>
    ))

    return (
        <div>
            <div className="title">Honors</div>
            <hr />
            {honorList}
        </div>
    )
}

export default Honors
