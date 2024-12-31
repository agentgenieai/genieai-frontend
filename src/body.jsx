import React,{useEffect} from 'react'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'
import UseCase from './swiper'
import Wlform from "./betareg.jsx"
import Vision from "./vision.jsx"
const Body = () => {

  const animateText=()=>{
    const h1Text=document.querySelector('.h1').textContent
    const splitText=h1Text.split("")
    let clutter=""
    splitText.forEach((letter)=>{
      clutter+=`<span>${letter}</span>`
    })
    document.querySelector('.h1').innerHTML=clutter
  }
  useGSAP(()=>{
    animateText()
    gsap.from('.h1 span', {
      duration: 1,
      y:100,
      delay: 1.5,
      opacity: 0,
      stagger: 0.1,
    });

    gsap.from('.cta-div', {
      duration: 1,
      y:100,
      delay: 3,
      opacity: 0,
    })
    gsap.from((".FUWV"),{
      duration: 1,
      y:100,
      delay: 4,
      opacity: 0,
    })
  })
  

  const Features = () => (
    <section id="features" className="features">
      <h3>Features That Amaze</h3>
      <div className="feature-list" >
        <div className="feature-item">
          <i className="icon-personalized"></i>
          <h4>Personalized Advice</h4>
          <p>It learns and adapts to  yours habits, preferences, and routines over time.Unique Ai Agent for each person.</p>
        </div>
        <div className="feature-item">
          <i className="icon-24-7"></i>
          <h4>24/7 Availability</h4>
          <p>Always there when you need a friend or support.</p>
        </div>
        <div className="feature-item">
          <i className="icon-goals"></i>
          <h4>Goal Tracking</h4>
          <p>Helps you set, track, and achieve your goals effortlessly.</p>
        </div>
      </div>
    </section>
  );

  const handleScrollTo = () => {
    const element = document.getElementById("getWl");
    if (element) {
      gsap.to(window, {
        scrollTo: { y: element, autoKill: false },
        duration: 1,
        ease: "power2.inOut"
      });
  }
  }
  
  return (
    <div className='body'>
      <div className='hero_text'>
        <h1 className="h1">Your AI , Your BestFriend</h1>
      </div>
      <div className="cta-div">
        <p>Your AI best friend, always ready to support and inspire you.</p>
      </div>
      <div className="cta-div">
        <a className="button get-wl-button" onClick={handleScrollTo}> Get Wl Now</a>
      </div>
      <div className='FUWV'>
        <Features />
        <UseCase />
        <Wlform />
        <Vision />
      </div>
    </div>
  )
}

export default Body;