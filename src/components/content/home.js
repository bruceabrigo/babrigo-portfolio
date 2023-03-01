import React from "react";
import './about-me.scss'
import './skills.scss'

const Home = () => {


    return  (
        <>
            <section>
                <div className="greeting">
                    <h2 className='greeting-title'>Hi! I'm Bruce.</h2>
                    <p id="greetingSlider">Software Developer</p>
                </div>
            </section>
            <div className="about-me">
                <h2 className="about-me-title">About Me</h2>
                <p className="about-me-subhead">Let's get to know each other!</p>
            <div className="about-me-context">
                <div className="left">
                    <img className="profile-img" src="/Bruce.jpg" alt="profile"/>
                </div>
                <div className="right">
                    <p>
                        My name is Bruce Abrigo, and I'm a software developer!
                        <br/>
                        I'm familiar with various programming languages, frameworks, & libraries with an understanding in Computer Science and Cyber Security.
                        As a software developer I have constructed and consumed numerous API's, as well as developed and deployed various front-end and full-stack projects.
                    </p>
                </div>
            </div>
            </div>
            <div className="skills">
                <h2 className="skills-title">Skills</h2>
                <div class="skillsCard">
      <h2 class="frontEndTitle">Front End Development</h2>
    <div class="skillsImgs">
      <ul>
        <li> <img src="https://cdn-icons-png.flaticon.com/512/732/732212.png" alt="html-icon" className="html-icon"/> </li>
        <li> <img src="https://cdn-icons-png.flaticon.com/512/732/732190.png" alt="css.icon" className="css-icon"/></li>
        <li> <img src="https://cdn.iconscout.com/icon/free/png-256/javascript-2038874-1720087.png" alt="js-icon" className="js-icon"/></li>
        <li> <img src="https://cdn-icons-png.flaticon.com/512/5968/5968672.png" alt="bootstrap-icon" className="js-icon"/></li>
      </ul>
    </div>
      <h2 class="backEndTitle">Back End Development</h2>
    <div class="skillsImgs">
      <ul>
        <li> <img src="https://cdn.iconscout.com/icon/free/png-256/mongodb-5-1175140.png" alt="mongo-icon" className="mongo-icon"/> </li>
        <li> <img src="https://www.freeiconspng.com/thumbs/sql-server-icon-png/sql-server-icon-png-29.png" alt="sql-icon" className="sql-icon"/></li>
      </ul>
    </div>
      <h2 class="techTitle">Technologies</h2>
        <div class="skillsImgs">
          <ul>
            <li> <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/9a/Visual_Studio_Code_1.35_icon.svg/2048px-Visual_Studio_Code_1.35_icon.svg.png" alt="vscode-icon" className="vscode-icon"/> </li>
            <li> <img src="https://user-images.githubusercontent.com/7853266/44114706-9c72dd08-9fd1-11e8-8d9d-6d9d651c75ad.png" alt="postman-icon" className="postman-icon"/></li>
            <li> <img src="https://cdn-icons-png.flaticon.com/512/25/25231.png" alt="github-icon" className="github-icon"/></li>
            <li> <img src="https://cdn-icons-png.flaticon.com/512/5968/5968705.png" alt="figma-icon" className="figma-icon"/></li>
          </ul>
        </div>
  </div>
            </div>
        </>
    )
}
export default Home