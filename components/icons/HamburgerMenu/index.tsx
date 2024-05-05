import React from 'react';
import { twMerge } from 'tailwind-merge';
import menuIconStyles from './styles.module.css';

type HamburgerMenuProps = {
    svgClass?: string;
    barClasses?: string;
    isOpen?: boolean;
};

const HamburgerMenu = ({
    svgClass = '',
    barClasses = '',
    isOpen,
}: HamburgerMenuProps) => {
    const transitionClasses =
        'transform origin-center transition-all ease-in-out duration-300';

    return (
        <svg
            id="hamburger"
            className={twMerge(
                `${transitionClasses} ${menuIconStyles['hamburger__svg']} w-[38px] h-[38px] bg-white rounded-md`,
                svgClass,
            )}
            viewBox="0 0 60 40"
        >
            <g className={twMerge('stroke-black stroke-[3px]', barClasses)}>
                <path
                    id="top-line"
                    d="M10,10 L50,10 Z"
                    className={`${transitionClasses} ${
                        isOpen ? 'rotate-[-45deg] scale-90 translate-y-2.5' : ''
                    }`}
                />
                <path
                    id="middle-line"
                    d="M10,20 L50,20 Z"
                    className={`${transitionClasses} ${
                        isOpen ? 'opacity-0 w-0' : ''
                    }`}
                />
                <path
                    id="bottom-line"
                    d="M10,30 L50,30 Z"
                    className={`${transitionClasses} ${
                        isOpen
                            ? 'rotate-[45deg] scale-90 translate-y-[-10px]'
                            : ''
                    }`}
                />
            </g>
        </svg>
    );
};

export default HamburgerMenu;
