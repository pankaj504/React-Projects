import React from "react";
import './OptionCard.css';

const OptionCard = ({ title, icon, onSelect }) => {
  return (
    <div className="option-card" onClick={onSelect}>
      <img src={icon} alt="Icon" />
      <h3>{title}</h3>
      <input type="radio" name="input" id="infield"/>
    </div>
  );
};

export default OptionCard;
