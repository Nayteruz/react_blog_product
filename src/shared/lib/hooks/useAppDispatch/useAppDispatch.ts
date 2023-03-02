import { useDispatch } from 'react-redux';
import { AppDispatch } from 'app/providers/StoryProvider';

export const useAppDispatch = () => useDispatch<AppDispatch>();
