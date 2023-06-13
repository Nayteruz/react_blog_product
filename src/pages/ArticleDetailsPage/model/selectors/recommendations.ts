import { StateSchema } from '@/app/providers/StoryProvider';

export const getArticleRecommendationsIsLoading = (state: StateSchema) => {
    return state.articleDetailsPage?.recommendations?.isLoading;
};
export const getArticleRecommendationsError = (state: StateSchema) => {
    return state.articleDetailsPage?.recommendations?.error;
};
