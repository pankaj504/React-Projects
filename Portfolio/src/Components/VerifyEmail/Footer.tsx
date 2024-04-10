import React from 'react'
import './Footer.css'
const Footer = ({title,list}) => {
  return (
   <>
    <div className="option-card2">
      <h3>{title}</h3>
      <ul>
        {list.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
   </>
  )
}

export default Footer
