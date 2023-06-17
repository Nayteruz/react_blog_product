import { ReactNode } from 'react';

import { ReducersMapObject } from '@reduxjs/toolkit';
import { Provider } from 'react-redux';

import { StateSchema } from '../config/StateSchema';
import { createReduxStore } from '../config/store';

interface StoryProviderProps {
    children?: ReactNode;
    initialState?: DeepPartial<StateSchema>;
    asyncReducers?: DeepPartial<ReducersMapObject<StateSchema>>
}

export const StoryProvider = (props: StoryProviderProps) => {
    const {
        children,
        initialState,
        asyncReducers,
    } = props;

    const store = createReduxStore(
        initialState as StateSchema,
        asyncReducers as ReducersMapObject<StateSchema>,
    );

    // eslint-disable-next-line no-console
    console.log('RENDER');

    return (
        <Provider store={store}>
            {children}
        </Provider>
    );
};
