import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '../button';
import './Footer.css';

function Footer() {
    return (
        <div className="footer-container">
            <section className="footer-subscription">
                <p className="footer-subscription-heading">
                    Join The Adventure Newsletter to recevie our best vaction deals
                </p>
                <p className="footer-subscription-text">
                    You Can Umsubscribe at any time
                </p>
                <div className="input-areas">
                    <form >
                        <input type="email" name="email" placeholder="Your Email" className="footer-input" />
                        <Button buttonStyle="btn--outline">SubScribe</Button>
                    </form>
                </div>
                <div class='footer-links'>
                     <div className='footer-link-wrapper'>
            <div class='footer-link-items'>
                <h2>About Us</h2>
                <Link to='/sign-up'>How it works</Link>
                <Link to='/'>Testimonials</Link>
                <Link to='/'>Careers</Link>
                <Link to='/'>Investors</Link>
                <Link to='/'>Terms of Service</Link>
            </div>
            <div class='footer-link-items'>
                <h2>Contact Us</h2>
                <Link to='/'>Contact</Link>
                <Link to='/'>Support</Link>
                <Link to='/'>Destinations</Link>
                <Link to='/'>Sponsorships</Link>
            </div>
             <div className='footer-link-wrapper'>
                 <div class='footer-link-items'>
                <h2>Videos</h2>
                <Link to='/'>Submit Video</Link>
                <Link to='/'>Ambassadors</Link>
                <Link to='/'>Agency</Link>
                <Link to='/'>Influencer</Link>
                 </div>
                 <div class='footer-link-items'>
                <h2>Social Media</h2>
                <Link to='/'>Instagram</Link>
                <Link to='/'>Facebook</Link>
                <Link to='/'>Youtube</Link>
                <Link to='/'>Twitter</Link>
                </div>
             </div>
             <section class='social-media'>
                 <div class='social-media-wrap'>
          <div class='footer-logo'>
            <Link to='/' className='social-logo'>
              TRVL
              <i class='fab fa-typo3' />
            </Link>
          </div>
          <small class='website-rights'>TRVL © 2020</small>
          <div class='social-icons'>
            <Link
              class='social-icon-link facebook'
              to='/'
              target='_blank'
              aria-label='Facebook'
            >
              <i class='fab fa-facebook-f' />
            </Link>
            <Link
              class='social-icon-link instagram'
              to='/'
              target='_blank'
              aria-label='Instagram'
            >
              <i class='fab fa-instagram' />
            </Link>
            <Link
              class='social-icon-link youtube'
              to='/'
              target='_blank'
              aria-label='Youtube'
            >
              <i class='fab fa-youtube' />
            </Link>
            <Link
              class='social-icon-link twitter'
              to='/'
              target='_blank'
              aria-label='Twitter'
            >
              <i class='fab fa-twitter' />
            </Link>
            <Link
              class='social-icon-link twitter'
              to='/'
              target='_blank'
              aria-label='LinkedIn'
            >
              <i class='fab fa-linkedin' />
            </Link>
          </div>
        </div>
             </section>
        </div>
                </div>
                <p className="footer-subscription-text">
                    Created With: React js
                </p>
                <p className="footer-subscription-text">
                    Made By : <span>Ahmed Barakat &copy;</span>
                </p>
            </section>
            
        </div>
    )
}

export default Footer
