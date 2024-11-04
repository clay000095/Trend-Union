import React from 'react';
import { AppBar, Toolbar, Typography, Button } from '@material-ui/core';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6" style={{ flexGrow: 1 }}>
          K-pop Fansite
        </Typography>
        <Button color="inherit" component={Link} to="/">Home</Button>
        <Button color="inherit" component={Link} to="/stars">Stars</Button>
        <Button color="inherit" component={Link} to="/comments">Comments</Button>
      </Toolbar>
    </AppBar>
  );
}

export default Header;
