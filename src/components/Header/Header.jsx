import React from 'react'
import '../Header/Header.css'

export default function Header() {
  return (
    <div className='container-header'>
        <div className='header-text'>
            <div className='header-text-box01'>
                <h1>Hello, I am</h1>
                <span>Ton Warathep</span>
                <p>Front end Designer | Developer</p>
            </div>
            <button>Print. Resume</button>
        </div>
    </div>
  )
}
