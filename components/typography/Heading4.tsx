import React from 'react';
import { twMerge } from 'tailwind-merge';

type Heading4Props = React.PropsWithChildren & {
    className?: string;
};

const Heading4 = ({ children, className = '' }: Heading4Props) => {
    return (
        <h4
            className={twMerge(
                'text-white font-satoshi-bold text-lg leading-[23.4px] xl:text-[22px] xl:leading-[28.6px]',
                className,
            )}
        >
            {children}
        </h4>
    );
};

export default Heading4;
