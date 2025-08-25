import arrowIcon from "../assets/icons/arrow.svg"
import { GraduationCap, Youtube, Palette, Binary } from 'lucide-react';

const Qualification = () => {
  return (
    <section className='section' id="qualification">
        
         <div className='section-title'>
                <h3>The Story So Far</h3>
                <img src={arrowIcon} alt="" />
                </div>

    <div className='timeline-section'>

<div class="timeline-data">
   <div></div>
   <div><span class="timeline-circle"></span><span class="timeline-line"></span></div>
   <div>
    <h4 className="role"><Binary/>Software Developer</h4>
    <h3 className="company">Pioneer E Solutions</h3>
    <p className="location">BISAG-N, Gandhinagar, Gujarat</p>
    <p className="duration">Feb 2025 - Present</p>
   </div>
</div>

   <div class="timeline-data">
      <div className="text-end"> 
        <h4 className="role"><Palette/>Front End Developer</h4>
    <h3 className="company">Ethos HR Management & Projects Limiteds</h3>
    <p className="location">BISAG-N, Gandhinagar, Gujarat</p>
    <p className="duration">March 2023 - Jan 2025</p>
      </div>
      <div><span class="timeline-circle"></span><span class="timeline-line"></span></div>
   </div>

<div class="timeline-data">
   <div></div>
   <div><span class="timeline-circle"></span><span class="timeline-line"></span></div>
   <div>
    <h4 className="role"><Youtube/>Freelancer & Content Creator</h4>
    <h3 className="company">YouTube Channel & Freelancing</h3>
    <p className="location">Remote Work</p>
    <p className="duration">2021-2023</p>
   </div>
</div>

<div class="timeline-data">
   <div className="text-end">
    <h4 className="role"><GraduationCap/>Graduation</h4>
    <h3 className="company">Information Technology</h3>
    <p className="location">sankalchand patel university</p>
    <p className="duration">2017-2021</p>
   </div>
   <div><span class="timeline-circle"></span></div>
</div>

    </div>

    </section>
  )
}

export default Qualification