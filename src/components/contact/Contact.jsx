import React, { useRef } from 'react';
import {AiOutlineMail} from 'react-icons/ai'
import {BsFacebook} from 'react-icons/bs'
import {BsWhatsapp} from 'react-icons/bs'
import './contact.css'
// import emailjs from '@emailjs/browser';
import emailjs from 'emailjs-com'



const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_tvdxk34', 'template_cyyg0e8', form.current, 'Y9mjmnkWbC2nXRi7l')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
  };
  return (
    <section id='contact'>
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>
      <div className="container contact_container">
        <div className="contact_options">
          <article className='contact_option'>
            <AiOutlineMail className='contact_icons' />
            <h4>Message Me</h4>
            <h5>shaikjilani2001@gmail.com</h5>
            <a href="mailto:shaikjilani2001@gmail.com" target='_blank'>Send a Message</a>
          </article>

          <article className='contact_option'>
            <BsFacebook className='contact_icons' />
            <h4>Message Me</h4>
            <h5>Facebook</h5>
            <a href="https://m.me/shaik.jillu.786" target='_blank'>Send a Message</a>
          </article>

          <article className='contact_option'>
            <BsWhatsapp className='contact_icons' />
            <h4>Message Me</h4>
            <h5>+91 8309857097</h5>
            <a href="https://wa.me/918309857097" target='_blank'>Send a Message</a>
          </article>
        </div>
        <form ref={form} onSubmit={sendEmail}>
          <input type="text" name='name' placeholder='Your Full Name' required />
          <input type="email" name="email" placeholder='Your Email' required />
          <textarea name="message"   rows="10" placeholder='Your Message' required></textarea>
          <button type="submit" className='btn btn-primary'>Send Me Message</button>
        </form>
      </div>
    </section>
  )
}

export default Contact
