import React, { useContext } from 'react';
import { BASE_BACKEND_URL } from '../../config/constants'
import axios from '../../config/axios';
import { notification } from 'antd';
import { useHistory } from 'react-router-dom';
import UserContext from '../../context/UserContext';

//MUI
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import CardActionArea from '@material-ui/core/CardActionArea';
import Grid from 'antd/lib/card/Grid';

const useStyles = makeStyles({
    root: {
        maxWidth: 150,
    },
    media: {
        height: 140,
    },
});

function ResturantCard({ item }) {
    const classes = useStyles();

    const history = useHistory();

    const { setReservePartner } = useContext(UserContext);

    const onReservePartner = () => {
        axios.get(`/partners/${item.id}`)
            .then(res => {
                alert("go to reserve page");
                setReservePartner(res.data.targetPartner);
                history.push(`/reserve/${res.data.targetPartner.id}`);
            })
            .catch(err => {
                alert("cannot goto reserve page");
            });
    }
    return (
        <Card className={classes.root}>
            <CardActionArea>
                <CardMedia
                    className={classes.media}
                    image="https://source.unsplash.com/random"
                    title="Contemplative Reptile"
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="h2">
                        Lizard
          </Typography>
                    <Typography variant="body2" color="textSecondary" component="p">
                        Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
                        across all continents except Antarctica
          </Typography>
                    <Grid container  className={classes.root} spacing={2}>
                        <Grid item xs={3}>
                            <Typography paragraph>
                                Heat oil in a (14- to 16-inch)
          </Typography>
                        </Grid>
                        <Grid item>
                            <Typography paragraph>
                                Heat oil in a (14- to 16-inch)
          </Typography>
                        </Grid>
                    </Grid>
                </CardContent>
            </CardActionArea>
        </Card>
    )
}

export default ResturantCard
