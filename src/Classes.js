import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {withStyles} from '@material-ui/core/styles';
import TiltlebarGridList from './TiltlebarGridList';
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

class heroClasses extends React.Component {
    state = {
        classes: []
    };

    async componentDidMount() {
        this.doListSearch();
    }

    doListSearch = async () => {
        const url = getUrl("api/characters");
        const response = await fetch(url);
        const characters = await response.json();
        this.setState({characters: characters});
    };

    render() {
        const {classes} = this.props;
        return (

            <div>
                <TiltlebarGridList tileData={this.state.characters}/>
            </div>
        );
    }
};

heroClasses.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(heroClasses);
