import React from 'react';
import CreonPassSection from './components/CreonPassSection';
import HeroSection from './components/HeroSection';
import OurMissionSection from './components/OurMissionSection';
import ProfitingThroughSection from './components/ProfitingThroughSection';
import BenefitsSection from './components/BenefitsSection';
import MarketSection from './components/MarketSection';

const HomeTemplate = () => {
    return (
        <div className="flex flex-1 flex-col">
        <HeroSection />
        <CreonPassSection />
        <ProfitingThroughSection />
        <OurMissionSection />
        <BenefitsSection />
        <MarketSection />
    </div>
    );
};

export default HomeTemplate;
