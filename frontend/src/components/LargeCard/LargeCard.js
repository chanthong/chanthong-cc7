import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
    root: {
        maxWidth: 345,
    },
    media: {
        height: 140,
    },
    textHeader: {
        height: 80,
        overflow: 'hidden'
    },
});

function LargeCard({ title, place, restTheme, qty, imgUrl }) {
    const classes = useStyles();

    return (
        <Card className={classes.root}>
            <CardActionArea>
                <CardMedia
                    className={classes.media}
                    image={imgUrl}
                    title="Contemplative Reptile"
                />
                <CardContent>
                    <Typography className={classes.textHeader} color="textSecondary" gutterBottom >
                        {title}
                    </Typography>
                    <div style={{ display: 'flex' }}>
                        <Typography variant="body2" color="textSecondary">
                            {place}
                        </Typography>
                        <Typography variant="body2" color="textSecondary" style={{ margin: '0 5px' }}>
                            ●
                    </Typography>
                        <Typography variant="body2" color="textSecondary">
                            {restTheme}
                        </Typography>
                    </div>
                    <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                        <Typography variant="body2" color="textSecondary">
                            <span>จอง</span>
                            <span style={{ marginLeft: '5px' }}>{qty}</span>
                            <span style={{ marginLeft: '5px' }}>ครั้ง</span>
                        </Typography>
                        {/* <Typography variant="body2" color="textSecondary">
                        *****
                    </Typography> */}
                    </div>
                </CardContent>
            </CardActionArea>
        </Card>
    )
}

export default LargeCard
