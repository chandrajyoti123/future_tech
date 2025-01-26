import React from 'react';
import { Box } from '@mui/material';
import { styled } from '@mui/material/styles';


const Container = ({ children, bgcolor , px , py}) => {
  const Container = styled(Box)(({ theme }) => ({
   backgroundColor:bgcolor,
   px:px,
   py:py

    
  }));

  return <Container>{children}</Container>;
};

export default Container;
