import React, { useEffect } from 'react'
import Particles from './components/layouts/Particles'
import Header from './components/pages/Header'
import About from './components/pages/About'
import Works from './components/pages/Works'
import Contact from './components/pages/Contact'
import AOS from 'aos';
import 'aos/dist/aos.css';
import { animation } from './profile'


function App() {

  useEffect(() => {
      AOS.init({
        duration: animation.duration,
        once: animation.once,
        disable: !animation.animate
      })
// eslint-disable-next-line
  }, [])

  return (
    <div className="App">
      <Header />
      <Particles />
      <About />
      <Works />
      <Contact />
    </div>
  );
}

export default App;
