import React from 'react';
import Footer from './Footer';
import Header from './Header';

const AppLayout: React.FC<React.PropsWithChildren> = ({ children }) => {
    return (
        <div className="flex flex-1 flex-col relative font-satoshi-regular">
            <Header />
            <main className="flex flex-col flex-1 relative">
                {children}
                <Footer />
            </main>
        </div>
    );
};

export default AppLayout;
