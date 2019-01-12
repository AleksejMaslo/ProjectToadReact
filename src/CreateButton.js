import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Fab from '@material-ui/core/Fab';

const styles = theme => ({
    margin: {
        margin: theme.spacing.unit,
    },
    extendedIcon: {
        marginRight: theme.spacing.unit,
    },
});

function CreateButton(props) {
    const { classes } = props;
    return (
        <div>
            <div>
                <Button variant="contained" size="large" color="primary" className={classes.margin}>
                    Create
                </Button>
            </div>
        </div>
    );
}

CreateButton.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(CreateButton);
