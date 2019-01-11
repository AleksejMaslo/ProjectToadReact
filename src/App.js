import React from 'react';
import {MenuAppBar} from "./MenuAppBar";
import NavTabs from './NavTabs';
import Footer from './Footer';
import {BrowserRouter, Route} from "react-router-dom";
import Races from "./Races";
import heroClasses from "./Classes";
import Monsters from "./Monsters";
import {Home} from "./home/Home";
import Spells from "./Spells";
import Items from "./Items";

const App = () => {
    return (
        <BrowserRouter>
            <div>
                <MenuAppBar/>
                <NavTabs/>
                <div>
                    <Route exact path="/" component={Home}/>
                    <Route path="/races" component={Races}/>
                    <Route path="/classes" component={heroClasses}/>
                    <Route path="/monsters" component={Monsters}/>
                    <Route path="/spells" component={Spells}/>
                    <Route path="/items" component={Items}/>
                </div>
                <Footer/>
            </div>
        </BrowserRouter>
    )
};


export default App;