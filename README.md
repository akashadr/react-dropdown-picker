# react-dropdown-picker

# CustomSelect Component

A customizable dropdown component for selecting options.
![](https://github.com/akashadr/react-dropdown-picker/blob/main/gifs/react-dropdown-picker-first.gif)
![](https://github.com/akashadr/react-dropdown-picker/blob/main/gifs/react-dropdown-picker-second.gif)


## Installation

```markdown
npm install react-dropdown-picker  # using npm
yarn add react-dropdown-picker     # using yarn
```

## Features

- Configurable via props.
- Stylable via css (or custom components).
- Best dropdown for small number of options.
- Zero Dependency
- Small bundle size.

## Example Usage

```jsx
import React, { useState } from 'react';
import CustomSelect from 'react-dropdown-picker';

const MyComponent = () => {
  const [selectedRange, setSelectedRange] = useState('1 W');

  const handleRangeChange = (range) => {
    setSelectedRange(range);
    console.log("Range: ", range);
  };

  const options = [
    { value: 7, label: '1 W' },
    { value: 14, label: '2 W' },
    { value: 21, label: '3 W' },
    { value: 30, label: '1 M' },
    { value: 180, label: '6 M' },
    { value: 365, label: '1 Y' }
  ];

  return (
    <div>
      <CustomSelect
        options={options}
        defaultOption={selectedRange}
        onSelect={handleRangeChange}
      />
    </div>
  );
};

export default MyComponent;
```


## Props

| Name              | Type       | Default    | Description                                                                                                               |
| ----------------- | ---------- | ---------- | ------------------------------------------------------------------------------------------------------------------------- |
| `options`         | array      | []         | An array of objects representing the options for the dropdown. Each object should have `value` and `label` properties. |
| `defaultOption`   | string     |            | The default selected option label.                                                                                       |
| `onSelect`        | function   |            | A function to be called when an option is selected. It receives the selected option's value as an argument.              |
| `width`           | number     |            | The width of the dropdown in pixels.                                                                                     |
| `zIndex`          | number     | 1          | The z-index of the dropdown.                                                                                             |
| `isUpward`        | boolean    | false      | Determines whether the dropdown should open upward or downward.                                                          |
| `selectedOptionStyle` | object  |            | Custom styles for the selected option.                                                                                   |
| `dropdownItemStyle`   | object  |            | Custom styles for the dropdown items.   
                                                       |

### `selectedOptionStyle` Properties

| Name           | Type     | Default    | Description                                                                                          |
| -------------- | -------- | ---------- | ---------------------------------------------------------------------------------------------------- |
| `backgroundColor` | string | '#BC7AF9'  | The background color of the selected option.                                                        |
| `color`        | string   | '#FFFFFF'  | The text color of the selected option.                                                               |
| `fontSize`     | string   | '14px'     | The font size of the selected option.                                                                |
| `fontWeight`   | string   | 'bold'     | The font weight of the selected option.                                                              |
| `borderRadius` | string   | '10px'     | The border radius of the selected option.                                                            |
| `borderWidth`  | string   | '0.65px'   | The border width of the selected option.                                                             |
| `borderColor`  | string   | '#BC7AF9'  | The border color of the selected option.                                                             |

### `dropdownItemStyle` Properties

| Name           | Type     | Default    | Description                                                                                          |
| -------------- | -------- | ---------- | ---------------------------------------------------------------------------------------------------- |
| `backgroundColor` | string | '#BC7AF9'  | The background color of the dropdown items.                                                          |
| `color`        | string   | '#FFFFFF'  | The text color of the dropdown items.                                                                 |
| `fontSize`     | string   | '14px'     | The font size of the dropdown items.                                                                  |
| `fontWeight`   | string   | 'bold'     | The font weight of the dropdown items.                                                                |
| `borderRadius` | string   | '10px'     | The border radius of the dropdown items.                                                              |
| `borderWidth`  | string   | '0.65px'   | The border width of the dropdown items.                                                               |
| `borderColor`  | string   | '#BC7AF9'  | The border color of the dropdown items.                                                               |

## Customization 

```jsx
import CustomSelect from 'react-dropdown-picker';
import React, { useState } from 'react';

const MyComponent = () => {
  const [selectedRange, setSelectedRange] = useState('1 W');

  const handleRangeChange = (range) => {
    setSelectedRange(range);
    console.log("Range: ", range);
  };

  const options = [
    { value: 7, label: '1 W' },
    { value: 14, label: '2 W' },
    { value: 21, label: '3 W' },
    { value: 30, label: '1 M' },
    { value: 180, label: '6 M' },
    { value: 365, label: '1 Y' }
  ];

  const selectedOptionStyle = {
    backgroundColor: '#BC7AF9',
    color: '#FFFFFF',
    fontSize: '14px',
    fontWeight: 'bold',
    borderRadius: '10px',
    borderWidth: '0.65px', 
    borderColor: '#BC7AF9', 
  };
  
  const dropdownItemStyle = {
    backgroundColor: '#BC7AF9',
    color: '#FFFFFF',
    fontSize: '14px',
    fontWeight: 'bold',
    borderRadius: '10px',
    borderWidth: '0.65px', 
    borderColor: '#BC7AF9', 
  };

  return (
    <div>
      <CustomSelect
        options={options}
        defaultOption={selectedRange}
        onSelect={handleRangeChange}
        width={100}
        zIndex={1}
        isUpward={true}
        selectedOptionStyle={selectedOptionStyle}
        dropdownItemStyle={dropdownItemStyle}
      />
    </div>
  );
};

export default MyComponent;

```