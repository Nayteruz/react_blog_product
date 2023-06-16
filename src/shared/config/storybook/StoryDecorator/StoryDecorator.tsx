import { Story } from '@storybook/react';
// TODO
// eslint-disable
import { StateSchema, StoryProvider } from '@/app/providers/StoryProvider';
import { loginReducer } from '@/features/AuthByUsername/model/slice/loginSlice';
import { profileReducer } from '@/features/editableProfileCard/model/slice/ProfileSlice';
import { ReducerList } from '@/shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import { articleDetailsReducer } from '@/entities/Article/model/slice/articleDetailsSlice';
import { addCommentFormReducer } from '@/features/addCommentForm/model/slices/addCommentFormSlice';
import { articleDetailsPageReducer } from '@/pages/ArticleDetailsPage/model/slices';
import { articlesPageReducer } from '@/pages/ArticlesPage/model/slices/articlePageSlice';
// eslint-enable

const defaultAsyncReducers: ReducerList = {
    loginForm: loginReducer,
    profile: profileReducer,
    articleDetails: articleDetailsReducer,
    addCommentForm: addCommentFormReducer,
    articleDetailsPage: articleDetailsPageReducer,
    articlesPage: articlesPageReducer,
};

export const StoryDecorator = (
    state: DeepPartial<StateSchema>,
    asyncReducers?: ReducerList,
) => (StoryComponent: Story) => (
    <StoryProvider initialState={state} asyncReducers={{ ...defaultAsyncReducers, ...asyncReducers }}>
        <StoryComponent />
    </StoryProvider>
);
