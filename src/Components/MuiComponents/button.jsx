import React from 'react';
import Button from '@mui/material/Button';

export default function ButtonCmp({text, onClick }) {  
  return (
    <Button
    variant='contained'
    color='primary'
    onClick={onClick}
    >
    {text}
    </Button>
  );
}