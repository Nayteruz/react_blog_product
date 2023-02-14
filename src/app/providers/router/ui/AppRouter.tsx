import React, {Suspense} from 'react';
import {Route, Routes} from "react-router-dom";
import {routeConfig} from "shared/config/routeConfig";
import {Layout} from "shared/ui/Layout";

export const AppRouter = () => {
    return (
        <Suspense fallback={<div>Loading...</div>}>
            <Routes>
                {Object.values(routeConfig).map(({path, element}) => (
                    <Route
                        key={path}
                        path={path}
                        element={(
                            <Suspense fallback={<div>Loading...</div>} >
                                <Layout className="content-page--text-content">
                                    {element}
                                </Layout>
                            </Suspense>
                        )}
                    />
                ))}
            </Routes>
        </Suspense>
    );
};