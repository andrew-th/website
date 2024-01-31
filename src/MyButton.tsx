import React, { useState } from 'react';
import Button from '@mui/material/Button';

function MyButton() {
  const [buttonColor, setButtonColor] = useState('primary');

  const handleClick = () => {
    // Change the button color to a different color on click
    setButtonColor(buttonColor === 'primary' ? 'secondary' : 'primary');
  };

  return (
    <Button
      variant="contained"
      sx={{
        backgroundColor: buttonColor,
        width: '200px', // Set your desired width
        height: '40px', // Set your desired height
      }}
      onClick={handleClick}
    >
      Click me
    </Button>
  );
};

export default MyButton;