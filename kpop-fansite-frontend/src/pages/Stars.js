import React, { useState, useEffect } from 'react';
import { 
  Container, 
  Grid, 
  Typography, 
  TextField, 
  FormControl, 
  InputLabel, 
  Select, 
  MenuItem,
  Box
} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import axios from 'axios';
import StarList from '../components/StarList';

const useStyles = makeStyles((theme) => ({
  header: {
    marginTop: theme.spacing(4),
    marginBottom: theme.spacing(4),
  },
  filters: {
    marginBottom: theme.spacing(4),
  },
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
}));

function Stars() {
  const classes = useStyles();
  const [stars, setStars] = useState([]);
  const [filteredStars, setFilteredStars] = useState([]);
  const [groups, setGroups] = useState([]);
  const [selectedGroup, setSelectedGroup] = useState('');
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    axios.get('/api/stars')
      .then(response => {
        setStars(response.data);
        setFilteredStars(response.data);
        // Extract unique group names
        const uniqueGroups = [...new Set(response.data.map(star => star.groupName))];
        setGroups(uniqueGroups);
      })
      .catch(error => {
        console.error('Error fetching stars:', error);
      });
  }, []);

  useEffect(() => {
    let result = stars;
    
    if (selectedGroup) {
      result = result.filter(star => star.groupName === selectedGroup);
    }
    
    if (searchTerm) {
      result = result.filter(star => 
        star.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        star.description.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }
    
    setFilteredStars(result);
  }, [selectedGroup, searchTerm, stars]);

  return (
    <Container>
      <Typography variant="h2" component="h1" align="center" className={classes.header}>
        K-pop Stars
      </Typography>

      <Box className={classes.filters}>
        <Grid container spacing={3} alignItems="center">
          <Grid item xs={12} md={6}>
            <TextField
              fullWidth
              label="Search Stars"
              variant="outlined"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </Grid>
          <Grid item xs={12} md={6}>
            <FormControl variant="outlined" fullWidth>
              <InputLabel>Group</InputLabel>
              <Select
                value={selectedGroup}
                onChange={(e) => setSelectedGroup(e.target.value)}
                label="Group"
              >
                <MenuItem value="">
                  <em>All Groups</em>
                </MenuItem>
                {groups.map(group => (
                  <MenuItem key={group} value={group}>{group}</MenuItem>
                ))}
              </Select>
            </FormControl>
          </Grid>
        </Grid>
      </Box>

      <Grid container spacing={3}>
        <StarList stars={filteredStars} />
      </Grid>
    </Container>
  );
}

export default Stars; 