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

class Items extends React.Component {
    state = {
        items: []
    };

    async componentDidMount()
    {
        this.doListSearch();
    }

    doListSearch = async () => {
        const url = getUrl("api/items");
        const response = await fetch(url);
        const items = await response.json();
        this.setState({items: items});
    };

    render() {
        let {classes} = this.props;
        classes = classes ? classes : {root: '', table: ''};
        return (
            <div>
                <h1>Items</h1>
                {this.state.items.map(item => {
                    return (
                        <div>
                            <div className={classes.root}>
                                <ExpansionPanel>
                                    <ExpansionPanelSummary expandIcon={<ExpandMoreIcon/>}>
                                        <Typography className={classes.heading}>{item.name}</Typography>
                                    </ExpansionPanelSummary>
                                    <ExpansionPanelDetails>
                                        <Typography>
                                            {item.description}
                                        </Typography>
                                        <Button variant="contained" color="primary" className={classes.button}>
                                            View Details Page
                                        </Button>
                                    </ExpansionPanelDetails>
                                </ExpansionPanel>
                            </div>
                        </div>
                    );
                })}
            </div>
        );
    }
}


Items.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Items);