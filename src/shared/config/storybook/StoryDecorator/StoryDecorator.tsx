import { Story } from '@storybook/react';
import { StateSchema, StoryProvider } from 'app/providers/StoryProvider';
import { DeepPartial } from '@reduxjs/toolkit';

export const StoryDecorator = (state: DeepPartial<StateSchema>) => (StoryComponent: Story) => (
    <StoryProvider initialState={state}>
        <StoryComponent />
    </StoryProvider>
);
