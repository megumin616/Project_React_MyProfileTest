import React from 'react'
import '../Navbar/Navbar.css'
import profile from '../../assets/images/profile.jpg'

export default function Navbar() {
  return (
    <div className='container-nav'>
        <div>
            <ul>
                <li>Home</li>
                <li>About</li>
                <li>Resume</li>
            </ul>
        </div>
        <div>
        <div id='img-profile'>
            <img src={profile} width={150} height={150}/>
        </div>
        </div>
        <div>
            <ul>
                <li>Portollo</li>
                <li>Blog</li>
                <li>Contact</li>
            </ul>
        </div>
    </div>
  )
}
