import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {withStyles} from '@material-ui/core/styles';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import Button from '@material-ui/core/Button';

const styles = theme => ({
    root: {
        width: '100%',
    },
    heading: {
        fontSize: theme.typography.pxToRem(15),
        fontWeight: theme.typography.fontWeightRegular,
    },
    button: {
        margin: theme.spacing.unit,
    },
});

const filling = {
    name: "Backpack",
    title: "Contemplative Reptile",
    type: "Gear",
    description: "A backpack is a leather pack carried on the back, typically with straps to secure it. A backpack can hold 1 cubic foot/ 30 pounds of gear.\n" +
    "\n" + "You can also strap items, such as a bedroll or a coil of rope, to the outside of a backpack.",
};

const ItemList = [filling, filling, filling];


const Items = (props) => {
    const {classes} = props;
    return (
        <div>
            <h1>Items</h1>
            {ItemList.map(filling => {
                return (
                    <div>
                        <div className={classes.root}>
                            <ExpansionPanel>
                                <ExpansionPanelSummary expandIcon={<ExpandMoreIcon/>}>
                                    <Typography className={classes.heading}>{filling.name}</Typography>
                                </ExpansionPanelSummary>
                                <ExpansionPanelDetails>
                                    <Typography>
                                        {filling.description}
                                    </Typography>
                                    <Button variant="contained" color="primary" className={classes.button}>
                                        View Details Page
                                    </Button>
                                </ExpansionPanelDetails>
                            </ExpansionPanel>
                        </div>
                    </div>
                )
            })}
        </div>
    );
};


Items.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Items);