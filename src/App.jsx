import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div className='heading'>
        {/* <img id='profile' src='IMG_0783.JPG'></img> */}
        <h1 id='main'>~AMITI ANEESH~</h1>
        <img id='hello' src='old-camera-notebook-laptop-with-blue-pencil-cup-cappuccino-white-background.jpg'></img>
        <div className='info'>
          <h2>Hi Everyone!! I'm Aneesh</h2>
          <p>I'm a passionate <span style={{color:'maroon'}}>Full Stack Developer</span> with problem solving skills to tackle the real world problems and make the company profitable and valuable. I also have soft skills like communication , presentation along with main skill of leading a team into success.</p>
          <div className='tech'>
            <h1> Technical Skills </h1>
            <div className='skills'>
              <img src='icons8-python-50.png'></img>
              <img src='icons8-javascript-50.png'></img>
              <img src='icons8-html-50.png'></img>
              <img src='icons8-react-100.png'></img>
              <img src='icons8-css-50.png'></img>
            </div>
          </div>
          <div className='contact'>
              <img src='icons8-github-50.png'></img>
              <img src='icons8-linkedin-48.png'></img>
              <img src='icons8-email-64.png'></img>
              <img src='icons8-leetcode-24.png'></img>
          </div>
          <h3 style={{color:'brown'}}>~ For more information please proceed to the bottom ~</h3>
        </div>
        <div className='foot'>
            <h1>Projects</h1>
            <h1>About me</h1>
            <h1>Interests</h1>
            <h1>Home</h1>
          </div>
      </div>
    </>
  )
}

export default App
