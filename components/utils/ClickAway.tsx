'use client';

import { twMerge } from 'tailwind-merge';
import { useEffect } from 'react';

type ClickAwayProps = React.PropsWithChildren & {
    isOpen: boolean;
    onClose: () => void;
    className?: string;
};

const ClickAway = ({
    children,
    isOpen,
    onClose,
    className = '',
}: ClickAwayProps) => {
    const id = crypto.randomUUID();

    useEffect(() => {
        const handleClickOutside = (event: Event) => {
            if (
                isOpen &&
                !(event.target as HTMLElement).closest(`#menu-${id}`)
            ) {
                onClose();
            }
        };

        document.addEventListener('click', handleClickOutside);
        return () => {
            document.removeEventListener('click', handleClickOutside);
        };
    }, [id, isOpen, onClose]);

    return (
        <div id={`menu-${id}`} className={twMerge('w-full', className)}>
            {children}
        </div>
    );
};

export default ClickAway;
