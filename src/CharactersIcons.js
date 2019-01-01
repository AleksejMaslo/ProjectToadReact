import React from 'react';
import PropTypes from 'prop-types';
import {withStyles} from '@material-ui/core/styles';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import GridListTileBar from '@material-ui/core/GridListTileBar';
import IconButton from '@material-ui/core/IconButton';
import InfoIcon from '@material-ui/icons/Info';

const styles = theme => ({
    root: {
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'space-around',
        overflow: 'hidden',
        backgroundColor: theme.palette.background.paper,
    },
    gridList: {
        width: '50%',
    },
    icon: {
        color: 'rgba(255, 255, 255, 0.54)',
    },

});


const tileData = [
    {
        img: 'http://connorscampaigns.wdfiles.com/local--files/d-d-races/dnd-races.jpg',
        title: 'Races',
        author: 'D&D',
    },
    {
        img: 'https://media.comicbook.com/2018/03/dndraces-1088003-1280x0.jpeg',
        title: 'Classes',
        author: 'D&D',
    },
    {
        img: 'https://i.pinimg.com/originals/75/f5/cd/75f5cd09c435147edaa152a766c71094.jpg',
        title: 'Image',
        author: 'author',
    },
    {
        img: 'https://i.pinimg.com/originals/75/f5/cd/75f5cd09c435147edaa152a766c71094.jpg',
        title: 'Image',
        author: 'author',
    },
];

function TitlebarGridList(props) {
    const {classes} = props;

    return (
        <div className={classes.root}>
            <GridList cellHeight={180} className={classes.gridList}>
                <GridListTile key="Subheader" cols={2} style={{height: 'auto'}}/>
                {tileData.map(tile => (
                    <GridListTile key={tile.img}>
                        <img src={tile.img} alt={tile.title}/>
                        <GridListTileBar
                            title={tile.title}
                            subtitle={<span>by: {tile.author}</span>}
                            actionIcon={
                                <IconButton className={classes.icon}>
                                    <InfoIcon/>
                                </IconButton>
                            }
                        />
                    </GridListTile>
                ))}
            </GridList>
        </div>
    );
}

TitlebarGridList.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(TitlebarGridList);