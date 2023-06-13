import { StateSchema } from '@/app/providers/StoryProvider';

export const getUserMounted = (state: StateSchema) => state.user._mounted;
