import React from 'react'
import "./contact.css"
import {MdOutlineMail} from "react-icons/md"
import {RiMessengerLine} from "react-icons/ri"
import {BsWhatsapp} from "react-icons/bs"

const Contact = () => {
  return (
   <section id='contact'> 
   <div className="container contact__container ">
   <h5>Get In Touch</h5>
   <h2> Contact Me</h2>
   
    <div className="contact__options">
      <article className='contact__option'>
        <MdOutlineMail  className='contact__option-iocn'/>
      <h4>Email</h4>
      <small>darshanbr770@gmail.com</small>
      <a href="mailto:darshanbr770@gmail.com" target="_blank">Send a Message</a>
      </article>
      <article className='contact__option'>
        <RiMessengerLine className='contact__option-iocn' />
      <h3>Messenger</h3>
      <small>darshanbr</small>
      <a href="https://m.me/darshanbr" target="_blank">Send a Message</a>
      </article>
      <article className='contact__option'>
        <BsWhatsapp className='contact__option-iocn' />
      <h4>WhatsApp</h4><br/>
      <small> +91 7483155055</small>
      <a href="https://api.whatsapp.com/send?phone +917483155065" target="_blank">Send a Message</a>
      </article>
    </div>
    {/* end of contact option */}
    <form action="mailto:darshanbr770@gmail.com">
      <input type="text" name='name' placeholder='Your Full Name'  required/>
      <input type="email" name='email'  placeholder='Your Email' required/>
      <textarea name="message"  rows="7" placeholder='Your Message' required></textarea>
      <button type='submit' className='btn btn-primary'> Send Message</button>
    </form>
   </div>
   </section>
  )
}

export default Contact