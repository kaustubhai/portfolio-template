import React from 'react'

const Skills = ({ label, per }) => {
    return (
        <div>
            <div data-aos="zoom-in-up" className="progress-block">
                <h2>{label}</h2>
            <div className="progress">
                <div className="progress-bar bg-danger progress-bar" role="progressbar" aria-valuenow={per} aria-valuemin="0" aria-valuemax="100" style={{width: per+"%"}}></div>
            </div>
            </div>
        </div>
    )
}

export default Skills
