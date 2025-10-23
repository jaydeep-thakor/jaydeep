import React, { useState } from 'react'
import arrowIcon from "../assets/icons/arrow.svg"

import img1 from "../assets/images/1.jpg"
import img2 from "../assets/images/2.jpg"
import img3 from "../assets/images/3.jpg"
import img4 from "../assets/images/4.jpg"
import img5 from "../assets/images/5.jpg"
import img6 from "../assets/images/6.jpg"
import img7 from "../assets/images/7.jpg"
import img8 from "../assets/images/8.jpg"

const Photos = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  const images = [img1, img2, img3, img4, img4, img4, img4, img4];

  return (
    <section className='section' id="about">
      <div className='section-title'>
        <h3>Life Behind the pixels</h3>
        <img src={arrowIcon} alt="" />
      </div>

      <div className='my-images'>
        <div className='image-one' onClick={() => setSelectedImage(img1)}>
          <img src={img1} alt="" />
        </div>
        <div className='image-two' onClick={() => setSelectedImage(img2)}>
          <img src={img2} alt="" />
        </div>
        <div className='image-three' onClick={() => setSelectedImage(img3)}>
          <img src={img3} alt="" />
        </div>
        <div className='image-four' onClick={() => setSelectedImage(img4)}>
          <img src={img4} alt="" />
        </div>
        <div className='image-five' onClick={() => setSelectedImage(img5)}>
          <img src={img5} alt="" />
        </div>
        <div className='image-six' onClick={() => setSelectedImage(img6)}>
          <img src={img6} alt="" />
        </div>
        <div className='image-seven' onClick={() => setSelectedImage(img7)}>
          <img src={img7} alt="" />
        </div>
        <div className='image-eight' onClick={() => setSelectedImage(img8)}>
          <img src={img8} alt="" />
        </div>
      </div>

      {/* Modal */}
      {selectedImage && (
        <div className='image-modal' onClick={() => setSelectedImage(null)}>
          <div className='modal-content' onClick={(e) => e.stopPropagation()}>
            <button className='modal-close' onClick={() => setSelectedImage(null)}>×</button>
            <img src={selectedImage} alt="" />
          </div>
        </div>
      )}
    </section>
  )
}

export default Photos