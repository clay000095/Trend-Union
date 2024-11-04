import React from 'react';
import { Container, Typography } from '@material-ui/core';

function Footer() {
  return (
    <Container style={{ marginTop: 'auto', padding: '20px 0' }}>
      <Typography variant="body2" color="textSecondary" align="center">
        © 2024 K-pop Fansite. All rights reserved.
      </Typography>
    </Container>
  );
}

export default Footer; 