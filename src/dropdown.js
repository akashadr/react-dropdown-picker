import React, { useState } from 'react';

const CustomSelect = ({ options, defaultOption, onSelect, width, zIndex, isUpward, selectedOptionStyle, dropdownItemStyle }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState(defaultOption || (options.length > 0 ? options[0].label : ''));

  const toggleOpen = () => {
    setIsOpen(!isOpen);
  };

  const handleOptionClick = (option) => {
    setSelectedOption(option.label);
    onSelect(option.value);
    toggleOpen();
  };

  const dropdownStyle = {
    position: 'absolute',
    zIndex: zIndex || 1, 
    width: `${width}px`,
    [isUpward ? 'bottom' : 'top']: isUpward ? '100%' : '34px',
    left: 0,
    backgroundColor: '#FFFFFF',
  };

  const renderOptions = () => {
    const filteredOptions = options.filter((option) => option.label !== selectedOption);
    if (isUpward) {
      return filteredOptions.map((option) => (
        <div
          key={option.label}
          style={{
            width: `${width}px`,
            padding: '6px 12px',
            cursor: 'pointer',
            textAlign: 'center',
            borderRadius: '14.97px',
            border: '0.65px solid gray',
            ...dropdownItemStyle,
            marginBottom: '5px', 
          }}
          onClick={() => handleOptionClick(option)}
        >
          {option.label}
        </div>
      )).reverse(); 
    } else {
      return filteredOptions.map((option, index) => (
        <div
          key={option.label}
          style={{
            width: `${width}px`,
            padding: '6px 12px',
            cursor: 'pointer',
            textAlign: 'center',
            borderRadius: '14.97px',
            border: '0.65px solid gray',
            ...dropdownItemStyle,
            marginTop: index > 0 ? '5px':'0px',
          }}
          onClick={() => handleOptionClick(option)}
        >
          {option.label}
        </div>
      ));
    }
  };

  return (
    <div style={{ position: 'relative', display: 'inline-block', margin: 300 }}>
      <div
        style={{
          width: `${width}px`,
          borderRadius: '14.97px',
          border: '0.65px solid #343434',
          padding: '6px 12px',
          textAlign: 'center',
          cursor: 'pointer',
          ...selectedOptionStyle,
        }}
        onClick={toggleOpen}
      >
        {selectedOption}
      </div>
      {isOpen && (
        <div style={dropdownStyle}>
          {renderOptions()}
        </div>
      )}
    </div>
  );
};

CustomSelect.defaultProps = {
  selectedOptionStyle: {
    backgroundColor: '#343434',
    color: '#FFFFFF',
    fontSize: '12px',
    fontWeight: '600',
    borderRadius: '14.97px',
    border: '0.65px solid #343434',
    borderWidth: '0.65px', 
    borderColor: '#343434',
  },
  dropdownItemStyle: {
    color: '#343434',
    fontSize: '12px',
    fontWeight: '600',
    borderRadius: '14.97px',
    border: '0.65px solid gray',
    borderWidth: '0.65px', 
    borderColor: 'gray',
  }
};

export default CustomSelect;
