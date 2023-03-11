import React from "react";
import './thankYou.scss'

const Thanks = () => {

    return (
        <>
            <div className="thank-you-card">
                <div className="thanks-content">
                    <h1>Thanks for reaching out!</h1>
                    <p>I look forward to reading your email.</p>
                    <br/>
                    <a href="/" className="returnbtn">Back Home</a>
                </div>
            </div>
        </>
    )
}

export default Thanks