import React from 'react'
import img1 from '../images/image13.jpg';
import Content from './Content';

function About() {
    return (
        <div className="About-page">
        <div className="color-container">
             <img className="image" src = {img1} alt=""></img>
              <h1 className="text">ABOUT US</h1>
             <h1 className="text-1">ORGANIZE YOUR TO-DO</h1>
             <h1 className="sub">Create clear, multi-functional to-do lists to easily manage your ideas and work  </h1> 
             <h1 className="sub-1">from anywhere so you never forget anything again.</h1>
        </div>
        <div className="middle">
            <h1 className="head">Know all about To-Do :</h1>
            <hr class="about-line"></hr>
        </div>
        <Content />
        </div>
        )
    }

export default About
