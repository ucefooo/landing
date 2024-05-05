import React from 'react';
import { twMerge } from 'tailwind-merge';

type PaddedWrapperProps = React.PropsWithChildren & {
    className?: string;
};

const PaddedWrapper = ({ children, className = '' }: PaddedWrapperProps) => {
    return (
        <div
            className={twMerge(
                'px-new-x md:px-new-x-md xl:px-new-x-xl py-new-y md:py-new-y-md xl:py-new-y-xl',
                className,
            )}
        >
            {children}
        </div>
    );
};

export default PaddedWrapper;
