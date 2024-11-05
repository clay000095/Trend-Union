import React from 'react';
import { Container, Typography } from '@material-ui/core';

function Home() {
  return (
    <Container>
      <Typography variant="h2" gutterBottom>
        Welcome to K-pop Fan Site
      </Typography>
      <Typography variant="body1">
        Explore your favorite K-pop stars and join our community!
      </Typography>
    </Container>
  );
}

export default Home;
