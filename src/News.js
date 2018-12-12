import React from 'react';
import PropTypes from 'prop-types';
import {withStyles} from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const styles = theme => ({
    card: {
        maxWidth: 345,
        padding: theme.spacing.unit * 2,
        textAlign: 'center',
        color: theme.palette.text.secondary,
    },
    media: {
        // ⚠️ object-fit is not supported by IE 11.
        objectFit: 'cover',
    },
    root: {
        flexGrow: 1,
    },
});

function AutoGrid(props) {
    const {classes} = props;

    return (
        <div className={classes.root}>
            <Card className={classes.card}>
                <CardActionArea>
                    <CardMedia
                        component="img"
                        alt="Contemplative Reptile"
                        className={classes.media}
                        height="250"
                        image="https://i.pinimg.com/originals/6d/4c/e6/6d4ce6955f599c6cb4eae7b673c5a856.jpg"
                        title="Contemplative Reptile"
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="h2">
                            Barbarian
                        </Typography>
                        <Typography component="p">
                            Whatever drives them, humans are the innovators, the achievers, and the
                            pioneers of the worlds.
                        </Typography>
                    </CardContent>
                </CardActionArea>
                <CardActions>
                    <Button size="small" color="primary">
                        Learn More About
                    </Button>
                </CardActions>
            </Card>
        </div>
    );
}

AutoGrid.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(AutoGrid);