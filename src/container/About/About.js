import React, { useEffect } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { motion } from 'framer-motion'
import { images } from "../../constants"
// styles
import "./style.scss"

const About = () => {
  const abouts = [
    {
      imgUrl: images.about01,
      title: "Frontend Development",
      description: "I am a good developer."
    },
    {
      imgUrl: images.about02,
      title: "Web Designer",
      description: "I am a good designer."
    },
    {
      imgUrl: images.about03,
      title: "UI/UX",
      description: "I am a good in UI/UX."
    },
    {
      imgUrl: images.about04,
      title: "Web Animation",
      description: "I am a good in web-animation."
    },

  ]
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    // const tl = gsap.timeline();
    gsap.from(".about-animation-sec .revel-style", 1.5, {
      y: 200,
      ease: "power4.out",
      delay: 0.5,
      skewY: 0,
      stagger: {
        amount: 0.3
      },
      scrollTrigger: {
        trigger: '#about',
        start: 'top center',
        markers: false
      },
    })
  }, [])


  return (
    <div id='about' className='about-section'>
      <div className='about-animation-sec'>
        <h2 className='head-text revel-style'>
          I know that Good Development
        </h2>
        <h2 className='head-text revel-style'>
          <span>means Good Business</span>
        </h2>
      </div>
      <div className="app__profiles">
        {abouts.map((about, index) => {
          return (
            <motion.div
              whileInView={{ opacity: 1 }}
              whileHover={{ scale: 1.1 }}
              transition={{ duration: 0.5, type: "tween" }}
              className="app__profile-item"
              key={about.title + index}
            >
              <img src={about.imgUrl} alt={about.title} />
              <h2 className='bold-text' style={{ marginTop: 20 }}>{about.title}</h2>
              <p className="p-text" style={{ marginTop: 10 }}>{about.description}</p>
            </motion.div>
          )
        })}

      </div>
    </div>
  )
}

export default About