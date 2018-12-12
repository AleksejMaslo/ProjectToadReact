import React from 'react';
import PropTypes from 'prop-types';
import {withStyles} from '@material-ui/core/styles';
import MobileStepper from '@material-ui/core/MobileStepper';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import KeyboardArrowLeft from "@material-ui/icons/KeyboardArrowLeft";
import KeyboardArrowRight from "@material-ui/icons/KeyboardArrowRight";
import BannerText from './BannerText';

const tutorialSteps = [
    {
        imgPath:
            'https://cdn.vox-cdn.com/thumbor/lxBRanHF4U9vLZlDUDbKA-AfPR8=/407x0:2560x1600/1200x800/filters:focal(1347x390:1755x798)/cdn.vox-cdn.com/uploads/chorus_image/image/55811939/wallpaper_2560x1600.0.jpg',
    },
    {
        imgPath:
            'https://static1.squarespace.com/static/59b43cbbc027d84ada191df3/t/59b71c90b0786992289df12c/1505172632759/DnD_VGM_TV_Image.jpg?format=2500w'
    },
    {
        imgPath:
            'https://i.imgur.com/lqFniyN.jpg'
    },
];

const styles = theme => ({
    root: {
        flexGrow: 1,
    },
    img: {
        width: '100%',
        position: 'relative',
},
});

class SwipeableTextMobileStepper extends React.Component {
    state = {
        activeStep: 0,
    };

    handleNext = () => {
        this.setState(prevState => ({
            activeStep: prevState.activeStep + 1,
        }));
    };

    handleBack = () => {
        this.setState(prevState => ({
            activeStep: prevState.activeStep - 1,
        }));
    };

    handleStepChange = activeStep => {
        this.setState({activeStep});
    };

    render() {
        const {classes, theme} = this.props;
        const {activeStep} = this.state;
        const maxSteps = tutorialSteps.length;

        return (
            <div className={classes.root}>
                <Paper square elevation={0} className={classes.header}>
                    <Typography>{tutorialSteps[activeStep].BannerTextPath}</Typography>
                </Paper>
                <img
                    className={classes.img}
                    src={tutorialSteps[activeStep].imgPath}
                    alt={tutorialSteps[activeStep].BannerTextPath}
                />
                <BannerText/>
                <MobileStepper
                    steps={maxSteps}
                    position="static"
                    activeStep={activeStep}
                    className={classes.mobileStepper}
                    nextButton={
                        <Button size="small" onClick={this.handleNext} disabled={activeStep === maxSteps - 1}>
                            Next
                            {theme.direction === 'rtl' ? <KeyboardArrowLeft/> : <KeyboardArrowRight/>}
                        </Button>
                    }
                    backButton={
                        <Button size="small" onClick={this.handleBack} disabled={activeStep === 0}>
                            {theme.direction === 'rtl' ? <KeyboardArrowRight/> : <KeyboardArrowLeft/>}
                            Back
                        </Button>
                    }
                />
            </div>
        );
    }
}

SwipeableTextMobileStepper.propTypes = {
    classes: PropTypes.object.isRequired,
    theme: PropTypes.object.isRequired,
};

export default withStyles(styles, {withTheme: true})(SwipeableTextMobileStepper);