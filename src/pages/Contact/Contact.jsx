import React from 'react';
import { useState, useEffect } from "react";
import { useNavigate } from 'react-router-dom';
import { HiCheck} from 'react-icons/hi';
import Footer from '../../components/Footer';
import './contact.css';

const Contact = () => {

  let navigate = useNavigate();
  
  const [checked, notChecked] = useState(false);
  const check = () => notChecked(!checked)
  const initialValues = { first_name: "", last_name: "", email: "", message: "" };
  const [formValues, setFormValues] = useState(initialValues);
  const [formErrors, setFormErrors] = useState({});
  const [isSubmit, setIsSubmit] = useState(false);
  


  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormErrors(validate(formValues));
    setIsSubmit(true);

    // navigate("/Hng-first-task-linktree");
    
  };

  useEffect(() => {
    console.log(formErrors);
    if (Object.keys(formErrors).length === 0 && isSubmit) {
      console.log(formValues);
    }
  }, [formErrors]);
  const validate = (values) => {
    const errors = {};
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;

    if (!values.first_name) {
      errors.first_name = "firstname is required!";
    }
    if (!values.last_name) {
      errors.last_name = "lastname is required!";
    }
    if (!values.email) {
      errors.email = "Email is required!";
    } else if (!regex.test(values.email)) {
      errors.email = "This is not a valid email format!";
    }
    if (!values.message) {
      errors.message = "Message is required!";
    }
    return errors;
  };
  return (
    <div className='contact'>
       {Object.keys(formErrors).length === 0 && isSubmit ? (
        navigate("/linktree")
      ) : ("")}
      <div className='contact-container'>
        <div className='contact-container-menu'>
          <div className='menu-header'>
            <h1>Contact Me</h1>
            <p>Hi there, contact me to ask me about anything you have in mind.</p>
          </div>
          <form className='menu-main' onSubmit={handleSubmit}>
            <div className='menu-main-inputs'>
              <div className='input-name'>
                <span>
                  <label className='label' for="first_name">First name</label>
                  <input type="text" id="first_name" name="first_name" placeholder="Enter your first name" value={formValues.first_name} onChange={handleChange} />
                  <p>{formErrors.first_name}</p>
                </span>
                <span>
                  <label className='label' for="last_name">Last name</label>
                  <input type="text" id="last_name" name="last_name" placeholder="Enter your last name" value={formValues.last_name} onChange={handleChange} />
                  <p>{formErrors.last_name}</p>
                </span>
              </div>
              <div id='input-emails'>
                <label className='label' for="email">Email</label>
                <input type="text" id="email" name="email" placeholder="yourname@email.com" value={formValues.email} onChange={handleChange} />
                <p>{formErrors.email}</p>
              </div>
              <div id='textarea'>
                <label className='label' for="message">Message</label>
                <textarea style={{ height: '130px', resize: 'none' }} type="text" id="message" name="message"
                  placeholder="Send me a message and I'll reply you as soon as possible..."
                  onFocus={(e) => e.target.placeholder = `Hey Kuzan, hope you are doing great. Let us collaborate on project axyz.`}
                  onBlur={(e) => e.target.placeholder = `Send me a message and I'll reply you as soon as possible...`} value={formValues.message} onChange={handleChange} />
                 <p>{formErrors.message}</p>
                 </div>
              <div id='check'>
                <div id={checked ? 'inputs' : 'input'} onClick={check}>
                  {checked ? (<HiCheck  className='icon'/>):("")}
                  <input type="checkbox" id="agreement" name="agreement" value='agree' />
                </div>
                <label>You agree to providing your data to Kuzan who may contact you.</label>
              </div>
            </div>
            <button id='btn__submit' value='submit' >Send message</button>
          </form>
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default Contact

