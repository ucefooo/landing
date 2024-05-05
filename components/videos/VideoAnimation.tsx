import React from 'react';
import { twMerge } from 'tailwind-merge';

type VideoAnimationProps = {
    src: string;
    type?: string;
    className?: string;
};

const VideoAnimation = ({
    src,
    type = 'video/mp4',
    className = '',
}: VideoAnimationProps) => {
    return (
        <video
            autoPlay
            loop
            playsInline
            muted
            className={twMerge('w-full h-full object-cover', className)}
        >
            <source src={src} type={type} />
        </video>
    );
};

export default VideoAnimation;
