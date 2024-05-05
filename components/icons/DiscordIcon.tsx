'use client';

import React from 'react';
import { twMerge } from 'tailwind-merge';

type DiscordIconProps = {
    className?: string;
    circleClass?: string;
};

const DiscordIcon = ({
    className = '',
    circleClass = '',
}: DiscordIconProps) => {
    const clipId = crypto.randomUUID();
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
            <g clipPath={`url(#${clipId})`}>
                <circle
                    cx="17"
                    cy="17"
                    r="16"
                    className={twMerge('stroke-white', circleClass)}
                    strokeWidth="2"
                />
                <path
                    d="M22.2269 11.9072C21.2394 11.4222 20.1946 11.0775 19.1202 10.8824C18.9864 11.1364 18.83 11.4779 18.7222 11.7496C17.5639 11.5668 16.4162 11.5668 15.2791 11.7496C15.1713 11.478 15.0115 11.1364 14.8764 10.8824C13.801 11.0776 12.7553 11.4231 11.7673 11.9097C9.80117 15.0282 9.26817 18.0692 9.53464 21.0671C10.8387 22.0892 12.1025 22.7102 13.3449 23.1165C13.6537 22.6708 13.9267 22.1989 14.161 21.7057C13.7149 21.5275 13.2848 21.3078 12.8759 21.0493C12.9835 20.9656 13.0886 20.8784 13.191 20.7877C15.6688 22.0041 18.361 22.0041 20.8092 20.7877C20.9121 20.8778 21.0171 20.965 21.1242 21.0493C20.7147 21.3085 20.2838 21.5286 19.8368 21.707C20.0725 22.2022 20.3449 22.6745 20.6529 23.1177C21.8965 22.7115 23.1615 22.0905 24.4655 21.0671C24.7782 17.5918 23.9314 14.5787 22.2269 11.9071V11.9072ZM14.4986 19.2234C13.7548 19.2234 13.1448 18.4946 13.1448 17.607C13.1448 16.7195 13.7418 15.9894 14.4986 15.9894C15.2555 15.9894 15.8654 16.7182 15.8524 17.607C15.8536 18.4946 15.2555 19.2234 14.4986 19.2234ZM19.5016 19.2234C18.7578 19.2234 18.1478 18.4946 18.1478 17.607C18.1478 16.7195 18.7448 15.9894 19.5016 15.9894C20.2585 15.9894 20.8684 16.7182 20.8554 17.607C20.8554 18.4946 20.2585 19.2234 19.5016 19.2234Z"
                    fill="white"
                />
            </g>
            <defs>
                <clipPath id={clipId}>
                    <rect width="34" height="34" fill="white" />
                </clipPath>
            </defs>
        </svg>
    );
};

export default DiscordIcon;
