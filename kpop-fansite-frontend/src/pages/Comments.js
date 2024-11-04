import React, { useState, useEffect } from 'react';
import { Container, Typography } from '@material-ui/core';
import axios from 'axios';

function Comments() {
  const [comments, setComments] = useState([]);

  useEffect(() => {
    axios.get('/api/comments')
      .then(response => {
        setComments(response.data);
      })
      .catch(error => {
        console.error('Error fetching comments:', error);
      });
  }, []);

  return (
    <Container>
      <Typography variant="h4" gutterBottom>
        Fan Comments
      </Typography>
      {comments.map(comment => (
        <div key={comment.id}>
          <Typography variant="body1">{comment.content}</Typography>
          <Typography variant="caption">By: {comment.user.username}</Typography>
        </div>
      ))}
    </Container>
  );
}

export default Comments; 