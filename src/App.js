import React from 'react';
import {MenuAppBar} from "./MenuAppBar";
import ImgMediaCard from './CardsList';
import NavTabs from './NavTabs';
import SwipeableTextMobileStepper from './Carousel';
import './App.css';


const App = () => {
    return (
        <div>
            <MenuAppBar/>
            <NavTabs/>
            <SwipeableTextMobileStepper/>
            <ImgMediaCard/>
        </div>
    )
};

export default App;