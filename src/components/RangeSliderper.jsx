import React, { useState } from 'react';
import './RangeSlider.css'; // Import the CSS file

const RangeSliderper = () => {
  const [value, setValue] = useState(12);

  const handleChange = (event) => {
    const rangeValue = parseFloat(event.target.value);
    setValue(rangeValue);
  };

  const calculateBackground = () => {
    const percentage = ((value - 0) / (100 - 0)) * 100;
    return `linear-gradient(to right, skyblue 0%, skyblue ${percentage}%, #ddd ${percentage}%, #ddd 100%)`;
  };

  return (
    <div className="ranger">
      <input
        type="range"
        min="0"
        max="100"
        step="1"
        value={value}
        onChange={handleChange}
        style={{ background: calculateBackground() }}
      />
      <div>
        <span className="range-value">{value}</span>%
      </div>
    </div>
  );
};

export default RangeSliderper;
