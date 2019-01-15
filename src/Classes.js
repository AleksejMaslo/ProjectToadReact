import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {withStyles} from '@material-ui/core/styles';
import TiltlebarGridList from './TiltlebarGridList';
import {getUrl} from './config/ServerConfiguration';
import NewAddField from './AddClassForm';

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

class heroClasses extends React.Component {
    state = {
        classes: []
    };

    async componentDidMount() {
        this.doListSearch();
    }

    doListSearch = async () => {
        const url = getUrl("api/character");
        const response = await fetch(url);
        const character = await response.json();
        this.setState({character: character});
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
                    textAlign: 'center',}}>Official Classes:</h1>
                <TiltlebarGridList tileData={this.state.character}/>
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
                    textAlign: 'center',}}>Create your own class:</h1>
                <NewAddField/>
            </div>
        );
    }
};

heroClasses.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(heroClasses);
