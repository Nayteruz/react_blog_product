import { SVGProps } from 'react';

export const IconBar = (props: SVGProps<SVGSVGElement>) => {
    const {
        width = 25, height = 25, fill = 'currentColor', ...otherProps
    } = props;
    return (
        // eslint-disable-next-line react/jsx-props-no-spreading
        <svg width={width} height={height} {...otherProps} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
            {/* eslint-disable-next-line max-len */}
            <path d="M16 132h416c8.837 0 16-7.163 16-16V76c0-8.837-7.163-16-16-16H16C7.163 60 0 67.163 0 76v40c0 8.837 7.163 16 16 16zm0 160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16zm0 160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16z" fill={fill} />
        </svg>
    );
};
