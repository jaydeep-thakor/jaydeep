import React from 'react'
import Introduction from '../components/introduction'
import Projects from '../components/Projects'
import Skills from '../components/Skills'
import Qualification from '../components/Qualification'

const Home = () => {
  return (
    <div>
      
      <Introduction/>
      <Projects/>
      <Qualification/>
      <Skills/>

    </div>
  )
}

export default Home