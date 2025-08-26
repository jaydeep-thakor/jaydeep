import { Play, Pause, Disc3 } from "lucide-react"
import { useState, useRef } from "react"
import { songs } from "../assets/assets"

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [isOpenMusic, setIsOpenMusic] = useState(false)
  const [isPlaying, setIsPlaying] = useState(false)
  const [currentSong, setCurrentSong] = useState(null)

  const audioRef = useRef(new Audio())

  const handleControlClick = (song) => {
    if (currentSong === song) {
      // Toggle play/pause
      if (isPlaying) {
        audioRef.current.pause()
      } else {
        audioRef.current.play()
      }
      setIsPlaying(!isPlaying)
    } else {
      // Load and play new song
      audioRef.current.src = song
      audioRef.current.play()
      setCurrentSong(song)
      setIsPlaying(true)
    }
  }

  return (
    <div>
      <div className="navbar">
        <a id="home" className="nav-link active">Home</a>
        <a id="work" className="nav-link">Work</a>
        <a id="qualification" className="nav-link">Qualification</a>
        <a id="skill" className="nav-link">Skill</a>
        <a id="about" className="nav-link">About</a>
        <a onClick={() => setIsOpen(!isOpen)} id="contact" className="nav-link">Contact</a>

        {isOpen && (
          <div className="nav-dropdown contact">
            <a target="_blank" href="">imjaydeepcreation@gmail.com</a>
            <a target="_blank" href="https://www.instagram.com/jaydeep7__">Instagram</a>
            <a target="_blank" href="https://in.linkedin.com/in/jaydeep-thakor-804a3b283">LinkedIn</a>
            <a target="_blank" href="https://www.instagram.com/jaydeep7__">Youtube</a>
            <a target="_blank" href="https://github.com/jaydeep-thakor">Github</a>
          </div>
        )}

        <div onClick={() => setIsOpenMusic(!isOpenMusic)} className="play-icon"><Disc3/></div>

        {isOpenMusic && (
          <div className="nav-dropdown">
            {songs.map((i) => (
              <div key={i.id} className="song-list">
                <div className="song">
                  <div onClick={() => handleControlClick(i.src)} className="control-icon">
                    {currentSong === i.src && isPlaying ? <Pause/> : <Play/>}
                  </div>
                  <span>{i.title}</span>
                  <span className="artist-name">{i.singer}</span>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  )
}

export default Navbar
