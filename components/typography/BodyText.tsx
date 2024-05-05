import React from 'react';
import { twMerge } from 'tailwind-merge';

type BodyTextProps = React.PropsWithChildren & {
    className?: string;
};

const BodyText = ({ children, className = '' }: BodyTextProps) => {
    return (
        <p
            className={twMerge(
                'text-white font-satoshi-regular leading-[20.8px] xl:text-lg xl:leading-[23.4px]',
                className,
            )}
        >
            {children}
        </p>
    );
};

export default BodyText;
