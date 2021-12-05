import React from 'react';
import './LandingPage.css'
import *as BsIcons from "react-icons/bs";
import *as FaIcons from "react-icons/fa";

// Gsap animation
import {gsap, Power4, Back} from "gsap";
import ScrollTrigger from 'gsap/ScrollTrigger'



//import .png image, use as an object later
import featuredProj from '../../Images/featured-project.png';
import portImg from '../../Images/Portfolio-Image.png';
import ffImg from '../../Images/friendface.png';
import waImg from '../../Images/WeatherApp.png';

// Import svg files as a component
import {ReactComponent as Scroll} from '../../Icons/Scroll.svg';
// import {ReactComponent as Hero} from '../../Icons/Hero image.svg';
import {ReactComponent as Mouse} from '../../Icons/Mouse.svg';
import {ReactComponent as ScreenSvg} from '../../Icons/Screen.svg';
import {ReactComponent as DatabaseSvg} from '../../Icons/Database.svg';

//Animation
gsap.registerPlugin(ScrollTrigger);
let tl = gsap.timeline();

tl.from('.content', {
    y: '-30%',
    opacity: 0,
    duration: 3,
    ease: Power4.easeOut
})
tl.from('.stagger1', {
    opacity: 0,
    y: -50,
    stagger: .2,
    ease: Power4.easeOut,
    duration: 2
}, "-=1.5") // this is an offset in seconds used to animate faster


tl.from('.hero-design', {
    opacity: 0, y: 50, ease: Power4.easeOut, duration: .5
},"-=2")

gsap.from(".square-anim", {
    stagger: .5,
    scale: 0.1,
    duration: 1,
    ease: Back.easeInOut.config(1.7)
})

gsap.from(".transition2", {
    scrollTrigger: {
        trigger: '.transition2',
        start: "top bottom"
    },
    y: 50,
    opacity: 0,
    duration: 1.2,
    stagger: .3
})

gsap.from(".transition3", {
    scrollTrigger: {
        trigger: '.transition3',
        start: "top center"
    },
    y: 50,
    opacity: 0,
    duration: 1.3,
    stagger: .3
})


function LandingPage() {
    return (
        <body>
        <div className = "nav-container">
            <header>
                <a href="#" className="logo">Tom Fowler</a>

                <nav>
                    <ul>
                        <li><a href = "#">My Work</a></li>
                        <li><a href = "#">My Skills</a></li> 
                        <li><a href = "#">Hire Me</a></li>
                    </ul>
                </nav>
            </header>
            <div className="social-header">
                <ul>
                    <li>
                        <a className="navbar__icon--twitter" href = "https://twitter.com/TomFowl3r/"><BsIcons.BsTwitter /></a>
                    </li>
                    <li>
                        <a className="navbar__icon--github" href = "https://github.com/Fowl3r/"><FaIcons.FaGithubAlt /></a>
                    </li>
                    <li>
                        <a className="navbar__icon--linkedin" href = "https://www.linkedin.com/in/thomas-fowler1/"><BsIcons.BsLinkedin /></a>
                    </li>
                </ul>
            </div>
        </div>
        <div className="hero">
            <div className="content">
                <h1 className = "stagger1">Delectably Designed Web Experiences </h1>
                <div className="meet stagger1">
                    <span className = "down"><FaIcons.FaArrowAltCircleDown /> </span>
                    <p>Meet Tom Fowler</p>
                </div>
                <Scroll className = "stagger1"/>

            </div>
            <svg className = "hero-design" width="738" height="737" viewBox="0 0 738 737">
                <g id="Hero_image" data-name="Hero image" transform="translate(-822 -228)">
                <rect className = "square-anim"  data-name="Rectangle 4" width="185" height="185" rx="23" transform="translate(1190 228)" fill="#9f1cc6"/>
                <rect className = "square-anim" data-name="Rectangle 8" width="185" height="185" rx="23" transform="translate(1190 598)" fill="#9f1cc6"/>
                <rect className = "square-anim" data-name="Rectangle 6" width="185" height="185" rx="23" transform="translate(1375 413)" fill="#9f1cc6" opacity="0.4"/>
                <rect className = "square-anim" data-name="Rectangle 5" width="185" height="185" rx="23" transform="translate(1007 413)" fill="#fff"/>
                <rect className = "square-anim" data-name="Rectangle 9" width="185" height="185" rx="23" transform="translate(1007 780)" fill="#fff"/>
                <rect className = "square-anim" data-name="Rectangle 7" width="185" height="185" rx="23" transform="translate(822 595)" fill="#fff" opacity="0.4"/>
                <circle className = "square-anim" data-name="Ellipse 2" cx="92.5" cy="92.5" r="92.5" transform="translate(1192 413)" fill="#fec20d"/>
                <circle className = "square-anim" data-name="Ellipse 3" cx="89" cy="89" r="89" transform="translate(1012 600)" fill="#0ab8f6"/>
                </g>
            </svg>

        </div>

        <section className = "featured">
            <div className="left">
                <div className="inner transition2">
                    <p className="subtitle">Featured Project</p>
                    <a href = "#" className = "featured-title">Events Application with User Authentication</a>

                    <p className="featured-desc">A full stack application I created allowing for multiple users to sign up and create and edit events, aswell as booking events created by other users.</p>
                </div>
            </div>
            <img className = "right transition2" id = "featuredProj" src = {featuredProj} alt = "Featured Events Project" />
        </section>

        <section className = "skills">
            <div className="skills-container">
                <ul>
                    <li className = "transition2">
                        <div className="icon-container one">
                           <a className = "mouse"> <Mouse /> </a>
                        </div>
                        <p className = "skill-title">UI UX Design</p>
                        <p className="featured-desc">Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit voluptatum rem hic tempora quos deserunt eveniet, error laboriosam maiores molestias.</p>
                    </li>
                    <li className = "transition2">
                        <div className="icon-container two">
                            <ScreenSvg />
                        </div>
                        <p className = "skill-title">Front End Development</p>
                        <p className="featured-desc">Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit voluptatum rem hic tempora quos deserunt eveniet, error laboriosam maiores molestias.</p>
                    </li>
                    <li className = "transition2">
                        <div className="icon-container three">
                            <DatabaseSvg />
                        </div>
                        <p className = "skill-title">BackEnd Development</p>
                        <p className="featured-desc">Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit voluptatum rem hic tempora quos deserunt eveniet, error laboriosam maiores molestias.</p>
                    </li>
                </ul>
            </div>
        </section>

        <section className = "portfolio">
            <div className="portfolio-container transition3">
                <div className="portfolio-left">
                    <div className="inner">
                        <p className="subtitle"></p>

                        <p className="featured-title">Featured Design</p>
                        <p className="featured-desc">Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda, aliquid. Repellat eaque ipsam eius molestiae ea ut possimus explicabo molestias?</p>

                    </div>
                </div>
                <a href = "#"><img src = {portImg} className = "portfolio-image1" alt = "Portfolio version 1" /> </a>
            </div>
            <div className="portfolio-container transition3 mid-portfolio">
            <a href = "#"><img src = {ffImg} className = "portfolio-image2" alt = "Friend Face Social Media Website" /> </a>
                <div className="portfolio-right">
                    <div className="inner">
                        <p className="subtitle"></p>

                        <p className="featured-title">Featured Design</p>
                        <p className="featured-desc">Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda, aliquid. Repellat eaque ipsam eius molestiae ea ut possimus explicabo molestias?</p>

                    </div>
                </div>
            </div>
            <div className="portfolio-container transition3">
                <div className="portfolio-left">
                    <div className="inner">
                        <p className="subtitle"></p>

                        <p className="featured-title">Featured Design</p>
                        <p className="featured-desc">Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda, aliquid. Repellat eaque ipsam eius molestiae ea ut possimus explicabo molestias?</p>

                    </div>
                </div>
                <a href = "#" ><img src = {waImg} className = "portfolio-image3" alt = "Weather App" /> </a>
            </div>

        </section>        

    </body>

    )
}

export default LandingPage
