import { lazy } from 'react';

export const ArticlesPageAsync = lazy(() => new Promise((resolve) => {
    // @ts-ignore
    // Так в реальных проектах делать не стоит!!!
    setTimeout(() => resolve(import('./ArticlesPage')), 1500);
}));
