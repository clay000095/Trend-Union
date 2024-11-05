import React, { useState, useEffect } from 'react';
import { Container, Typography, Grid } from '@material-ui/core';
import axios from 'axios';
import StarList from '../components/StarList';

function Stars() {
  const [stars, setStars] = useState([]);

  useEffect(() => {
    const fetchStars = async () => {
      try {
        const response = await axios.get('/api/stars');
        setStars(response.data);
      } catch (error) {
        console.error('Error fetching stars:', error);
      }
    };

    fetchStars();
  }, []);

  return (
    <Container>
      <Typography variant="h2" component="h1" gutterBottom>
        K-pop Stars
      </Typography>
      <Grid container spacing={3}>
        <StarList stars={stars} />
      </Grid>
    </Container>
  );
}

export default Stars; 