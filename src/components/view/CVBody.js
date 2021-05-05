import React from 'react'
import Education from './Education';
import Hobbies from './Hobbies';
import Honors from './Honors';
import Work from './Work';
import CVHeader from './CVHeader'
import './cvbody.css';



function CVBody(props) {

    const {personalInfo, education, work, honors, hobbies} = props.CVInfo;

    return (
        <div className="cv-body">
            <CVHeader personalInfo={personalInfo}/>
            <div className="cv-sections">
                <section>
                    <Education education={education}/>
                </section>
                <section>
                    <Work work={work}/>
                </section>
                <section>
                    <Honors honors={honors}/>
                </section>
                <section>
                    <Hobbies hobbies={hobbies}/>
                </section>
            </div>
        </div>
    )
}

export default CVBody
