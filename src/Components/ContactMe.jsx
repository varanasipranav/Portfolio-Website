import '../Styles/ContactMe.css'
import Header from './header'
import { useState } from 'react';

export default function ContactMe() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const { name, email, message } = formData;
        const mailtoLink = `mailto:varanasi.saipranav@gmail.com?subject=Message from ${name}&body=${message}%0A%0AReply to: ${email}`;
        window.location.href = mailtoLink;
    };

    return (
        <>
        <Header/>
        <div className="contact-container">
            
            <h1>Contact Me</h1>
            <div className="contact-info">
                <p><strong>Name: </strong>Varanasi Pranav</p>
                <p><strong>Email: </strong>varanasi.saipranav@gmail.com</p>
                <p><strong>Location: </strong> Benguluru, India</p>
            </div>
            <div className="contact-form">
                <h2>Send me a message</h2>
                <form onSubmit={handleSubmit}>
                    <div className="form-group">
                        <label htmlFor="name">Name:</label>
                        <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} required />
                    </div>
                    <div className="form-group">
                        <label htmlFor="email">Email:</label>
                        <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} required />
                    </div>
                    <div className="form-group">
                        <label htmlFor="message">Message:</label>
                        <textarea id="message" name="message" value={formData.message} onChange={handleChange} required></textarea>
                    </div>
                    <button type="submit">Send Message</button>
                </form>
            </div>
        </div>
        </>
    );
}
