import React from 'react'
import { AiFillEye, AiFillGithub } from "react-icons/ai"
// styles
import "./style.scss"
import { images } from '../../constants'

const Work = () => {
  const work = [

    {
      imgUrl: images.crypto,
      title: "Will-Crypto",
      description: "Integrate Rapid API in Project.",
      ProjectLink: "",
      codeLink: "",
    },
    {
      imgUrl: images.agency,
      title: "Countdowm",
      description: "",
      ProjectLink: "https://t-countdown.netlify.app/",
      codeLink: "https://github.com/rajesh860/countdown",
    },
    {
      imgUrl: images.study_center,
      title: "Approach",
      description: "Coming Soon",
      ProjectLink: "",
      codeLink: "https://github.com/rajesh860/Approach"
    },
  ]
  return (
    <div id='work'>
      <h2 className='head-text'> My Creative<span> Portfolio</span> Section</h2>
      <div className="app__work-portfolio">
        {work.map((works, index) => {
          return (
            <div className="app__work-item app__flex" key={index}>
              <div className="app__work-img app__flex">
                <div className="work-image">
                  <img src={works.imgUrl} alt="Work__image.." className='img-fluid' />
                </div>
                <div className="app__work-overlay">
                  <div className="app__work-links app__flex">
                    <a href={works.ProjectLink} target="_blank" rel="noreferrer">
                      <div className="app__work-hover app__flex">
                        <AiFillEye />
                      </div>
                    </a>
                    <a href={works.codeLink} target="_blank" rel="noreferrer">
                      <div className="app__work-hover app__flex">
                        <AiFillGithub />
                      </div>
                    </a>
                  </div>
                </div>
              </div>
              <div className="app__work-content app__flex">
                <h4 className='bold-text text'>{works.title}</h4>
                <p className="p-text text">{works.description}</p>
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default Work




