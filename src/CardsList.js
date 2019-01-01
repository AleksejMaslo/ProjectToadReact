import React from 'react';
import PropTypes from 'prop-types';
import {withStyles} from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const card = {
    image: "https://i.pinimg.com/originals/6d/4c/e6/6d4ce6955f599c6cb4eae7b673c5a856.jpg",
    title: "Contemplative Reptile",
    name: "Barbarian",
    description: "Whatever drives them, humans are the innovators, the achievers, and the pioneers of the worlds.",
};

const raceList = [card, card, card];
const classList = [card, card, card];
const monsterList = [card, card, card];

const styles = theme => ({
    root: {
        flexGrow: 1,
    },
    card: {
        maxWidth: 345,
        color: theme.palette.text.secondary,
    },
});

const DescriptionCardComponent = (props) => {
    const {classes} = props;

    return (
            <Card className={classes.card}>
                <CardActionArea>
                    <CardMedia
                        component="img"
                        alt="Contemplative Reptile"
                        className={classes.media}
                        image={card.image}
                        title={card.title}
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="h2">
                            {card.name}
                        </Typography>
                        <Typography component="p">
                            {card.description}
                        </Typography>
                    </CardContent>
                </CardActionArea>
                <CardActions>
                    <Button size="small" color="primary">
                        Learn More About
                    </Button>
                </CardActions>
            </Card>
    )
};

DescriptionCardComponent.propTypes = {
    classes: PropTypes.object.isRequired,
};

function FormRow(props) {
    const {cardList} = props;
    return (
        <React.Fragment>
            {cardList.map(card => {
                return (
                    <Grid item xs={4}>
                        <DescriptionCard classes={card}/>
                    </Grid>
                )
            })}
        </React.Fragment>
    );
}

FormRow.propTypes = {
    cardList: PropTypes.arrayOf(PropTypes.object).isRequired
};

function NestedGrid(props) {
    const {classes} = props;

    return (
        <div className={classes.root}>
            <Grid container spacing={8}>
                <h1>Races Latest Updates</h1>
                <Grid container item xs={12} spacing={24}>
                    <FormRow classes={classes} cardList={raceList}/>
                </Grid>
                <h1>Classes Latest Updates</h1>
                <Grid container item xs={12} spacing={24}>
                    <FormRow classes={classes} cardList={classList}/>
                </Grid>
                <h1>Monsters Latest Updates</h1>
                <Grid container item xs={12} spacing={24}>
                    <FormRow classes={classes} cardList={monsterList}/>
                </Grid>
            </Grid>
        </div>
    );
}

NestedGrid.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(NestedGrid);
export const DescriptionCard = withStyles(styles)(DescriptionCardComponent);