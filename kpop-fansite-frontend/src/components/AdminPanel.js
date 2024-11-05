import React, { useState, useEffect } from 'react';
import { Container, Typography, List, ListItem, ListItemText } from '@material-ui/core';
import axios from 'axios';

function AdminPanel() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    axios.get('/api/users')
      .then(response => setUsers(response.data))
      .catch(error => console.error('Error fetching users:', error));
  }, []);

  return (
    <Container>
      <Typography variant="h2" gutterBottom>
        Admin Panel
      </Typography>
      <Typography variant="h4" gutterBottom>
        User List
      </Typography>
      <List>
        {users.map(user => (
          <ListItem key={user.id}>
            <ListItemText primary={user.username} secondary={`Email: ${user.email}, Full Name: ${user.fullName}`} />
          </ListItem>
        ))}
      </List>
    </Container>
  );
}

export default AdminPanel;
