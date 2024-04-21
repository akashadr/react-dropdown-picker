// import React, { useState } from 'react';
// import CustomSelect from './dropdown';

// const App = () => {
//   const [selectedRange, setSelectedRange] = useState('1 W');

//   const handleRangeChange = (range) => {
//     setSelectedRange(range);
//     console.log(range);
//   };

//   const options = [
//     { value: 7, label: '1 W' },
//     { value: 14, label: '2 W' },
//     { value: 21, label: '3 W' },
//     { value: 30, label: '1 M' },
//     { value: 365, label: '1 Y' }
//   ];

//   const selectedOptionStyle = {
//     backgroundColor: '#BC7AF9',
//     color: '#FFFFFF',
//     fontSize: '14px',
//     fontWeight: 'bold',
//     borderRadius: '10px',
//     borderWidth: '0.65px', 
//     borderColor: '#BC7AF9', 
//   };
  
//   const dropdownItemStyle = {
//     backgroundColor: '#BC7AF9',
//     color: '#FFFFFF',
//     fontSize: '14px',
//     fontWeight: 'bold',
//     borderRadius: '10px',
//     borderWidth: '0.65px', 
//     borderColor: '#BC7AF9', 
//   };

//   return (
//     <div>
//       <CustomSelect
//         options={options}
//         defaultOption={selectedRange}
//         onSelect={handleRangeChange}
//         width={30}
//         zIndex={1}
//         // isUpward={true}
//         // selectedOptionStyle={selectedOptionStyle}
//         // dropdownItemStyle={dropdownItemStyle}
//       />
//     </div>
//   );
// };

// export default App;
import React, { useState } from 'react';
import CustomSelect from './dropdown';
const App = () => {
  const [selectedRange, setSelectedRange] = useState('1 W');
  const handleRangeChange = range => {
    setSelectedRange(range);
    console.log(range);
  };
  const options = [{
    value: 7,
    label: '1 W'
  }, {
    value: 14,
    label: '2 W'
  }, {
    value: 21,
    label: '3 W'
  }, {
    value: 30,
    label: '1 M'
  }, {
    value: 365,
    label: '1 Y'
  }];
  const selectedOptionStyle = {
    backgroundColor: '#BC7AF9',
    color: '#FFFFFF',
    fontSize: '14px',
    fontWeight: 'bold',
    borderRadius: '10px',
    borderWidth: '0.65px',
    borderColor: '#BC7AF9'
  };
  const dropdownItemStyle = {
    backgroundColor: '#BC7AF9',
    color: '#FFFFFF',
    fontSize: '14px',
    fontWeight: 'bold',
    borderRadius: '10px',
    borderWidth: '0.65px',
    borderColor: '#BC7AF9'
  };
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(CustomSelect, {
    options: options,
    defaultOption: selectedRange,
    onSelect: handleRangeChange,
    width: 30,
    zIndex: 1
    // isUpward={true}
    // selectedOptionStyle={selectedOptionStyle}
    // dropdownItemStyle={dropdownItemStyle}
  }));
};
export default App;
