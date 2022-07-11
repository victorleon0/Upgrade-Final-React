
import React, { useState } from 'react';
import './Contact.scss';

const Contact = ({onChangePage, previous}) => {
    const [contactForm, setContactForm] = useState({firstname: "", lastname: "", email: "", message: ""});
    const handleChange = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        // console.log(value, name);
        // console.log(e.target);
        setContactForm((previous) => {
            return {...previous, [name]:value}
        });
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(contactForm);
    }
  
  return (
    <div id="container">
          <div id="container__forms">
            <form id="container__form" method='post' type="submit"> 
              <div id="container__first">
                <label htmlFor="firstname"><strong>First Name</strong></label>
                <input type="text" id="firstname" name="firstname" placeholder="Enter first name" onChange={handleChange}></input> 
              </div>
              <div id="container__last">
                <label htmlFor="lastname"><strong>Last Name</strong></label>
                <input type="text" id="lastname" name="lastname" placeholder="Enter last name" onChange={handleChange}></input>
              </div>
              <div id="container__email">
                <label htmlFor="email"><strong>Email</strong></label>
                <input type="email" id="email" name="email" placeholder="Enter email" onChange={handleChange}></input>
              </div>
              <div id="container__message">
                <label htmlFor="message"><strong>Message</strong></label>
                <textarea id="container__area" type="text"  name="message" maxLength="300" placeholder="Write the reason for the contact in less than 300 characters please" onChange={handleChange}></textarea>
              </div>
              <div id="container__submit">
                <input type="submit" name="submit" value="Send form" onClick={handleSubmit}></input>
              </div>
            </form>
          </div>
        </div>
  )
}

export default Contact;