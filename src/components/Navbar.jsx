import { Play, Pause, Disc3 } from "lucide-react"
import { useState, useRef, useEffect } from "react"
import { songs } from "../assets/assets"

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [isOpenMusic, setIsOpenMusic] = useState(false)
  const [isPlaying, setIsPlaying] = useState(false)
  const [currentSong, setCurrentSong] = useState(null)

  const audioRef = useRef(new Audio())

  // Play/pause or switch songs
  const handleControlClick = (song) => {
    if (currentSong === song) {
      if (isPlaying) {
        audioRef.current.pause()
        setIsPlaying(false)
      } else {
        audioRef.current.play()
        setIsPlaying(true)
      }
    } else {
      audioRef.current.src = song
      audioRef.current.play()
      setCurrentSong(song)
      setIsPlaying(true)
    }
  }

  // Close dropdowns when clicking outside
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (!e.target.closest(".navbar")) {
        setIsOpen(false)
        setIsOpenMusic(false)
      }
    }
    document.addEventListener("click", handleClickOutside)
    return () => document.removeEventListener("click", handleClickOutside)
  }, [])

  // Stop rotation and reset when song ends
  useEffect(() => {
    const audio = audioRef.current
    const handleEnded = () => setIsPlaying(false)
    audio.addEventListener("ended", handleEnded)
    return () => audio.removeEventListener("ended", handleEnded)
  }, [])

  return (
    <div>
      <div className="navbar">
        <a id="home" className="nav-link active">Home</a>
        <a id="work" className="nav-link">Work</a>
        <a id="qualification" className="nav-link">Qualification</a>
        <a id="skill" className="nav-link">Skill</a>
        <a id="about" className="nav-link">About</a>

        <a
          id="contact"
          className="nav-link"
          onClick={(e) => {
            e.stopPropagation()
            setIsOpen(!isOpen)
            setIsOpenMusic(false)
          }}
        >
          Contact
        </a>

        {isOpen && (
          <div
            className="nav-dropdown contact"
            onClick={(e) => e.stopPropagation()} // ✅ Prevent closing when clicking inside dropdown
          >
            <a target="_blank" href="">imjaydeepcreation@gmail.com</a>
            <a target="_blank" href="https://www.instagram.com/jaydeep7__">Instagram</a>
            <a target="_blank" href="https://in.linkedin.com/in/jaydeep-thakor-804a3b283">LinkedIn</a>
            <a target="_blank" href="https://www.youtube.com/@jaydeepcreation">YouTube</a>
            <a target="_blank" href="https://github.com/jaydeep-thakor">Github</a>
          </div>
        )}

        <div
          className="play-icon"
          onClick={(e) => {
            e.stopPropagation()
            setIsOpenMusic(!isOpenMusic)
            setIsOpen(false)
          }}
        >
          <Disc3 className={`disc-icon ${isPlaying ? "rotate" : ""}`} />
        </div>

        {isOpenMusic && (
          <div
            className="nav-dropdown"
            onClick={(e) => e.stopPropagation()} // ✅ Prevent closing when clicking songs
          >
            {songs.map((i) => (
              <div key={i.id} className="song-list">
                <div className="song">
                  <div
                    onClick={() => handleControlClick(i.src)}
                    className="control-icon"
                  >
                    {currentSong === i.src && isPlaying ? <Pause /> : <Play />}
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
