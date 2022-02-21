import React from 'react';
import emailjs from 'emailjs-com';
import './Contact.css';

export default function Contact() {
    function sendEmail(e){
        e.preventDefault();
        emailjs.sendForm(
            "service_ztzhb5m",
            "template_rt0qg6g", 
            e.target,
            "user_uulFTKvQQ2DG6QS89XWRo"
            ).then(res=>{
                console.log(res);
            }).catch(err=>console.log(err));
    }
    
    return (
        <div className='contact'>
           <h1 className='contact-me'>Contact Me</h1> 
           <form className='contact-form' onSubmit={sendEmail} >
               <label className='your-name'>Your Name :</label>
               <input className='your-name-text' type="text" name="name"></input><br/>
               <label className='your-email'>Your Email :</label>
               <input className='your-email-text' type="email" name="sender_email"></input><br/>
               <label className='your-msg'>Enter Your Message Below :</label><br/>
               <textarea className='msg-text' name="message" rows="10"></textarea><br/>
               <input className='submit-btn' type="submit" value="Send"></input>
           </form>
        </div> 
    );
}
