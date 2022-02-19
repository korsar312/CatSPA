import {route} from "./Route.interfaces";
import {lazy} from "react";

const MainPage = lazy(() => import("../../../Pages/MainPage"));
const AboutPage = lazy(() => import("../../../Pages/AboutPage"));
const ErrorPage = lazy(() => import("../../../Pages/ErrorPage"));

export const routePath: route.IRoute[] = [
    {
        path: "/",
        name: route.Name.MAIN,
        element: MainPage,
        layout: '',
    },
    {
        path: "/about",
        name: route.Name.ABOUT,
        element: AboutPage,
        layout: '',
    },
    {
        path: "*",
        name: route.Name.ERROR,
        element: ErrorPage,
        layout: '',
    },
];

export const getRoutes = () => routePath;