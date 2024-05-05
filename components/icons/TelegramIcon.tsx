import React from 'react';
import { twMerge } from 'tailwind-merge';

type TelegramIconProps = {
    className?: string;
    circleClass?: string;
};

const TelegramIcon = ({
    className = '',
    circleClass = '',
}: TelegramIconProps) => {
    const transitionClasses =
        'transform origin-center transition-all ease-in-out duration-300';

    return (
        <svg
            width="34"
            height="34"
            viewBox="0 0 34 34"
            xmlns="http://www.w3.org/2000/svg"
            className={twMerge(`${transitionClasses} fill-none`, className)}
        >
            <circle
                cx="17"
                cy="17"
                r="16"
                className={twMerge('stroke-white', circleClass)}
                strokeWidth="2"
            />
            <path
                d="M22.1396 10.9192L10.3269 15.9965C9.85152 16.2329 9.69074 16.7064 10.212 16.9634L13.2425 18.0368L20.5697 12.9895C20.9698 12.6726 21.3794 12.7571 21.027 13.1057L14.7338 19.4567L14.5361 22.1444C14.7192 22.5594 15.0545 22.5613 15.2683 22.3551L17.0094 20.5188L19.9913 23.0076C20.6839 23.4646 21.0608 23.1697 21.2098 22.3321L23.1656 12.0095C23.3687 10.9785 23.0224 10.5242 22.1396 10.9192Z"
                fill="white"
            />
        </svg>
    );
};

export default TelegramIcon;
