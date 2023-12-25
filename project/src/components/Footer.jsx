import React from 'react';
import '../components/Footer.css';
const Footer = () => {
  return (
    <footer className="bg-dark text-white py-4">
      <div className='container'>
      <div className="footer-content">
        <div className='row'>
        <div className="contact-info">
          <div className='col'>
          <h3 className='ContactI'>Contact Us</h3>
          <p>Email: xyz@cuilahore.edu.pk</p>
          <p>Phone: +92-239379575</p>
          </div>
        </div>
        </div>

        <div className="social-media">
          <h3 className='ConnectW' > Connect with Us</h3>
          <ul>
            <li><a href="https://www.instagram.com/comsats.uni_lhrofficial/?hl=en" target="_blank" rel="noopener noreferrer">Instagram </a></li>
            <li><a href="https://www.facebook.com/cuilahore/" target="_blank" rel="noopener noreferrer">Facebook</a></li>
            <li><a href="https://www.linkedin.com/company/comsats-university-lahore?originalSubdomain=pk" target="_blank" rel="noopener noreferrer">LinkedIn</a></li>
          </ul>
        </div>
        
      </div>
      <div className="copyright">
        <p>&copy; 2023 COMSATS University Lahore. All Rights Reserved.</p>
      </div>
      </div>
    </footer>
  );
};

export default Footer;
