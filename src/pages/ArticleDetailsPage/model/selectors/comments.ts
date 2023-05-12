import { StateSchema } from 'app/providers/StoryProvider';

export const getArticleCommentsIsLoading = (state: StateSchema) => {
    return state.articleDetailsPage?.comments.isLoading;
};
export const getArticleCommentsError = (state: StateSchema) => {
    return state.articleDetailsPage?.comments.error;
};
