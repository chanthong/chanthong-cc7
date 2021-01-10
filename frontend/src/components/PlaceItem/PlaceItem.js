import React from 'react';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import { Container, Box, Typography } from '@material-ui/core';
import SmallCard from '../SmallCard/SmallCard';

const useStyles = makeStyles((theme) => ({
  cardGrid: {
    paddingTop: theme.spacing(2),
    paddingBottom: theme.spacing(2),
  },
  box: {
    width: '50px',
    height: '2px',
    marginBottom: '10px'
  }
}));


function PlaceItem({ textColor, placeLabel, cardData }) {
  const classes = useStyles();
  // const items = [
  //   { id: 1, placeName: 'สยาม', qty: 56 },
  //   { id: 2, placeName: 'สมุทรปราการ', qty: 45 },
  //   { id: 3, placeName: 'ราชเทวี', qty: 78 },
  //   { id: 4, placeName: 'อโศก', qty: 91 },
  //   { id: 5, placeName: 'สาทร', qty: 34 },
  //   { id: 6, placeName: 'ศรีลม', qty: 52 },
  //   { id: 7, placeName: 'นนทบุรี', qty: 61 },
  //   { id: 8, placeName: 'ประตูน้ำ', qty: 36 },
  // ];
  return (
    <Container className={classes.cardGrid} maxWidth="lg">
      {console.log(cardData)}
      <Typography variant="h5">{placeLabel}</Typography>
      <Box className={classes.box} style={{ borderBottom: `2px solid ${textColor}` }} />
      <Grid container>
        {cardData.map((data) => (
          <Grid item key={data.id} xs={12} sm={3} md={3} lg={2}>
            <SmallCard
              place={data.placeName}
              qty={data.qty}
            />
          </Grid>
        ))}
      </Grid>
    </Container>
  )
}

export default PlaceItem
