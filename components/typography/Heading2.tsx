import React from 'react';
import { twMerge } from 'tailwind-merge';

type Heading2Props = React.PropsWithChildren & {
    className?: string;
};

const Heading2 = ({ children, className = '' }: Heading2Props) => {
    return (
        <h2
            className={twMerge(
                'text-white font-monument-regular uppercase text-[32px] leading-[35.2px] md:text-[44px] md:leading-[48.4px] xl:text-[68px] xl:leading-[74.8px]',
                className,
            )}
        >
            {children}
        </h2>
    );
};

export default Heading2;
