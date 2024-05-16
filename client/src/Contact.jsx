import React , {useState} from 'react'
import './Contact.css'
import Axios from 'axios';

const Contact = () => {
    const [email, setEmail] = useState('');
    const [errorMessage2, setErrorMessage2] = useState('');
    const [errorMessage, setErrorMessage] = useState('');
    const handleSubmit = () => {
        if (!email) {
          setErrorMessage2('Please enter your email');
          return;
        }
        Axios.post("http://localhost:3000/Contact", {email : email})
        setErrorMessage('We received your mail . Will contact you soon');
    }
    return (
        <div id="contact"  class="anchor-spacer">
        <section className='contact-container'>
             <div  className="center">
                <p className="contact-paragraph">Contact</p>
                <h2 className="contact-heading">Connect With Us Today</h2>
                <p className="contact-description">Start your fitness journey with us today. Email for personalized support.</p>
            </div>
            <div className='email'>
               <input type="email" id="email"  value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Enter your email" className="input-field" />
                <button onClick={handleSubmit}  className="submit-button">Submit</button>  
                {!email && errorMessage2 && <p className="error-message">{errorMessage2}</p>}
                {errorMessage && <p className="message">{errorMessage}</p>}
            </div>
        </section>
        </div>
    );
}

export default Contact;