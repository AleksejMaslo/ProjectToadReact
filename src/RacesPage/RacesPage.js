import React from 'react';
import PropTypes from 'prop-types';
import {withStyles} from '@material-ui/core/styles';
import RacesList from './RacesList';

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

const RacesSheets = [cardContent];

export const Races = (props) => {
    const {classes} = props;

    return (
        <div>
            {RacesSheets.map(filling => {
                return (
                    <div>
                        <RacesList/>
                    </div>
                )
            })}
        </div>
    );
};

Races.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Races);
