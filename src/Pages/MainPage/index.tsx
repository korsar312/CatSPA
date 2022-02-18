import React from 'react';
import RouteGoService from "../../Services/Routes/RouteServices";
import {route} from "../../Services/Routes/RoutesInterfaces";

const MainPage = () => {
    const toAboutPage = () => {
        RouteGoService.RouterGo(route.Name.ABOUT, undefined, MainPage.name)
    }

    return (
        <div>
            <div>MainPage</div>
            <div onClick={toAboutPage}>About</div>
        </div>
    );
};

export default MainPage;