import { useState } from 'react';

export const useOurMission = () => {
    const [activeAccordion, setActiveAccordion] = useState<number | null>(null);

    const handleToggleAccordion = (index: number) => {
        setActiveAccordion(activeAccordion === index ? null : index);
    };

    return {
        handleToggleAccordion,
        activeAccordion,
    };
};
