import React from 'react'
import profileImg from "../assets/images/profile.webp"

const Introduction = () => {
  return (
    <div>
        
        <div className='intro-section'>
        <img src={profileImg} alt="" />
        <h1>Hi, I'm Jaydeep</h1>
        <p>
          I’m a developer and creator who builds seamless digital experiences. With expertise in React, Node.js, Express, and MongoDB, I craft full-stack applications that are both functional and engaging. My front-end skills in JavaScript, Tailwind CSS, and Bootstrap help me design interfaces that feel clean, intuitive, and responsive.
        </p>
        </div>

    </div>


  )
}

export default Introduction