import React from 'react'
import { Link } from 'react-router-dom'
import '../designs/Home.css'

export default function Footer(){
  return (
    <div>
        <div className='foot'>
            <h1><Link to="/projects">Projects</Link></h1>
            <h1><Link to="/about">About me</Link></h1>
            <h1><Link to="/interests">Interests</Link></h1>
            <h1><Link to="/">Home</Link></h1>
            
        </div>
    </div>
  )
}
