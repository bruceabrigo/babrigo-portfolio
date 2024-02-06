import React from "react";
import './about-me.scss'
import './skills.scss'
import './projects.scss'
import BabrigoMedia from "../../images/BabrigoMedia.png";
import MusicTaste from "../../images/MusicTaste.png";
import snakeGame from "../../images/snakeGame.png"
import { Link } from "react-router-dom"


import { TypeAnimation } from "react-type-animation";

const Home = () => {

    const visitBabrigoMedia = () => {
        console.log('clicked')
        window.open("https://babrigo-media.onrender.com/", "_blank")
    }
    const visitMusicTaste = () => {
        console.log('clicked')
        window.open("https://musictaste.onrender.com/", "_blank")
    }
    const visitSnakeGame = () => {
        console.log('clicked')
        window.open("https://github.com/bruceabrigo/Python_Snake_Game", "_blank")
    }
    // const handleClick = () => {
    //     console.log('clicked')
    //     window.open("https://babrigo-media.onrender.com/", "_blank")
    // }
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
                        <img src="/linked-in.png" className="icon" alt="LinkedIn"/>
                    </Link>
                    <Link to='https://github.com/bruceabrigo' target="_blank" >
                        <img src="/github.png" className="icon" alt="Github"/>
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
                            <p>PHP</p>
                            <p>Docker</p>
                            {/* IDEs */}
                    </div>
                    <div className="column">
                        <h2 className="skills-title">Software/Backend Developer</h2>
                            <p>I also enjoy working with algorithms and creating databases/apis!</p>
                            <p className="summary-title">Languages:</p>
                            <p>Python</p>
                            <p>C++</p>
                            <p>SQL</p>
                            <p>Express</p>
                            <p>Node</p>
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
                            {/* , backgroundSize: "cover", backgroundRepeat: "no-repeat", display: "flex", justifyContent: "center", alignItems: "center", color: "#ffffff",  fontSize: "24px", fontWeight: "bold", textAlign: "center", textShadow: "2px 2px 4px rgba(0, 0, 0, 0.5)"}} */}
            <div className="projects">
            <h2 className="proj-title">My works</h2>
                <div className="project-highlights-container">
                    <div className="projects-left"> 
                        <div className="left">
                            <div className="project-button" onClick={visitSnakeGame} style={{ backgroundImage: `url(${snakeGame})`, width: "360px"}}>
                                    <span className="visit-site">Visit Repo</span>
                            </div>
                        </div>
                        <div className="right">
                            <div>
                                <h2>Snake Game</h2>
                                <p>A Windows based game application with the objective to collect food that grows the snakes length in order to obtain a high score. Users can control snake movement with WASD keys and collision mapping with game borders and snake body.</p>
                                <br></br>
                                <h4>Python</h4>
                            </div>
                            <div>
                            <Link to='https://github.com/bruceabrigo/Python_Snake_Game' target="_blank" >
                                <img src="/githubWhite.png" className="icon-projects" alt="Github"/>
                            </Link>
                            </div>
                        </div>
                    </div>
                    <div className="projects-right"> 
                        <div className="left">
                            <div>
                            <h2>Music Taste</h2>
                                <p>A web application that returns active Spotify user data. Music Taste takes Spotify's api to authenticate users and return their top 5 tracks and artists from the last 30 days. Users can also download a png of their returned data to be shared across various platforms.</p>
                                <br></br>
                                <h4>Express&nbsp;&nbsp;&nbsp;&nbsp;Node&nbsp;&nbsp;&nbsp;&nbsp;JavaScript&nbsp;&nbsp;&nbsp;&nbsp;Liquid Views</h4>
                            </div>
                            <div>
                            <Link to='https://github.com/bruceabrigo/music-taste' target="_blank" >
                                <img src="/githubWhite.png" className="icon-projects" alt="Github"/>
                            </Link>
                            </div>
                        </div>
                        <div className="right">
                            <div className="project-button" onClick={visitMusicTaste} style={{ backgroundImage: `url(${MusicTaste})`}}>
                                <span className="visit-site">Visit Site</span>
                            </div>     
                        </div>
                    </div>
                    <div className="projects-left"> 
                        <div className="left">
                            <div className="project-button" onClick={visitBabrigoMedia} style={{ backgroundImage: `url(${BabrigoMedia})` }}>
                                <span className="visit-site">Visit Site</span>
                            </div>
                        </div>
                        <div className="right">
                            <div>
                            <h2>Babrigo Media</h2>
                            <p>A web application that showcases a photography portfolio. Users can create accounts and access public collections, own collections, as well as leave reviews, and submit contact forms. </p>
                            <br></br>
                            <h4>Python&nbsp;&nbsp;&nbsp;&nbsp;Djano&nbsp;&nbsp;&nbsp;&nbsp;SQL&nbsp;&nbsp;&nbsp;&nbsp;PosgreSQL&nbsp;&nbsp;&nbsp;&nbsp;AWS(S3)&nbsp;&nbsp;&nbsp;&nbsp;</h4>
                            </div>
                            <div>
                            <Link to='https://github.com/bruceabrigo/babrigo-media' target="_blank" >
                                <img src="/githubWhite.png" className="icon-projects" alt="Github"/>
                            </Link>
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