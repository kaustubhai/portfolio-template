import React from 'react'
import Skills from '../layouts/Skills'

const About = () => {
    return (
        <div className="effect2">
            <div data-aos="zoom-in-up" data-aos-once="true" className="row">
            <div id="not-dark" className="col-12 d-none d-md-block offset-md-1 col-md-4 Photo"></div>
            <div className="col-12 offset-md-1 col-md-6 about">
                <div className="About-title-box">
                <h1 id="About" className="red-line">About me</h1>
                </div>
                <p className="lead about-text">
                    Software Engineer who loves to transform ideas into reality using code. I am passionate about using Javascript and Animation Libraries to create awesome user experiences.
                    With over two years of experience developing web applications using the latest front-end and UI/UX development Technologies.
                    Motivated designer and developer with experience creating custom websites with ReactJs, JavaScript, HTML5, and CSS3. Strong collaboration skills and proven history of application development. Wordpress and MySQL.    
                </p>
            </div>
            </div>
            <div className="row" id="Skills"> 
                <div className="col-12 skills">
                    <Skills label="HTML5" per="85"/>
                    <Skills label="CSS3" per="80"/>
                    <Skills label="Javascript" per="75"/>
                    <Skills label="React" per="80"/>
                    <Skills label="UI/UX" per="85"/>
                    <Skills label="Wordpress" per="75"/>
                    <Skills label="PHP" per="75"/>
                    <Skills label="MySQL" per="70"/>
                </div> 
            </div>
        </div>
    )
}

export default About
