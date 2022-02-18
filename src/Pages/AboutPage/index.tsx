import React from 'react';
import RouteGoService from "../../Services/Routes/RouteServices"
import {route} from "../../Services/Routes/RoutesInterfaces";

const AboutPage = () => {
    const toMainPage = () => {
        RouteGoService.RouterGo(route.Name.MAIN, undefined, AboutPage.name)
    }

    return (
        <div>
            <div>AboutPage</div>
            <div onClick={toMainPage}>Main</div>
        </div>
    );
};

export default AboutPage;