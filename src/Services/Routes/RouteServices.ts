import {route} from "./RoutesInterfaces";
import {getRoutes} from "./RoutesPath";
import {generatePath, Params} from "react-router-dom";
import rootStore from "../Stores/Store";
import RestApi from "../RestApi";

class RouteGoService {


    private go(name: route.Name, params?: Params, currentPage?: string, state?: Record<string, any>): void {
        const findRoute = getRoutes().find((r) => r.name === name);
        const navigate = rootStore.routeStore.getNavigation()

        if (!findRoute) {
            throw new Error(`[${RouteGoService.name}]: '${name}' - маршрут не найден!`);
        } else {
            RestApi.logAction({
                action: `переход на страницу ${findRoute.name} по пути ${findRoute.path}`,
                currentPage: currentPage
            })
            navigate(generatePath(findRoute.path, params), {replace: true, state});
        }
    }

    public RouterGo(
        name: route.Name,
        params?: Params,
        currentPage?: string,
        state?: Record<string, any>,
    ): void {
        return this.go(name, params, currentPage, state);
    }
}

export default new RouteGoService();