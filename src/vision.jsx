import React from 'react'
import "./index.css"
import Roadmap from './roadmap.jsx'
import FollowUs from './followus.jsx'
const Vision = () => {
  return <>
    <div className='Vision'>
      <h1 >Our Vision</h1>
      <p>Our mission is to create an AI Agent that simplifies and streamlines your daily life. Picture having a trusted companion to handle and manage your everyday online tasks effortlessly. With our AI wallet, you can transfer assets, set up limit orders for spot trading, and much more—all with simple commands. For example, want to mint an NFT collection from any website? Just provide the contract address and mint time, and your AI Agent will handle the rest for you.</p>
    </div>
    <Roadmap />
    <FollowUs />
  </>
}

export default Vision