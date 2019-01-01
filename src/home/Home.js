import React, {Component} from 'react';
import NestedGrid from '../CardsList';
import SwipeableTextMobileStepper from '../Carousel';

export const Home = () => {
    return (
        <div>
            <SwipeableTextMobileStepper/>
            <NestedGrid/>
        </div>
    )
};