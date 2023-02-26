import { ReactNode } from 'react';
import { Provider } from 'react-redux';
import { createReduxStore } from 'app/providers/StoryProvider/config/store';
import { DeepPartial } from '@reduxjs/toolkit';
import { StateSchema } from '../config/StateSchema';

interface StoryProviderProps {
    children?: ReactNode;
    initialState?: DeepPartial<StateSchema>;
}

export const StoryProvider = (props: StoryProviderProps) => {
    const {
        children,
        initialState,
    } = props;

    const store = createReduxStore(initialState as StateSchema);

    return (
        <Provider store={store}>
            {children}
        </Provider>
    );
};
