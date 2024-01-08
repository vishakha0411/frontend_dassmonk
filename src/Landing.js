import { logDOM } from '@testing-library/react'
import React from 'react'
import bgimg from './images/bgimg.png';

const Landing = () => {
  return (
    <div className="landing-page">
      <header className="header">
        <div className="overlay">
          <img src={bgimg} alt="Landing Page" />
          <div className="content">
            <h1>DAS Analysis for students and all. </h1>
            <p>Generate insightful reports and other personalized recommendations based on DAS scores to support students mental well being</p>
            <button >I'm a Student</button>
            <button >I'm an Organization</button>
          </div>
        </div>
      </header>
      
    </div>

  )
}

export default Landing
