import { useSelector } from 'react-redux';
import type { TypedUseSelectorHook } from 'react-redux';

import { RootState } from '@/app/providers/StoryProvider';

export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
