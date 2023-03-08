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
                <h2 className="skills-title">Skills</h2>

                <div class="skillsCard">
                <h2 class="title">Programming & Scripting</h2>
                    <div class="skillsImgs">
                        <ul className="space-card">
                            <li> <img src="https://cdn.iconscout.com/icon/free/png-256/javascript-2038874-1720087.png" alt="js icon" className="icon"/></li>
                            <li> <img src="https://cdn.cdnlogo.com/logos/r/85/react.svg" alt="react-icon" className="icon"/></li>
                            <li> <img src="https://cdn.iconscout.com/icon/free/png-256/python-3521655-2945099.png" alt="python icon" className="icon"/></li>
                            <li> <img src="https://cdn-icons-png.flaticon.com/512/732/732212.png" alt="html icon" className="icon"/> </li>
                            <li> <img src="https://cdn-icons-png.flaticon.com/512/732/732190.png" alt="css icon" className="icon"/></li>
                            <li> <img src="https://cdn-icons-png.flaticon.com/512/5968/5968672.png" alt="bootstrap icon" className="icon"/></li>
                        </ul>
                    </div>
                <h2 class="title">Back End Development</h2>
                <div class="skillsImgs">
                    <ul>
                        <li> <img src="https://cdn.iconscout.com/icon/free/png-256/mongodb-5-1175140.png" alt="mongo-icon" className="icon"/> </li>
                        <li> <img src="https://cdn.cdnlogo.com/logos/d/97/django-community.svg" alt="django-icon" className="icon"/></li>
                        <li> <img src="https://www.freeiconspng.com/thumbs/sql-server-icon-png/sql-server-icon-png-29.png" alt="sql-icon" className="icon"/></li>
                    </ul>
                    </div>
                    <h2 class="title">Technologies</h2>
                    <div class="skillsImgs">
                        <ul>
                            <li> <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/9a/Visual_Studio_Code_1.35_icon.svg/2048px-Visual_Studio_Code_1.35_icon.svg.png" alt="icon" className="vscode-icon"/> </li>
                            <li> <img src="https://user-images.githubusercontent.com/7853266/44114706-9c72dd08-9fd1-11e8-8d9d-6d9d651c75ad.png" alt="postman-icon" className="icon"/></li>
                            <li> <img src="https://cdn-icons-png.flaticon.com/512/25/25231.png" alt="github-icon" className="icon"/></li>
                            <li> <img src="https://cdn-icons-png.flaticon.com/512/5968/5968705.png" alt="figma-icon" className="icon"/></li>
                        </ul>
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
                                <img src="/UserProfile.png"/>
                                <h3>Socialite</h3>
                            </div>
                        </div>
                    <div className="face face2">
                        <div className="content">
                                <p>MERN Social Media Application with user authentication and forum posts.</p>
                                <a href="https://socialitemedia.netlify.app/" target="_blank">Site</a>
                                <a href="https://github.com/bruceabrigo/App3-Client" target="_blank">Repo</a>
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