import React from 'react';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import { Container, Box, Typography } from '@material-ui/core';
import LargeCard from '../LargeCard/LargeCard';
import { BASE_BACKEND_URL } from '../../config/constants'

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


function LargeThemeItem({ textColor, placeLabel, cardData }) {
    const classes = useStyles();


    return (
        <Container className={classes.cardGrid} maxWidth="lg">
            <Typography variant="h5">{placeLabel}</Typography>
            <Box className={classes.box} style={{ borderBottom: `2px solid ${textColor}` }} />
            <Grid container spacing={2}>
                {cardData.map((data) => (
                    <Grid item key={data.id} xs={12} sm={3} md={3} lg={3}>
                        <LargeCard
                            title={data.Partner.restaurant_name}
                            place={data.Partner.district}
                            restTheme={data.Category.type_Restaurant}
                            qty={data.Partner.Reserves.length}
                            imgUrl={`${BASE_BACKEND_URL}/${data.Partner.partners_picture}`}
                        />
                    </Grid>
                ))}
            </Grid>
        </Container>
    )
}

export default LargeThemeItem