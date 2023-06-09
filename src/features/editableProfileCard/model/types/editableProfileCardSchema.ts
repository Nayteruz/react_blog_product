import { Profile } from 'entities/Profile';
import { ValidateProfileError } from '../consts/consts';

export interface ProfileSchema {
    data?: Profile | null;
    form?: Profile | null;
    isLoading: boolean;
    error?: string;
    readonly: boolean;
    validateErrors?: ValidateProfileError[];
}
