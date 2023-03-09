import React from "react";

const Projects = () => {

    return (
        <>
            <div className="projects-page-card">
                <img src="/NeatFlightTracker.png"/>
                <h3>Neat Flight Tracker</h3>
                <a href="https://neatflighttracker.fly.dev/" target="_blank" className="project-link">Site</a>
                <a href="https://github.com/bruceabrigo/FlightTracker-FullStack-App" target="_blank" className="project-link">Repo</a>
            </div>
            <div className="projects-page-card">
                <img src="/UserProfile.png"/>
                <h3>Socialite</h3>
                <a href="https://socialitemedia.netlify.app/" target="_blank" className="project-link">Site</a>
                <a href="https://github.com/bruceabrigo/App3-Client" target="_blank" className="project-link">Repo</a>
            </div>
            <div className="projects-page-card">
                <img src="/RatchMe.png"/>
                <h3>Ratch Me If You Can</h3>
                <a href="https://bruceabrigo.github.io/ratch-me-if-you-can/" target="_blank" className="project-link">Play</a>
                <a href="https://github.com/bruceabrigo/ratch-me-if-you-can" target="_blank" className="project-link">Repo</a>
            </div>
        </>
    )
}

export default Projects