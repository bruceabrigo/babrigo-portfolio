import React from "react";
import './thankYou.scss'

const Thanks = () => {

    // no need for props here, we only want a redirect and thank you message prompting user that I will be back in touch
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