import React, { Component } from 'react';
import Education from './Education';
import Hobbies from './Hobbies';
import Honors from './Honors';
import Work from './Work';
import CVHeader from './CVHeader'
import './cvbody.css';


class CVBody extends Component {
    render() {
        const {personalInfo, education, work, honors, hobbies, eduFirst, hobbiesFirst} = this.props.CVInfo;
        if (eduFirst && hobbiesFirst) {
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
                            <Hobbies hobbies={hobbies}/>
                        </section>
                        <section>
                            <Honors honors={honors}/>
                        </section>
                    </div>
                </div>
            )
        } else if (eduFirst) {
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
        } else if (hobbiesFirst) {
            return (
                <div className="cv-body">
                    <CVHeader personalInfo={personalInfo}/>
                    <div className="cv-sections">
                        <section>
                            <Work work={work}/>
                        </section>
                        <section>
                            <Education education={education}/>
                        </section>
                        <section>
                            <Hobbies hobbies={hobbies}/>
                        </section>
                        <section>
                            <Honors honors={honors}/>
                        </section>
                    </div>
                </div>
            )
        }
        return (
            <div className="cv-body">
                <CVHeader personalInfo={personalInfo}/>
                <div className="cv-sections">
                    <section>
                        <Work work={work}/>
                    </section>
                    <section>
                        <Education education={education}/>
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
}

export default CVBody



