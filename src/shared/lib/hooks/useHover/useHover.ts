import { useCallback, useMemo, useState } from 'react';

interface UseHoverBind {
    onMouseEnter: () => void;
    onMouseLeave: () => void;
}

type UseHoverResult = [boolean, UseHoverBind];

export const useHover = () => {
    const [isHover, setIsHover] = useState(false);

    const onMouseEnter = useCallback(() => {

    }, []);

    const onMouseLeave = useCallback(() => {

    }, []);

    return useMemo(() => [
        isHover,
        { onMouseEnter, onMouseLeave },
    ], [isHover, onMouseEnter, onMouseLeave]);
};
