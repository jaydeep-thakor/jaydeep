import arrowIcon from "../assets/icons/arrow.svg"

import reactJsIcon from "../assets/icons/React.svg"
import tailwindIcon from "../assets/icons/Tailwind.svg"
import cssIcon from "../assets/icons/CSS3.svg"
import expressIcon from "../assets/icons/Express.svg"
import javascriptIcon from "../assets/icons/JavaScript.svg"
import mongoDbIcon from "../assets/icons/MongoDB.svg"
import nextJsIcon from "../assets/icons/NextJs.svg"
import nodeJsIcon from "../assets/icons/NodeJs.svg"
import typescriptIcon from "../assets/icons/TypeScript.svg"
import sassIcon from "../assets/icons/Sass.svg"
import mongooseJsIcon from "../assets/icons/MongooseJs.svg"
import postgresSqlIcon from "../assets/icons/PostgresSQL.svg"
import bootstrapIcon from "../assets/icons/Bootstrap.svg"
import reduxIcon from "../assets/icons/Redux.svg"


const Skills = () => {
  return (
    <section className='section' id="skills">
        
        <div className='section-title'>
                <h3>Things I’m Good At</h3>
                <img src={arrowIcon} alt="" />
                </div>


                <div className="skills">

  <div className="skill-types">
    <h3>Frontend</h3>
    <div className="tech-stack">

      <a className="tech-icons" href="https://www.w3.org/Style/CSS/" target="_blank" rel="noopener noreferrer">
        <img src={cssIcon} alt="CSS" />
        <span>CSS</span>
      </a>

      {/* <a className="tech-icons" href="https://sass-lang.com/" target="_blank" rel="noopener noreferrer">
        <img src={sassIcon} alt="Sass" />
        <span>Sass</span>
      </a> */}

      <a className="tech-icons" href="https://tailwindcss.com/" target="_blank" rel="noopener noreferrer">
        <img src={tailwindIcon} alt="TailwindCSS" />
        <span>TailwindCSS</span>
      </a>

      <a className="tech-icons" href="https://getbootstrap.com/" target="_blank" rel="noopener noreferrer">
        <img src={bootstrapIcon} alt="Bootstrap" />
        <span>Bootstrap</span>
      </a>

      <a className="tech-icons" href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" target="_blank" rel="noopener noreferrer">
        <img src={javascriptIcon} alt="JavaScript" />
        <span>JavaScript</span>
      </a>

      <a className="tech-icons" href="https://react.dev/" target="_blank" rel="noopener noreferrer">
        <img src={reactJsIcon} alt="React" />
        <span>React</span>
      </a>

      {/* <a className="tech-icons" href="https://redux.js.org/" target="_blank" rel="noopener noreferrer">
        <img src={reduxIcon} alt="Redux" />
        <span>Redux</span>
      </a> */}

    </div>
  </div>

  <div className="skill-types">
    <h3>Backend</h3>
    <div className="tech-stack">

      {/* <a className="tech-icons" href="https://www.typescriptlang.org/" target="_blank" rel="noopener noreferrer">
        <img src={typescriptIcon} alt="TypeScript" />
        <span>TypeScript</span>
      </a> */}

      <a className="tech-icons" href="https://expressjs.com/" target="_blank" rel="noopener noreferrer">
        <img className="express-icon" src={expressIcon} alt="Express" />
        <span>Express</span>
      </a>

      {/* <a className="tech-icons" href="https://nodejs.org/" target="_blank" rel="noopener noreferrer">
        <img src={nodeJsIcon} alt="Node.js" />
        <span>Node.js</span>
      </a> */}

      {/* <a className="tech-icons" href="https://nextjs.org/" target="_blank" rel="noopener noreferrer">
        <img className="next-icon" src={nextJsIcon} alt="Next.js" />
        <span>Next.js</span>
      </a> */}
{/* 
      <a className="tech-icons" href="https://mongoosejs.com/" target="_blank" rel="noopener noreferrer">
        <img src={mongooseJsIcon} alt="Mongoose" />
        <span>Mongoose</span>
      </a> */}

      <a className="tech-icons" href="https://www.mongodb.com/" target="_blank" rel="noopener noreferrer">
        <img src={mongoDbIcon} alt="MongoDB" />
        <span>MongoDB</span>
      </a>

      {/* <a className="tech-icons" href="https://www.postgresql.org/" target="_blank" rel="noopener noreferrer">
        <img src={postgresSqlIcon} alt="PostgreSQL" />
        <span>PostgreSQL</span>
      </a> */}

    </div>
  </div>

</div>


    </section>
  )
}

export default Skills