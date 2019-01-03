import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import NoSsr from '@material-ui/core/NoSsr';
import Typography from '@material-ui/core/Typography';
import { Link } from 'react-router-dom';

function TabContainer(props) {
    return (
        <Typography component="div" style={{ padding: 8 * 3 }}>
            {props.children}
        </Typography>
    );
}

TabContainer.propTypes = {
    children: PropTypes.node.isRequired,
};

function LinkTab(props) {
    const renderLink = <Link to={props.to} {...props} >{props.label}</Link>;
    return renderLink;
    //return <Tab component={Link} onClick={event => event.preventDefault()} {...props} />;
}

const styles = theme => ({
    root: {
        flexGrow: 1,
        backgroundColor: theme.palette.background.paper,
    },
});

class NavTabs extends React.Component {
    state = {
        value: 0,
    };

    handleChange = (event, value) => {
        this.setState({ value });
    };

    render() {
        const { classes } = this.props;
        const { value } = this.state;

        return (
            <NoSsr>
                <div className={classes.root}>
                    <AppBar position="static">
                        <Tabs fullWidth value={value} onChange={this.handleChange}>
                            <LinkTab label="Home" href="Home" to = "/"/>
                            <LinkTab label="Races" href="Races" to = "races"/>
                            <LinkTab label="Classes" href="Classes" to = "classes"/>
                            <LinkTab label="Monsters" href="Monsters" to = "monsters"/>
                            <LinkTab label="Spells" href="Spells" to = "spells" />
                            <LinkTab label="Items" href="Items" to="items"/>
                        </Tabs>
                    </AppBar>
                </div>
            </NoSsr>
        );
    }
}

NavTabs.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(NavTabs);