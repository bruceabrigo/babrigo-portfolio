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
                            <p>I love the freedom to express creativity in frontend and web development to show your eyes cool ways to browse the web!</p>
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
                            <p>I also enjoy working with algorithms and creating databases/apis!</p>
                            <p className="summary-title">Languages:</p>
                            <p>Python</p>
                            <p>C++</p>
                            <p>SQL</p>
                            <p>MongoDB</p>
                            <p>AWS S3</p>
                    </div>
                    <div className="column">
                        <h2 className="skills-title">Tools and IDEs</h2>
                            <p>These are places I like to work with code and design!</p>
                            <p className="summary-title">Where I work:</p>
                            <p>VSCode</p>
                            <p>XCODE</p>
                            <p>Postman</p>
                            <p>Figma</p>
                            <p>Amazon Web Services</p>
                    </div>
                </div>
            </div>

{/* ------------- PROJECTS ------------- */}
            <div className="projects">
            <h2 className="proj-title">My works</h2>
                <div className="project-highlights-container">

                </div>
            </div>

            <footer>Developed and Designed by Bruce Abrigo</footer>
        </>
    )
}
export default Home