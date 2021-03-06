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

class Monsters extends React.Component {
    state = {
        classes: []
    };

    async componentDidMount() {
        this.doListSearch();
    }

    doListSearch = async () => {
        const url = getUrl("api/monsters");
        const response = await fetch(url);
        const monsters = await response.json();
        this.setState({monsters: monsters});
    };

    render() {
        const {classes} = this.props;
        return (
            <div>
                <TiltlebarGridList tileData={this.state.monsters}/>
            </div>
        );
    }
};

Monsters.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Monsters);
