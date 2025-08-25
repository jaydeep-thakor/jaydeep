import arrowIcon from "../assets/icons/arrow.svg"
import projectScreenShot1 from "../assets/images/actionverse.png"
import mongodbIcon from "../assets/icons/MongoDB.svg"
import expressIcon from "../assets/icons/Express.svg"
import reactIcon from "../assets/icons/React.svg"
import nodeIcon from "../assets/icons/NodeJs.svg"
import movieIcon from "../assets/icons/cinema.png"
import tailwindIcon from "../assets/icons/Tailwind.svg"

const Projects = () => {
  return (
    <section className='section' id="work">
        
        <div className='section-title'>
        <h3>Things I’ve Built</h3>
        <img src={arrowIcon} alt="" />
        </div>

<div className="project-showcase">
    
  <div className="project-info">
    <h2> <img src={movieIcon} alt="" /> ActionVerse</h2>
    <p>
      ActionVerse is a movie and series booking platform built with the MERN stack. It features a modern UI, smooth navigation, and a real-world ticket booking experience.
    </p>

    <div className="mern-icons">
      <img src={tailwindIcon} alt="Node.js" />
      <img src={mongodbIcon} alt="MongoDB" />
      <img className='express-icon' src={expressIcon} alt="Express" />
      <img src={reactIcon} alt="React" />
      <img src={nodeIcon} alt="Node.js" />
    </div>

<a href="https://actionverse-sand.vercel.app/" target="_blank" className="visit-btn">
Visit Site
</a>

  </div>

  <div className="project-screenshot">
    <div className="screenshot-container">
      <a href="https://actionverse-sand.vercel.app/" target="_blank"> 
      <img src={projectScreenShot1} alt="ActionVerse Screenshot" />
      </a>
    </div>
  </div>
</div>




    </section>
  )
}

export default Projects