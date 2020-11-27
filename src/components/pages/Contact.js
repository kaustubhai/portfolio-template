import React from 'react'

const Contact = () => {
    
    return (
        <div className="parallax">
                <div data-aos="zoom-in-up" data-aos-once="true" className="git-form">
                    <center>
                <div className="git-head-div">
                    <h1 id="Contact" className="git-head">Get in touch</h1>
                </div>
                </center>
                <div className="container">
            <div className="git-cont row">
                <div className="col-12 col-sm-6 half">
                    <form action="https://formspree.io/mwkraqap" method="POST">
                        <input type="text" id="fname" name="firstname" placeholder="Your name" required></input>
                        <input type="mail" id="mailid" name="Email" placeholder="Email Address" required></input>
                        <input type="text" id="sub" name="Subject" placeholder="Subject" required></input>
                        <textarea id="msg" name="message" placeholder="Message" required></textarea>
                        <button type="submit"><label id="not-dark">Send Message</label></button>
                    </form>
                
                </div>
                <div className="col-12 col-sm-6 half">
                    <p className="lead">Whether you want to get in touch, talk about a project collaboration, or just say hi, I'd love to hear from you.
                        Simply fill the from and send me an email.
                    </p>
                <center>
                <div className="inline-block">
                <a title="Visit Github profile"  rel="noopener noreferrer" target="_blank" href="https://github.com/kaustubhai" ><i className="fab fa-github"></i></a>
                <a title="Visit Linkedin profile" rel="noopener noreferrer" target="_blank"  href="https://linkedin.com/kaustubhai"><i className="fab fa-linkedin"></i></a>
                <a title="Visit Facebok profile" rel="noopener noreferrer" target="_blank"  href="https://facebook.com/kaustubhai"><i className="fab fa-facebook"></i></a>
                <a title="Visit Instagram profile" rel="noopener noreferrer" target="_blank"  href="https://instagram.com/kaustubhai"><i className="fab fa-instagram"></i></a><br></br>
                <a title="Download Resume" href="docs/Kaustubh.pdf" download><i className="fas fa-download"></i></a>
                </div>
                </center>
                </div>
            </div>
            </div>
        </div>
        <p id="not-dark" className="lead Copy">2020 © Copyright <strong>Kaustubh Mishra</strong>. All Rights Reserved</p>
        </div>
    )
    
}

export default Contact
