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

const hit = [
    {
        value: 'd4',
        label: 'd4',
    }, {
        value: 'd6',
        label: 'd6',
    }, {
        value: 'd8',
        label: 'd8',
    },
    {
        value: 'd10',
        label: 'd10',
    },
    {
        value: 'd12',
        label: 'd12',
    },
];

const ability = [
    {
        value: 'Strength',
        label: 'Strength',
    }, {
        value: 'Dexterity',
        label: 'Dexterity',
    }, {
        value: 'Constitution',
        label: 'Constitution',
    },
    {
        value: 'Intelligence',
        label: 'Intelligence',
    },
    {
        value: 'Wisdom',
        label: 'Wisdom',
    },
    {
        value: 'Charisma',
        label: 'Charisma',
    },
];

class NewAddField extends React.Component {
    state = {
        name: '',
        hit: '',
        ability: '',
        savingThrow: '',
        armorAndWeapon: '',
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
                        id="outlined-multiline-static"
                        label="Description"
                        multiline
                        fullWidth={100}
                        rows="10"
                        className={classes.textField}
                        margin="normal"
                        variant="outlined"
                    />
                    <TextField
                        required
                        select
                        className={classNames(classes.textField)}
                        variant="outlined"
                        label="Hit Die"
                        margin="normal"
                        value={this.state.hit}
                        onChange={this.handleChange('hit')}>
                        {hit.map(option => (
                            <MenuItem key={option.value} value={option.value}>
                                {option.label}
                            </MenuItem>
                        ))}
                    </TextField>
                    <TextField
                        required
                        select
                        className={classNames(classes.textField)}
                        variant="outlined"
                        label="Primary Ability"
                        margin="normal"
                        value={this.state.ability}
                        onChange={this.handleChange('ability')}>
                        {ability.map(option => (
                            <MenuItem key={option.value} value={option.value}>
                                {option.label}
                            </MenuItem>
                        ))}
                    </TextField>
                    <TextField
                        id="outlined-name"
                        label="Saving Throw"
                        className={classes.textField}
                        value={this.state.savingThrow}
                        onChange={this.handleChange('savingThrow')}
                        margin="normal"
                        variant="outlined"
                    />
                    <TextField
                        id="outlined-name"
                        label="Armor and Weapon"
                        className={classes.textField}
                        value={this.state.armorAndWeapon}
                        onChange={this.handleChange('armorAndWeapon')}
                        margin="normal"
                        variant="outlined"
                    />
                </form>
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
