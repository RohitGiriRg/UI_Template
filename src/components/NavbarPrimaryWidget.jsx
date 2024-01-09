import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faNewspaper, faUser, faSearch, faRectangleList } from '@fortawesome/free-solid-svg-icons';

const navbarStyle = {
  position: 'fixed',
  bottom: 0,
  width: '100%',
  height: '70px',
  backgroundColor: '#ffffff',
  display: 'flex',
  justifyContent: 'space-evenly',
  alignItems: 'center',
  boxShadow: '0px -2px 6px rgba(0, 0, 0, 0.1)', // Adding a shadow for depth
};

const iconStyle = {
  color: '#808080',
  fontSize: '30px',
  transition: 'color 0.3s, background-color 0.3s',
  borderRadius: '25%',
  padding: '8px',
};

const hoverStyle = {
  backgroundColor: '#6a0dad',
  color: '#ffffff',
};

function NavbarPrimaryWidget() {
  const [hoveredIndex, setHoveredIndex] = useState(-1);

  const handleMouseEnter = (index) => {
    setHoveredIndex(index);
  };

  const handleMouseLeave = () => {
    setHoveredIndex(-1);
  };

  return (
    <div style={{ backgroundColor: '#f3f3f3'}}>
      {/* Add paddingBottom to accommodate the height of the fixed navbar */}
      <nav style={navbarStyle}>
        {[
          faHome,
          faNewspaper,
          faRectangleList,
          faUser,
          faSearch,
        ].map((icon, index) => (
          <FontAwesomeIcon
            key={index}
            icon={icon}
            style={{
              ...iconStyle,
              ...(hoveredIndex === index && hoverStyle),
              fontSize: index >= 2 ? '28px' : '30px',
            }}
            onMouseEnter={() => handleMouseEnter(index)}
            onMouseLeave={handleMouseLeave}
          />
        ))}
      </nav>
    </div>
  );
}

export default NavbarPrimaryWidget;
