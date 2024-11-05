import React from 'react';
import { Grid, Card, CardContent, CardMedia, Typography } from '@material-ui/core';

function StarList({ stars }) {
    console.log('Stars data:', stars);

    return (
        <>
            {stars && stars.map((star) => (
                <Grid item key={star.id} xs={12} sm={6} md={4}>
                    <Card>
                        <CardMedia
                            component="img"
                            height="140"
                            image={star.imageUrl || 'https://via.placeholder.com/400'}
                            alt={star.name}
                        />
                        <CardContent>
                            <Typography gutterBottom variant="h5" component="h2">
                                {star.name}
                            </Typography>
                            <Typography variant="body2" color="textSecondary">
                                Group: {star.groupName}
                            </Typography>
                            <Typography variant="body2" color="textSecondary">
                                Position: {star.position}
                            </Typography>
                            <Typography variant="body2">
                                {star.description}
                            </Typography>
                        </CardContent>
                    </Card>
                </Grid>
            ))}
        </>
    );
}

export default StarList;
