import React, { Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';
import { routeConfig } from 'shared/config/routeConfig';
import { Layout } from 'shared/ui/Layout';

export const AppRouter = () => (
    <Routes>
        {Object.values(routeConfig).map(({ path, element }) => (
            <Route
                key={path}
                path={path}
                element={(
                    <Suspense fallback={<Layout className="content-page--text-content"><div>Loading...</div></Layout>}>
                        <Layout className="content-page--text-content">
                            {element}
                        </Layout>
                    </Suspense>
                )}
            />
        ))}
    </Routes>
);
