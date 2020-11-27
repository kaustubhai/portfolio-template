import React from 'react';
import HeaderButton from '../layouts/HeaderButton'
const Header = ({ name }) => {

    const scrollTo = () => {
        window.scrollTo({
            top: 0,
            left: 0,
            behavior: "smooth"
        })
    }

    const toggleDarkMode = () =>  {
        document.documentElement.classList.toggle('dark-mode')
        document.getElementById('not-dark').classList.toggle('inverse-dark')
        var x = document.getElementsByClassName('img-pro')
        for(let i = 0; i < x.length; i += 1) {
          x.item(i).classList.toggle("inverse-dark");
        }
        
        if (document.documentElement.classList.contains('dark-mode'))
          localStorage.setItem('mode', 'Dark')
        else
          localStorage.setItem('mode', 'Light')
        }

    return (
        <>
            <div className="Header">
                <h1>{ `I'm ${name}` }</h1>
            <p className="line-1 anim-typewriter">and this is my portfolio... </p>
            <label className="switch">
                <input id="mode-switch" onClick={toggleDarkMode} type="checkbox"/>
                <span className="slider round"></span>
            </label>
            <HeaderButton/>
            </div>
            <img onClick={scrollTo} alt="Go to top" title="Go to top" className="gtp" src="profile.svg"></img>
        </>
    )
    
}

export default Header;