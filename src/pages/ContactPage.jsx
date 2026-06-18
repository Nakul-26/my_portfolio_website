import React, { useState } from 'react';
import { FaGithub, FaLinkedin, FaTwitter, FaEnvelope, FaCalendarAlt } from 'react-icons/fa';
import emailjs from 'emailjs-com';

const ContactPage = () => {
  const [formStatus, setFormStatus] = useState(null);
  
  const sendEmail = (e) => {
    e.preventDefault();
    setFormStatus('sending');

    // IMPORTANT: Replace with your own EmailJS credentials
    const serviceID = 'YOUR_SERVICE_ID';
    const templateID = 'YOUR_TEMPLATE_ID';
    const userID = 'YOUR_USER_ID';

    if (serviceID === 'YOUR_SERVICE_ID' || templateID === 'YOUR_TEMPLATE_ID' || userID === 'YOUR_USER_ID') {
      setFormStatus('error');
      console.error("EmailJS credentials are not set. Please update them in ContactPage.jsx");
      return;
    }

    emailjs.sendForm(serviceID, templateID, e.target, userID)
      .then((result) => {
          console.log(result.text);
          setFormStatus('success');
      }, (error) => {
          console.log(error.text);
          setFormStatus('error');
      });
    
    e.target.reset();
  };

  return (
    <div className="py-20">
      <div className="saas-container">
        
        <div className="mb-12 text-center">
          <h1 className="mb-4">Get In Touch</h1>
          <p className="text-lg mx-auto text-center" style={{ maxWidth: '600px' }}>
            Have a project in mind or just want to say hi? Feel free to reach out. I'm always open to discussing new opportunities and interesting ideas.
          </p>
        </div>

        <div className="flex flex-col lg:flex-row gap-12" style={{ maxWidth: '1000px', margin: '0 auto' }}>
          
          {/* --- CONTACT FORM --- */}
          <div className="flex-grow">
            <div className="saas-card">
              <h3 className="mb-6">Send a Message</h3>
              
              <div className="saas-badge badge-medium mb-6" style={{ width: '100%', whiteSpace: 'normal', lineHeight: '1.4' }}>
                <strong>Note:</strong> To enable email sending, please replace the placeholder credentials in <code>src/pages/ContactPage.jsx</code> with your own from EmailJS.
              </div>

              <form onSubmit={sendEmail} className="flex flex-col gap-4">
                <div className="flex flex-col md:flex-row gap-4">
                  <div className="flex-grow flex flex-col gap-2">
                    <label className="text-sm font-semibold" style={{ color: 'var(--text-secondary)' }}>Name</label>
                    <input type="text" placeholder="Your Name" name="name" className="saas-input" required />
                  </div>
                  <div className="flex-grow flex flex-col gap-2">
                    <label className="text-sm font-semibold" style={{ color: 'var(--text-secondary)' }}>Email</label>
                    <input type="email" placeholder="Your Email" name="email" className="saas-input" required />
                  </div>
                </div>
                
                <div className="flex flex-col gap-2">
                  <label className="text-sm font-semibold" style={{ color: 'var(--text-secondary)' }}>Message</label>
                  <textarea rows="5" placeholder="Your message..." name="message" className="saas-input" style={{ resize: 'vertical' }} required></textarea>
                </div>
                
                <button type="submit" className="btn-primary w-full mt-4">
                  Send Message
                </button>
              </form>

              {formStatus === 'success' && <div className="saas-badge badge-easy mt-6 w-full justify-center">Message sent successfully!</div>}
              {formStatus === 'error' && <div className="saas-badge badge-hard mt-6 w-full justify-center" style={{ whiteSpace: 'normal', textAlign: 'center' }}>Failed to send message. Check EmailJS credentials.</div>}
              {formStatus === 'sending' && <div className="saas-badge badge-primary mt-6 w-full justify-center">Sending...</div>}
            </div>
          </div>

          {/* --- CONTACT INFO --- */}
          <div style={{ minWidth: '300px' }}>
            <div className="saas-card flex flex-col gap-8 h-full">
              
              <div>
                <h4 className="mb-4">Contact Details</h4>
                <a href="mailto:naul123426@gmail.com" className="flex items-center gap-3 text-secondary hover:text-white transition-colors mb-2">
                  <span className="saas-icon-btn"><FaEnvelope size={16} /></span>
                  naul123426@gmail.com
                </a>
              </div>
              
              <div style={{ height: '1px', background: 'var(--border)' }}></div>

              <div>
                <h4 className="mb-4">Social Profiles</h4>
                <div className="flex gap-3">
                  <a href="https://github.com/Nakul-26" target="_blank" rel="noopener noreferrer" className="saas-icon-btn">
                    <FaGithub size={18} />
                  </a>
                  <a href="https://www.linkedin.com/in/nakul-b-60a3b2290/" target="_blank" rel="noopener noreferrer" className="saas-icon-btn">
                    <FaLinkedin size={18} />
                  </a>
                  <a href="https://x.com/Nakulb137019" target="_blank" rel="noopener noreferrer" className="saas-icon-btn">
                    <FaTwitter size={18} />
                  </a>
                </div>
              </div>

              <div style={{ height: '1px', background: 'var(--border)' }}></div>

              <div>
                <h4 className="mb-4">Schedule a Meeting</h4>
                <a href="#" target="_blank" rel="noopener noreferrer" className="btn-secondary w-full">
                  <FaCalendarAlt size={16} /> Book a Call
                </a>
              </div>

            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default ContactPage;
