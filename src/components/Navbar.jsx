import {Play, Pause} from "lucide-react"
import { useState, useRef } from "react"
import song from "../assets/audio/song.mp3"
const Navbar = () => {

  const [songState, setSongState] = useState(false)
  const audioRef = useRef(null);

    const toggleSong = () => {
    if (songState) {
      audioRef.current.pause();
    } else {
      audioRef.current.play();
    }
    setSongState(!songState);
  };

  return (
    <div>
        
        <div className='navbar'>
        <a id="home" className="nav-link active">Home</a>
        <a id="work" className="nav-link">Work</a>
        <a id="qualification" className="nav-link">Qualification</a>
        <a id="skill" className="nav-link">Skill</a>
        <a id="about" className="nav-link">About</a>
        <a id="contact" className="nav-link">Contact</a>
        <div onClick={toggleSong} className="play-icon">{songState ? <Pause/> : <Play/>}</div>
              <audio ref={audioRef} loop>
        <source src={song} type="audio/mpeg" />
      </audio>
        </div>

    </div>
  )
}

export default Navbar