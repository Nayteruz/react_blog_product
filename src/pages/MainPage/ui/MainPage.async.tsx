import {lazy} from "react";

export const MainPageAsync = lazy(() => new Promise((resolve, reject) => {
    // @ts-ignore
    // Так в реальных проектах делать не стоит!!!
    setTimeout(() => resolve(import("./MainPage")),1500)
}));