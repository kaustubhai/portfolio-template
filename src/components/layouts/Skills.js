import React from 'react'

const Skills = ({ label, svg, faClass }) => {
    return (
        <div data-aos="fade-up" className="skill__square col-3 col-sm-2 my-3 mx-auto" style={{display: 'inline', textAlign: 'center'}}>
            {svg ?  <svg  aria-hidden="true" focusable="false" data-icon={label} role="i" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512"><path fill="currentcolor" d={svg} /></svg> : <i className={`${faClass} mx-auto my-auto`}></i>}
            <h6 className="mt-2">{label}</h6>
        </div>
    )
}

export default Skills
