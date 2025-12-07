import { useState } from 'react'
import '../designs/Home.css';
import Projects from './Projects';
import About from './About';
import Interests from './Interests';
import Footer from './Footer';

function Home() {
  const gitu = () => {
    window.open("https://github.com/amitihere")
  }
  const linku = () => {
    window.open("https://www.linkedin.com/in/amiti-aneesh-93026633a/")
  }
  const emailu = () => {
    alert("amiti.aneesh1@gmail.com")
  }
  const leetu = () => {
    window.open("https://leetcode.com/u/amitiheree/")
  }
  return (
    <>
      <div className='heading' id="home">
        {/* <img id='profile' src='IMG_0783.JPG'></img> */}
        <div className="profile-header">
          <h1 id='main'>~AMITI ANEESH~</h1>
          <img id='hello' src='../assets/old-camera-notebook-laptop-with-blue-pencil-cup-cappuccino-white-background-min (1).jpg'></img>
        </div>
        <div className='info'>
          <h2>Hi Everyone!! I'm Aneesh</h2>
          <p>I'm a passionate <span style={{ color: 'maroon' }}>Full Stack Developer</span> with problem solving skills to tackle the real world problems and make the company profitable and valuable. I also have soft skills like communication , presentation along with main skill of leading a team into success.</p>
          <div className='tech'>
            <h1> Technical Skills </h1>
            <div className='skills'>
              <img src='../assets/icons8-python-50.png'></img>
              <img src='../assets/icons8-javascript-50.png'></img>
              <img src='../assets/icons8-html-50.png'></img>
              <img src='../assets/icons8-react-100.png'></img>
              <img src='../assets/icons8-css-50.png'></img>
              <img src='../assets/icons8-mysql-48.png'></img>
              <img src='../assets/icons8-express-js-30.png'></img>
              <img src='../assets/icons8-prisma-orm-48.png'></img>
              <img src='../assets/icons8-mongodb-48.png'></img>
            </div>
          </div>
          <div className='contact'>
            <img onClick={gitu} src='../assets/icons8-github-50.png'></img>
            <img onClick={linku} src='../assets/icons8-linkedin-48.png'></img>
            <img onClick={emailu} src='../assets/icons8-email-64.png'></img>
            <img onClick={leetu} src='../assets/icons8-leetcode-24.png'></img>
          </div>
          <h3 style={{ color: 'brown' }}>~ For more information please proceed to the bottom ~</h3>
        </div>
      </div>

      <Footer />

      <section id="projects">
        <Projects />
      </section>

      <section id="about">
        <About />
      </section>

      <section id="interests">
        <Interests />
      </section>
    </>
  )
}

export default Home;