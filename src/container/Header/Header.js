import React from 'react'
import { motion } from "framer-motion"
import { images } from '../../constants'

// styles
import "./style.scss"

const Header = () => {

    const scaleVariants = {
        whileInView: {
            scale: [0, 1],
            opacity: [0, 1],
            transition: {
                duration: 1,
                ease: "easeInOut",
            }
        }
    }
    return (
        <div id='home' className='app__header app__flex'>
            <motion.div
                whileInView={{ x: [-100, 0], opacity: [0, 0.5, 1] }}
                transition={{ duration: 0.5 }}
                className="app__header-info"
            >
                <div className='app__header-badge'>
                    <div className='badge-cmp app__flex'>
                        <span>🖐</span>
                        <div style={{ marginLeft: 20 }}>
                            <p className='p-text'>Hello, I am</p>
                            <h1 className='h-text'>Rajesh Rajput</h1>
                        </div>
                    </div>
                    <div className="tag-cmp app__flex">
                        <p className='p-text'>Front-End-Developer</p>
                    </div>
                </div>
            </motion.div>
            <motion.div
                whileInView={{ opacity: [0, 1] }}
                transition={{ duration: 0.5, delayChildren: 0.5 }}
                className="app__header-img"
            >
                <img src={images.profile} alt="Profile_image.." />
                <motion.img whileInView={{ scale: [0, 1] }}
                    transition={{ duration: 1, ease: "easeInOut" }}
                    src={images.circle}
                    className="overlay_circle" />
            </motion.div>
            <motion.div
                variants={scaleVariants}
                whileInView={scaleVariants.whileInView}
                className="app__hedaer-circles"
            >
                {[images.react, images.javascriptCircle, images.sass].map((item, index) => {
                    return (
                        <div className='circle-cmp app_flex' key={`circle-${index}`}>
                            <img src={item} alt="circles" />
                        </div>
                    )
                })}

            </motion.div>

        </div>
    )
}

export default Header