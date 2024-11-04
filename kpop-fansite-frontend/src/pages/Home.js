import React from 'react';
import { Container, Typography } from '@material-ui/core';

function Home() {
  return (
    <Container>
      <Typography variant="h2" component="h1" gutterBottom>
        Welcome to K-pop Fansite
      </Typography>
      <Typography variant="body1">
        Your ultimate destination for K-pop stars and fan community!
      </Typography>
    </Container>
  );
}

export default Home; 