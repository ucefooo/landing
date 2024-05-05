import React from 'react';
import { twMerge } from 'tailwind-merge';

type DownCaretProps = {
    className?: string;
};

const DownCaret = ({ className = '' }: DownCaretProps) => {
    return (
        <svg
            width="16"
            height="16"
            viewBox="0 0 16 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className={twMerge('stroke-white', className)}
        >
            <path d="M2 5L8 11L14 5" strokeWidth="1.5" />
        </svg>
    );
};

export default DownCaret;
