import React, { useState } from 'react';
import { FaGithub, FaLinkedin, FaTwitter, FaEnvelope, FaWhatsapp } from 'react-icons/fa';

const ContactPage = () => {
  const [formStatus, setFormStatus] = useState(null);
  
  const sendEmail = async (e) => {
    e.preventDefault();
    setFormStatus('sending');

    const formData = new FormData(e.target);
    const data = {
      name: formData.get('name'),
      email: formData.get('email'),
      message: formData.get('message'),
    };

    const workerUrl = import.meta.env.VITE_WORKER_API_URL || 'http://127.0.0.1:8787';

    try {
      const response = await fetch(workerUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      const result = await response.json();

      if (response.ok && result.success) {
        setFormStatus('success');
        e.target.reset();
      } else {
        console.error("Error sending email:", result.error || result);
        setFormStatus('error');
      }
    } catch (error) {
      console.error("Network error sending email:", error);
      setFormStatus('error');
    }
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
                <strong>Note:</strong> Messages are sent securely via a Cloudflare Worker backend powered by Resend.
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
              {formStatus === 'error' && <div className="saas-badge badge-hard mt-6 w-full justify-center" style={{ whiteSpace: 'normal', textAlign: 'center' }}>Failed to send message. Please try again later.</div>}
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
                <h4 className="mb-4">Quick Chat</h4>
                <a href="https://wa.me/918762937949" target="_blank" rel="noopener noreferrer" className="btn-secondary w-full" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '8px' }}>
                  <FaWhatsapp size={18} /> Message on WhatsApp
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
