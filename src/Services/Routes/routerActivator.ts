import {useNavigate} from "react-router-dom";
import {useEffect} from "react";
import rootStore from "../Stores/Store";

export const RouterActivator = () => {
    const history = useNavigate();

    useEffect(() => {
        rootStore.routeStore.setHistory(history);
    }, []);

    return null;
};
