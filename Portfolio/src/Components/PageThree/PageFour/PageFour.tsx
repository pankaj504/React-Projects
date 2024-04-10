import React from 'react';
import './PageFour.css';
import Paper from '@mui/material/Paper';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';

const PageFour = () => {
  const image = [
    {
      title: "I'm a designer looking to share my work",
      images: "/image_processing20191024-17056-1b511wi.png",
    },
    {
      title: "I'm looking to hire a designer",
      images: "/Screenshot 2024-04-10 at 2.09.57 PM.png"
    },
    {
      title: "I'm looking for design inspiration",
      images: "/Screenshot 2024-04-10 at 2.13.08 PM.png"
    },
  ];

  return (
    <>
      <div className="header-text">
        <h3>dribble</h3>
        <button className='btn'>
          <ArrowBackIosIcon style={{ fontSize: '10px' }} />
        </button>
      </div>
      <div className="header">
        <div className="PageFour-section">
          <h2>What brings you to Dribbble?</h2>
          <p>Select the option that best describe you. Don't worry, you can explore other options later.</p>
        </div>
        <div className="cards-container">
          {image.map((value, index) => (
            <Paper key={index} elevation={0} className="card">
              <img src={value.images} alt="" />
              <h2>{value.title}</h2>
              <input type="radio" name="names" id={`naming-${index}`} autoComplete='current-password'/>
            </Paper>
          ))}
        </div>
        <button className='btn2'>Finish</button>
      </div>
    </>
  )
}

export default PageFour;
