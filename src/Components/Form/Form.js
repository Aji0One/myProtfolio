import "./FormStyle.css";

import React from 'react'

const Form = () => {
  return (
    <div className="form">
        <form>
            <label for="Name">Name</label>
            <input type="text" name="Name"/>
            <label for="email">Email</label>
            <input type="email" name="email"/>
            <label for="subject">Subject</label>
            <input type="text" name="subject"/>
            <label for="message">Message</label>
            <textarea rows="6" name="message" placeholder="Type your message here" />
            <button className="btn">Submit</button>
        </form>
      
    </div>
  )
}

export default Form;
