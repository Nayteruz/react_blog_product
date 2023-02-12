import {lazy} from "react";

export const AboutPageAsync = lazy(() => new Promise((resolve, reject) => {
    // @ts-ignore
    // Так в реальных проектах делать не стоит!!!
    setTimeout(() => resolve(import("./AboutPage")),1500)
}));