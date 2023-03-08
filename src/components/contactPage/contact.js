import React, { useRef } from 'react'
import emailjs from '@emailjs/browser';
import './contact.scss'

const Contact = (props) => {
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();
        console.log(process.env.REACT_APP_PUBLIC_KEY)
        emailjs.sendForm(`${process.env.REACT_APP_SERVICE_ID}`, `${process.env.REACT_APP_TEMPLATE_ID}`, form.current, `${process.env.REACT_APP_PUBLIC_KEY}`)
          .then((result) => {
              console.log(result.text);
          }, (error) => {
              console.log(error.text);
          });
      };

  return (
    <>
        <div className='contact'>
            <div className='contact-card'>
                <div className='left'>
                    <h1>Wanna Get Personal?</h1>
                    <p>Thank you for checking out my portfolio! It seems you're visiting this page to get to know me on a more personal level...</p>
                    <p>Spoiler Alert! I do too! Fill out the contact form, and let's get to know each other!</p>
                </div>
                <div className='right'>
                    <h1 className='contact-title'>Contact Me</h1>
                    <form ref={form} onSubmit={sendEmail}>
                        <input type="text" name="from_name" placeholder='name'/>
                        <hr/>
                        <br/>
                        <input type="email" name="from_email" placeholder='email'/>
                        <hr/>
                        <br/>
                        <textarea name="message" placeholder="What's on your mind?"/>
                        <hr/>
                        <br/>
                        <input type="submit" value="Send" className='submit-btn'/>
                    </form>
                </div>
            </div>
        </div>
    </>
  )
}

export default Contact