import React from 'react'
// styles
import "./styles/App.scss";
// eslint-disable-next-line
import "swiper/css/bundle";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'antd/dist/antd.min.css' //ANTD

// Pages
import { About, Header, Footer, Testimonial, Work, Skills } from "./container"
import { Navbar } from "./components"


const App = () => {
  return (
    <div className='main-app-container'>
      <Navbar />
      <Header />
      <About />
      <Work />
      <Skills />
      {/* <Testimonial /> */}
      <Footer />
    </div>
  )
}

export default App