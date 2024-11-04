import React from 'react';
import { 
  Grid, 
  Card, 
  CardContent, 
  CardMedia, 
  Typography, 
  makeStyles,
  CardActions,
  Button,
  Chip
} from '@material-ui/core';
import { Favorite, Instagram, Twitter } from '@material-ui/icons';

const useStyles = makeStyles((theme) => ({
  card: {
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
    transition: 'transform 0.2s, box-shadow 0.2s',
    '&:hover': {
      transform: 'translateY(-5px)',
      boxShadow: theme.shadows[8],
    },
  },
  cardMedia: {
    paddingTop: '100%', // Square aspect ratio
    position: 'relative',
  },
  cardContent: {
    flexGrow: 1,
  },
  groupName: {
    position: 'absolute',
    top: theme.spacing(2),
    right: theme.spacing(2),
    backgroundColor: 'rgba(0, 0, 0, 0.6)',
    color: 'white',
  },
  position: {
    margin: theme.spacing(0.5),
  },
  actions: {
    justifyContent: 'space-between',
    padding: theme.spacing(2),
  },
  socialButton: {
    marginLeft: theme.spacing(1),
  },
}));

function StarList({ stars }) {
  const classes = useStyles();

  return (
    <>
      {stars.map((star) => (
        <Grid item key={star.id} xs={12} sm={6} md={4}>
          <Card className={classes.card}>
            <CardMedia
              className={classes.cardMedia}
              image={star.imageUrl || 'https://via.placeholder.com/400'}
              title={star.name}
            >
              <Chip
                label={star.groupName}
                className={classes.groupName}
              />
            </CardMedia>
            <CardContent className={classes.cardContent}>
              <Typography gutterBottom variant="h5" component="h2">
                {star.name}
              </Typography>
              <Typography variant="body2" color="textSecondary" gutterBottom>
                {star.birthDate}
              </Typography>
              <Chip
                label={star.position}
                variant="outlined"
                size="small"
                className={classes.position}
              />
              <Typography variant="body2" color="textSecondary" paragraph>
                {star.description}
              </Typography>
            </CardContent>
            <CardActions className={classes.actions}>
              <Button
                startIcon={<Favorite />}
                color="secondary"
                variant="contained"
              >
                Like
              </Button>
              <div>
                <Button
                  className={classes.socialButton}
                  size="small"
                  startIcon={<Instagram />}
                >
                  Instagram
                </Button>
                <Button
                  className={classes.socialButton}
                  size="small"
                  startIcon={<Twitter />}
                >
                  Twitter
                </Button>
              </div>
            </CardActions>
          </Card>
        </Grid>
      ))}
    </>
  );
}

export default StarList;
