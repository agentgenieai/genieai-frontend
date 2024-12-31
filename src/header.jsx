import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import React from 'react'
import { ScrollToPlugin } from 'gsap/ScrollToPlugin';

gsap.registerPlugin(ScrollToPlugin);
const Header = () => {
  useGSAP(()=>{
    gsap.from('.left', {
      duration: 1,
      scale:0,
      delay: 0.3,
      opacity: 0,
    })

    gsap.from('.right a', {
      duration: 1,
      delay: 0.4,
      opacity: 0,
      stagger: 0.9,
    })
  })

  const handleScrollTo = (id) => {
    const element = document.getElementById(id);
    if (element) {
      gsap.to(window, {
        scrollTo: { y: element, autoKill: false },
        duration: 1,
        ease: "power2.inOut"
      });
    }
  };
  return <>
    <div className='Header'>
      <div >
        <img className='left' src="./headerLogo.png"></img>
      </div>
      <div className='right'>
          <a onClick={() => handleScrollTo('features')}>Features</a>
          <a onClick={() => handleScrollTo('getWl')}>Get WL</a>
          <a onClick={() => handleScrollTo('roadmap')}>Roadmap</a>
      </div>
    </div>
  </>
}

export default Header