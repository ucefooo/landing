import React from 'react';
import PaddedWrapper from '@/components/wrappers/PaddedWrapper';
import HeaderLogo from './components/HeaderLogo';
import NavigationItems from './components/NavigationItems';

const Header = () => {
    return (
        <PaddedWrapper className="flex w-full items-center justify-between gap-4 absolute top-0 z-30">
            <HeaderLogo />
            <NavigationItems />
        </PaddedWrapper>
    );
};

export default Header;
