import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {withStyles} from '@material-ui/core/styles';
import TitlebarGridList from './CharactersIcons';

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

const cardContent = {
    image: "https://i.pinimg.com/originals/6d/4c/e6/6d4ce6955f599c6cb4eae7b673c5a856.jpg",
    title: "Contemplative Reptile",
    name: "Barbarian",
    description: "Whatever drives them, humans are the innovators, the achievers, and the pioneers of the worlds.",
    buttonText: "View Races",
};

const characterSheets = [cardContent];

export const heroClasses = (props) => {
    const {classes} = props;

    return (
        <div>
            {characterSheets.map(filling => {
                return (
                    <div>
                        <TitlebarGridList/>
                    </div>
                )
            })}
        </div>
    );
};

heroClasses.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(heroClasses);
