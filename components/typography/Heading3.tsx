import React from 'react';
import { twMerge } from 'tailwind-merge';

type Heading3Props = React.PropsWithChildren & {
    className?: string;
};

const Heading3 = ({ children, className = '' }: Heading3Props) => {
    return (
        <h3
            className={twMerge(
                'text-white font-monument-regular uppercase text-[22px] leading-[26.4px] md:text-[28px] md:leading-[33.6px] xl:text-[38px] xl:leading-[45.6px]',
                className,
            )}
        >
            {children}
        </h3>
    );
};

export default Heading3;
