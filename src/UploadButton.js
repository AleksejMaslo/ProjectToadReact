import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import Button from '@material-ui/core/Button';
import { withStyles } from '@material-ui/core/styles';
import CloudUploadIcon from '@material-ui/icons/CloudUpload';

const styles = theme => ({
    button: {
        margin: theme.spacing.unit,
    },
    leftIcon: {
        marginRight: theme.spacing.unit,
    },
    rightIcon: {
        marginLeft: theme.spacing.unit,
    },
    iconSmall: {
        fontSize: 20,
    },
    input: {
        display: 'none',
    },
});

function UploadButton (props) {
    const { classes } = props;
    return (
        <div>
            <input
                accept="image/*"
                className={classes.input}
                id="outlined-button-file"
                multiple
                type="file"
            />
            <label htmlFor="outlined-button-file">
                <Button variant="outlined" color="primary" component="span" className={classes.button}>
                    Upload Avatar
                </Button>
            </label>
        </div>
    );
}

UploadButton.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(UploadButton);
