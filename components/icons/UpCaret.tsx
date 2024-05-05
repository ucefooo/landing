import React from 'react';
import { twMerge } from 'tailwind-merge';

type UpCaretProps = {
    className?: string;
};

const UpCaret = ({ className = '' }: UpCaretProps) => {
    return (
        <svg
            width="16"
            height="16"
            viewBox="0 0 16 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className={twMerge('stroke-white', className)}
        >
            <path d="M2 11L8 5L14 11" strokeWidth="1.5" />
        </svg>
    );
};

export default UpCaret;
