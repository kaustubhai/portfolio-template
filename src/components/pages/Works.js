import React from 'react'
import Project from '../layouts/Project'

const Works = () => {
    return (
        <>
            <div data-aos="zoom-in-up" data-aos-once="true" className="third">
                <center>
                    <div className="pp-head-line">
                        <h1 id="Projects" className="red-line pp-head">Past Projects</h1>
                    </div>
                </center>
                <div className="row">
                <Project url="https://news-de-voice.web.app/" name="News-De-Voice" skills={["React, Firebase, AlanAI"]}/>
                <Project url="https://messenger-696.web.app/" name="Messenger" skills={["React, Firebase"]}/>
                <Project url="https://juit.acm.org" name="ACM-JUIT" skills={["HTML, CSS, JS, Jquery"]}/>
                <Project url="https://parakram.jyc.co.in" name="Parakram" skills={["HTML, CSS, JS"]}/>
                <Project url="https://atlancey.com" name="Atlancey" skills={["HTML, CSS, JS"]}/>
                <Project url="https://posters696.juit.hosting.acm.org" name="Posters696" skills={["WooCommerce, PHP, WP-Bakery"]}/>
                </div>
            </div>

            <div className="third">
                <center>
                    <div className="pp-head-line">
                        <h1 id="Projects" className="red-line pp-head">Miscellaneous</h1>
                    </div>
                </center>
                <div className="row">
                <Project url="https://dribbble.com/kaustubhai" name="Dribbble" />
                <Project url="https://behance.net/kaustubhai" name="Behance" />
                <Project url="https://instagram.com/posters696" name="Instagram" />
                </div>
            </div>
        </>
    )
}

export default Works
