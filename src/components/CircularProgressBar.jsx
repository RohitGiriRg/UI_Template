import React from 'react';
import './CircularProgressBar.css'; // Import CSS for styling

const CircularProgressBar = ({ percentage }) => {
  const radius = 50;
  const strokeWidth = 8;
  const normalizedRadius = radius - strokeWidth * 2;
  const circumference = normalizedRadius * 2 * Math.PI;
  const offset = circumference - (percentage / 100) * circumference;

  return (
    <div className="circular-progress">
      <svg height={radius * 2} width={radius * 2}>
        <circle
          className="circular-progress-bar"
          stroke="grey"
          fill="transparent"
          strokeWidth={strokeWidth}
          r={normalizedRadius}
          cx={radius}
          cy={radius}
        />
        <circle
          className="circular-progress-indicator"
          stroke="orange"
          fill="transparent"
          strokeWidth={strokeWidth}
          strokeDasharray={circumference + ' ' + circumference}
          style={{ strokeDashoffset: offset }}
          r={normalizedRadius}
          cx={radius}
          cy={radius}
        />
      </svg>
      <div className="progress-text">{percentage}%</div>
    </div>
  );
};

export default CircularProgressBar;
