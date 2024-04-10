import React, { useState } from 'react';
import './VerifyEmail.css';
import Footer from './Footer';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import PinterestIcon from '@mui/icons-material/Pinterest';
const VerifyEmail = () => {
  const [email, setEmail] = useState('account@refero.design');

  const handleResendEmail = () => {
    // Logic to resend the verification email
    console.log('Resending verification email to:', email);
  };

  const handleChangeEmail = () => {
    // Logic to prompt for a new email address
    const newEmail = window.prompt('Enter your new email address:');
    if (newEmail) {
      setEmail(newEmail);
    }
  };
  const options = [
    {
      title: "For designer",
      list: ["Go Pro!", "Explore design work", "Design blog", "Overtime podcast", "Playoffs", "Weekly Warm-Up", "Refer a Friend", "Code of conduct"]
    },
    {
      title: "Hire designers",
      list: ["Post a job opening", "Post a freelance project", "Search for designers", "Brands", "Advertise with us"]
    },
    {
      title: "Company",
      list: ["About", "Careers", "Support", "Media kit", "Testimonials", "API", "Terms of service", "Privacy policy", "Cookie policy"]
    },
    {
      title: "Directories",
      list: ["Design jobs", "Designers for hire", "Freelance designers for hire", "Tags", "Places", "Design assets", "Dribbble Marketplace", "Creative Market", "Fontspring", "Font Squirrel"]
    },
    {
      title: "Design Resources",
      list: ["Freelancing", "Design Hiring", "Design Portfolio", "Design Education", "Creative Process", "Design Industry Trend"]
    }
  ];
  return (
    <>
    <div className="verify-container">
    <div className="verify-email-header">
        <div className="header-text">
          <h3>dribble</h3>
          <a href="">Inspiration</a><a href="">Find Work</a><a href="">Learn Design  </a><a href="">Go Pro</a><a href="">Hire Designer</a>
        </div>
        <div className="header-right">
          <i className="fas fa-search search-icon"></i>
          <input type="search" placeholder='Search' id='searchbar' />
          <img src="/briefcase.png" alt="" />
          <img src="/photo-1711580377289-eecd23d00370.avif" alt="logo" />
          <button>Upload</button>
        </div>
      </div>
      <div className="verify-email-container">
        <h2>Please verify your email...</h2>
        <div className="email-icon">
          <img src="/public/mail_1334893.png" alt="" />
        </div>
        <p>Please verify your email address. We've sent a confirmation email to:</p>
        <p className="email-address">{email}</p>
        <p>Click the confirmation link in that email to begin using Dribbble.</p>
        <p>
          Didn't receive the email? Check your Spam folder, it may have been caught by a filter. If
          you still don't see it, you can <button onClick={handleResendEmail}>resend the confirmation email</button>.
        </p>
        <p>
          Wrong email address? <button onClick={handleChangeEmail}>Change it</button>.
        </p>

      </div>

      <div className="option-card1">
        <div className="footer-drible">
          <h3>dribbble</h3>
          <p>Dribbble is the world's leading community for creatives to share,grow,and get hired.</p>
          <div className="social-media">
            <img src="https://img.icons8.com/fluency-systems-regular/50/dribbble.png" alt="dribbble" />
            <TwitterIcon />
            <InstagramIcon />
            <FacebookIcon />
            <PinterestIcon />

          </div>
        </div>
        {options.map((option, index) => (
          <Footer
            key={index}
            title={option.title}
            list={option.list} />
        ))}
      </div>
    </div>
     
    </>


  );
};

export default VerifyEmail;
