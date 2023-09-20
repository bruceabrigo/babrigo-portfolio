import React from "react";
import './about-me.scss'
import './skills.scss'
import './projects-page.scss'
import './proj-cards.scss'
import { Link } from "react-router-dom"


import { TypeAnimation } from "react-type-animation";

const Home = () => {


    return  (
        <>
            <section>
                <div className="greeting">
                    <h2 className='greeting-title'>Hi! I'm Bruce.</h2>
                    <div>
                        <TypeAnimation 
                            sequence={[
                                'Software Developer',
                                2000,
                                'Front-End Developer',
                                2000,
                                'Back-End Developer',
                                2000,
                                'Full-Stack Developer',
                                2000,
                            ]}
                            speed={50}
                            repeat={Infinity}
                            />
                    </div>
                </div>
            </section>
            <div className="about-me">
                <h2 className="about-me-title">About Me</h2>
                <p className="about-me-subhead">Let's get to know each other!</p>
            <div className="about-me-content">
                <div className="left">
                    <img className="profile-img" src="/Bruce.jpg" alt="profile"/>
                </div>
                <div className="right">
                    <p className="about-me-intro">
                        My name is Bruce Abrigo, and I'm a software developer!
                    </p>
                    <br/>
                    <p>
                        I'm familiar with various programming languages, frameworks, & libraries with an understanding in Computer Science and Cyber Security.
                        As a software developer I have constructed and consumed numerous API's, as well as developed and deployed various front-end and full-stack projects.
                    </p>
                    <br/>
                    <p>
                        I attended Webster University where I studied Computer Science with an emphasis in Cyber Security. At Webster, I obtained programming skills in C++, and fundamental knowledge in computer networking, math, and operating systems. I was also in a coding bootcamp with General Assembly, where I acquired new software development and programming skills like JavaScript and Python. As well as front and back end frameworks like React and Django.
                    </p>
                    <br/>
                    <p>
                        I also enjoy photography, aviation, sneakers, and street fashion!
                    </p>
                    <Link to='https://www.linkedin.com/in/bruceabrigo/' target="_blank" >
                        <img src="/linked-in.png" className="icon"/>
                    </Link>
                    <Link to='https://github.com/bruceabrigo' target="_blank" >
                        <img src="/github.png" className="icon"/>
                    </Link>
                </div>
            </div>
            </div>

{/* ------------- SKILLS ------------- */}
            <div className="skills">
                <div className="skills-container">
                    <div className="column">
                        <h2 className="skills-title">Frontend Developer</h2>
                            <p>I like the freedom to express creativity in frontend and web development to show your eyes cool ways to browse the web!</p>
                            <p className="summary-title">Languages & frameworks:</p>
                            <p>JavaScript</p>
                            <p>React</p>
                            <p>Liquid</p>
                            <p>HTML</p>
                            <p>CSS</p>
                            <p>SSS</p>
                            {/* IDEs */}
                    </div>
                    <div className="column">
                        <h2 className="skills-title">Software/Backend Developer</h2>
                            <p>I likes the freedom to express creativity in frontend and web development to show your eyes cool ways to browse the web!</p>
                            <p className="summary-title">Languages & frameworks:</p>
                            <p>Python</p>
                            <p>C++</p>
                            <p>SQL</p>
                            <p>MongoDB</p>
                            <p>AWS S3</p>
                    </div>
                    <div className="column">
                        <h2 className="skills-title">Tools and IDEs</h2>
                            <p>I likes the freedom to express creativity in frontend and web development to show your eyes cool ways to browse the web!</p>
                            <p className="summary-title">Where I work:</p>
                            <p>VSCode</p>
                            <p>XCODE</p>
                            <p>Postman</p>
                            <p>Figma</p>
                    </div>
                </div>
            </div>

{/* ------------- PROJECTS ------------- */}
            <div className="projects">
                <h2 className="proj-title">Projects</h2>
                <p className="proj-desc">Take a look at my highlighted projects!</p>
                <div className="container">
                    <div className="card">
                        <div className="face face1">
                            <div className="content">
                            <img src="/NeatFlightTracker.png"/>
                            <h3>Neat Flight Tracker</h3>
                            </div>
                        </div>
                        <div className="face face2">
                            <div className="content">
                                <p>Full-Stack web app that allows for the tracking of flight numbers and the creation of users, and forum posts.</p>
                                <a href="https://neatflighttracker.fly.dev/" target="_blank">Site</a>
                                <a href="https://github.com/bruceabrigo/FlightTracker-FullStack-App" target="_blank">Repo</a>
                            </div>
                        </div>
                    </div>

                    <div className="card">
                        <div className="face face1">
                            <div className="content">
                                <img src="/RatchMe.png"/>
                                <h3>Ratch Me If You Can</h3>
                            </div> 
                        </div>
                        <div className="face face2">
                            <div className="content">
                                <p>Front-End 2D JavaScript Canvas game with a countdown timer where a player must avoid targets and collect points!</p>
                                <a href="https://bruceabrigo.github.io/ratch-me-if-you-can/" target="_blank">Play</a>
                                <a href="https://github.com/bruceabrigo/ratch-me-if-you-can" target="_blank">Repo</a>
                            </div>
                        </div>
                    </div>

                    <div className="card">
                        <div className="face face1">
                            <div className="content">
                                <img src="/BabrigoMedia.png"/>
                                <h3>BAbrigo Media</h3>
                            </div>
                        </div>
                    <div className="face face2">
                        <div className="content">
                                <p>DJango photography website that showcases photography portfolios</p>
                                <a href="https://babrigo-media.onrender.com" target="_blank">Site</a>
                                <a href="https://github.com/bruceabrigo/babrigo-media" target="_blank">Repo</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <footer>Developed and Designed by Bruce Abrigo</footer>
        </>
    )
}
export default Home