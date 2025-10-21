import React from 'react'
import Introduction from '../components/Introduction'
import Projects from '../components/Projects'
import Skills from '../components/Skills'
import Qualification from '../components/Qualification'
import Photos from '../components/Photos'

const Home = () => {
  return (
    <div>
      
      <Introduction/>
      <Projects/>
      <Qualification/>
      <Skills/>
      <Photos/>

    </div>
  )
}

export default Home