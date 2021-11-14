import React from 'react';
import './ContactUs.css'

const ContactUs = () => {

    return (

        <div className="contact-us">
            <h1>Contact Us</h1>
            <form>
                <div className="container contactForm">
  <div className="form-group">
    <label htmlFor="exampleInputEmail1">Email address</label>
    <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" />
    <small id="emailHelp" className="form-text text-black">We'll never share your email with anyone else.</small>
  </div>
  
  <label>Leave your message here:</label>
  <textarea className="form-control"></textarea>
  <div className="form-check mt-2 mb-2">
      
    <input type="checkbox" className="form-check-input" id="exampleCheck1"/>
    <label className="form-check-label" htmlFor="exampleCheck1">
    <small>I agree with terms of Use</small></label>
  </div>
  <button type="submit" className="btn btn-primary">Submit</button>
  </div>
</form>
</div>

    );
}

export default ContactUs;
