import React from 'react';
import './AutoToggle.css';

const AutoToggle = ({onAutoToggle}) => {
        const handleAutoToggle = (info) => {
            if (onAutoToggle) {
                onAutoToggle(info);
            }
        }
    
    return (
      <div className="toggle-container">
        <button className="toggle auto" onClick={() => handleAutoToggle('auto')}>
          Auto
        </button>
        <button className="toggle manual" onClick={() => handleAutoToggle('manual')}>
          Manual
        </button>
      </div>
    );
  };

  export default AutoToggle;
