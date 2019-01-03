import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {withStyles} from '@material-ui/core/styles';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import Button from '@material-ui/core/Button';
import {getUrl} from './config/ServerConfiguration';

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

class Spells extends React.Component {
    state = {
        spells: []
    };

    async componentDidMount()
    {
        this.doListSearch();
    }

    doListSearch = async () => {
        const url = getUrl("api/spells");
        const response = await fetch(url);
        const spells = await response.json();
        this.setState({spells: spells});
    };
    render() {
        let {classes} = this.props;
        classes = classes ? classes : {root: '', table: ''};
        return (
            <div>
                <h1>Spells</h1>
                {this.state.spells.map(spell => {
                    return (
                        <div>
                            <div className={classes.root}>
                                <ExpansionPanel>
                                    <ExpansionPanelSummary expandIcon={<ExpandMoreIcon/>}>
                                        <Typography className={classes.heading}>{spell.name}</Typography>
                                    </ExpansionPanelSummary>
                                    <ExpansionPanelDetails>
                                        <Typography>
                                            {spell.description}
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
}

Spells.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Spells);
