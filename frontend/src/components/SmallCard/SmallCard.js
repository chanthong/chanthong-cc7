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
        height: 100,
    },
});

function SmallCard({place,qty,imgUrl}) {
    const classes = useStyles();

    const history = useHistory();

    // const { setReservePartner } = useContext(UserContext);

    // const onReservePartner = () => {
    //     axios.get(`/partners/${item.id}`)
    //         .then(res => {
    //             alert("go to reserve page");
    //             setReservePartner(res.data.targetPartner);
    //             history.push(`/reserve/${res.data.targetPartner.id}`);
    //         })
    //         .catch(err => {
    //             alert("cannot goto reserve page");
    //         });
    // }
    return (
        <Card className={classes.root}>
            <CardActionArea>
                <CardMedia
                    className={classes.media}
                    image={imgUrl}
                    title="Contemplative Reptile"
                />
                <CardContent>
                    <Typography color="textSecondary" gutterBottom>
                        {place}
                    </Typography>
                    <Typography variant="body2" color="textSecondary">
                        <span>จำนวน</span>
                        <span style={{marginLeft:'5px'}}>{qty}</span>
                        <span style={{marginLeft:'5px'}}>ร้าน</span>
                    </Typography>
                </CardContent>
            </CardActionArea>
        </Card>
    )
}

export default SmallCard
