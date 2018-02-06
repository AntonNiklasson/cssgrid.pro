import React, { Component } from 'react';
import glamorous, { Sub } from 'glamorous';

const Button = glamorous.button({
  background: 'linear-gradient(206deg, #ff0089, #cdff00)',
  padding: '.7em 1.5em',
  fontSize: 23,
  fontWeight: 'bold',
  textTransform: 'uppercase',
  color: 'white',
  border: '3px solid #cdff00',
  borderRadius: 15,
  userSelect: 'none',
  boxShadow: '0px 13px 20px -9px rgba(0, 0, 0, 0.3)',
  opacity: 0,
  transition: 'all 300ms',
  position: 'relative',

  '&:hover': {
    borderColor: '#ff0089',
  },

  '&.visible': {
    opacity: 1,
  },
});

const SubmitButton = ({ visible, onClick }) => {
  return (
    <Button onClick={onClick} className={visible ? 'visible' : ''}>
      Sign me up! 🎉
    </Button>
  );
};

export default SubmitButton;
