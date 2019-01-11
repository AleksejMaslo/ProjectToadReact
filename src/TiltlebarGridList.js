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
        justifyContent: 'space-around',
    },
    gridList: {
        width: '75%',
    },
    icon: {
        color: 'rgba(255, 255, 255, 0.54)',
    },
});


function TitlebarGridList(props) {
    const {classes} = props;
    const tileData = props.tileData ? props.tileData : [];

    return (
        <div className={classes.root}>
            <GridList cellHeight={450} className={classes.gridList}>
                <GridListTile key="Subheader" cols={2} style={{height: 'auto'}}/>
                {tileData.map(tile => (
                    <GridListTile key={tile.img}>
                        <img src={tile.img} alt={tile.title}/>
                        <GridListTileBar
                            subtitle={<span style = {{fontFamily: 'Arial, Helvetica, sans-serif',
                                fontSize: '26px',
                                letterSpacing: '0px',
                                wordSpacing: '2px',
                                color: 'white',
                                fontWeight: '700',
                                textDecoration: 'none solid rgb(68, 68, 68)',
                                fontStyle: 'normal',
                                fontVariant: 'normal',
                                textTransform: 'uppercase'}}>{tile.name}</span>}
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
    tileData: PropTypes.arrayOf(PropTypes.object).isRequired
};

export default withStyles(styles)(TitlebarGridList);