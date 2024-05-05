import { useState } from 'react';

export const useNavigationItems = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen((prev) => !prev);

        if (typeof document !== 'undefined') {
            const body = document.body;

            if (!isOpen) {
                body.classList.add('overflow-hidden');
            } else {
                body.classList.remove('overflow-hidden');
            }
        }
    };

    return {
        isOpen,
        toggleMenu,
    };
};
