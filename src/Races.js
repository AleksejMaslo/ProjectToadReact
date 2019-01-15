import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {withStyles} from '@material-ui/core/styles';
import TiltlebarGridList from './TiltlebarGridList';
import {getUrl} from './config/ServerConfiguration';
import NewAddField from './AddRaceForm';

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
    h1: {
        fontFamily: 'Arial, Helvetica, sans-serif',
        fontSize: '30px',
        letterSpacing: '2px',
        wordSpacing: '2px',
        color: '#000000',
        fontWeight: '700',
        textDecoration: 'none',
        fontStyle: 'normal',
        fontVariant: 'normal',
        textTransform: 'uppercase',
        textAlign: 'center',
    }
});

class Races extends React.Component {
    state = {
        races: []
    };

    async componentDidMount() {
        this.doListSearch();
    }

    doListSearch = async () => {
        const url = getUrl("api/races");
        const response = await fetch(url);
        const races = await response.json();
        this.setState({races: races});
    };

    render() {
        const {classes} = this.props;
        return (
            <div>
                <h1 style={{fontFamily: 'Arial, Helvetica, sans-serif',
                    fontSize: '30px',
                    letterSpacing: '2px',
                    wordSpacing: '2px',
                    color: '#000000',
                    fontWeight: '700',
                    textDecoration: 'none',
                    fontStyle: 'normal',
                    fontVariant: 'normal',
                    textTransform: 'uppercase',
                    textAlign: 'center',}}>Official Races:</h1>
                <TiltlebarGridList tileData={this.state.races}/>
                <h1 style={{fontFamily: 'Arial, Helvetica, sans-serif',
                    fontSize: '30px',
                    letterSpacing: '2px',
                    wordSpacing: '2px',
                    color: '#000000',
                    fontWeight: '700',
                    textDecoration: 'none',
                    fontStyle: 'normal',
                    fontVariant: 'normal',
                    textTransform: 'uppercase',
                    textAlign: 'center',}}>Create your own race:</h1>
                <NewAddField/>
            </div>
        );
    }
};

Races.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Races);
