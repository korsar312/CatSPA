import React, {Suspense} from 'react';
import {HashRouter, Route, Routes} from "react-router-dom";
import {routesPath} from "./Services/Routes/RoutesPath";
import {RouterActivator} from "./Services/Routes/routerActivator";


const App = () => {
    return (
        <div id="App">
            <HashRouter>
                <RouterActivator/>
                <Suspense fallback={<></>}>
                <Routes>
                    {routesPath.map(({ name, element: Element, path: path, ...rest }) => (
                        <Route
                            path={path}
                            key={name}
                            element={<Element/>}
                            {...rest}
                        />
                    ))}
                </Routes>
                </Suspense>
            </HashRouter>
        </div>
    );
}

export default App;
