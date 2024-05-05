import React from 'react';
import Link from 'next/link';
import { headerNavigationItems } from '@/AppLayout/constants/header-navigation-items';

const HeaderLinks = () => {
    return (
        <ul className="flex flex-col xl:flex-row gap-0 xl:gap-10">
            {headerNavigationItems.map((navigationItem, index) => (
                <li
                    key={index}
                    className={`text-white xl:text-lg font-satoshi-bold flex gap-1 py-6 xl:py-0 border-b-[1px] border-b-tertiary xl:border-b-0 ${
                        index === 0
                            ? 'border-t-[1px] border-t-tertiary xl:border-t-0'
                            : ''
                    }`}
                >
                    <Link
                        href={navigationItem.path}
                        className={
                            !navigationItem.isComingSoon
                                ? 'xl:hover:text-primary'
                                : ''
                        }
                    >
                        {navigationItem.title}
                    </Link>
                    {navigationItem.isComingSoon ? (
                        <div className="text-[10px] leading-[10px] uppercase text-[#AB23FF] px-1 py-0.5 rounded-full bg-black mt-1 w-fit flex h-fit items-center">
                            soon
                        </div>
                    ) : (
                        ''
                    )}
                </li>
            ))}
        </ul>
    );
};

export default HeaderLinks;
