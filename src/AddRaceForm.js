import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import {withStyles} from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import MenuItem from '@material-ui/core/MenuItem';
import Button from '@material-ui/core/Button';
import {getUrl} from './config/ServerConfiguration';
import CheckboxLabel from './CheckBox';
import UploadButton from './UploadButton';

const styles = theme => ({
    container: {
        display: 'flex',
        flexWrap: 'wrap',
    },
    textField: {
        marginLeft: theme.spacing.unit,
        marginRight: theme.spacing.unit,
    },
    dense: {
        marginTop: 16,
    },
    menu: {
        width: 200,
    },
});

const size = [
    {
        value: 'Gargantuan',
        label: 'Gargantuan',
    }, {
        value: 'Huge',
        label: 'Huge',
    }, {
        value: 'Large',
        label: 'Large',
    },
    {
        value: 'Medium',
        label: 'Medium',
    },
    {
        value: 'Small',
        label: 'Small',
    },
    {
        value: 'Tiny',
        label: 'Tiny',
    },
];

class NewAddField extends React.Component {
    state = {
        name: '',
        size: '',
        SpeedWalking: '',
        SpeedBurrowing: '',
        SpeedClimbing: '',
        SpeedFlying: '',
        SpeedSwimming: '',
    };

    addRace = async (formData) => {
        const url = getUrl("api/races");
        const requestSettings = {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(formData)
        };
        await fetch(url, requestSettings);
    };

    handleChange = name => event => {
        this.setState({
            [name]: event.target.value,
        });
    };

    render() {
        const {classes} = this.props;

        return (
            <div>
                <form className={classes.container} noValidate autoComplete="off">
                    <TextField
                        required
                        id="outlined-name"
                        label="Name"
                        className={classes.textField}
                        value={this.state.name}
                        onChange={this.handleChange('name')}
                        margin="normal"
                        variant="outlined"
                    />
                    <TextField
                        required
                        select
                        className={classNames(classes.textField)}
                        variant="outlined"
                        label="Size"
                        margin="normal"
                        value={this.state.size}
                        onChange={this.handleChange('size')}>
                        {size.map(option => (
                            <MenuItem key={option.value} value={option.value}>
                                {option.label}
                            </MenuItem>
                        ))}
                    </TextField>
                    <TextField
                        required
                        id="outlined-adornment-SpeedWalking"
                        className={classNames(classes.textField)}
                        variant="outlined"
                        label="Speed Walking"
                        value={this.state.speedWalking}
                        onChange={this.handleChange('speedWalking')}
                        placeholder="10,20,30, etc."
                        margin="normal"
                    />
                    <TextField
                        id="outlined-adornment-SpeedBurrowing"
                        className={classNames(classes.textField)}
                        variant="outlined"
                        label="Speed Burrowing"
                        value={this.state.speedBurrowing}
                        onChange={this.handleChange('speedBurrowing')}
                        placeholder="10,20,30, etc."
                        margin="normal"
                    />
                    <TextField
                        id="outlined-adornment-SpeedClimbing"
                        className={classNames(classes.textField)}
                        variant="outlined"
                        label="Speed Climbing"
                        value={this.state.speedClimbing}
                        onChange={this.handleChange('speedClimbing')}
                        placeholder="10,20,30, etc."
                        margin="normal"
                    />
                    <TextField
                        id="outlined-adornment-SpeedFlying"
                        className={classNames(classes.textField)}
                        variant="outlined"
                        label="Speed Flying"
                        value={this.state.speedFlying}
                        onChange={this.handleChange('speedFlying')}
                        placeholder="10,20,30, etc."
                        margin="normal"
                    />
                    <TextField
                        id="outlined-adornment-SpeedSwimming"
                        className={classNames(classes.textField)}
                        variant="outlined"
                        label="Speed Swimming"
                        value={this.state.speedSwimming}
                        onChange={this.handleChange('speedSwimming')}
                        placeholder="10,20,30, etc."
                        margin="normal"
                    />
                    <TextField
                        required
                        id="outlined-multiline-static"
                        label="Description"
                        fullWidth
                        multiline
                        rows="4"
                        className={classes.textField}
                        margin="normal"
                        variant="outlined"
                    />
                </form>
                <CheckboxLabel/>
                <UploadButton/>
                <Button onClick={() => this.addRace(this.state)} variant="contained" size="large" color="primary" className={classes.margin}>
                    Create
                </Button>
            </div>
        );
    }
}

NewAddField.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(NewAddField);









