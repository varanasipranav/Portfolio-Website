import '../Styles/ContactMe.css'
export default function ContactMe() {
    return (
        <div className="contact-container">
            <h1>Contact Me</h1>
            <div className="contact-info">
                <p><strong>Email:</strong> pranav.varanasi@example.com</p>
                <p><strong>Phone:</strong> +91-9876543210</p>
                <p><strong>Location:</strong> Bangalore, India</p>
                <iframe
                    title="Location Map"
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3890.883928672912!2d77.5946!3d12.9716!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae1670f4f0f0f1%3A0x4b61b3240c7a0b0!2sBangalore%2C%20India!5e0!3m2!1sen!2sin!4v1699456789012"
                    width="600"
                    height="450"
                    style={{ border: 0 }}
                    allowFullScreen=""
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
            </div>
        </div>
    );
}
