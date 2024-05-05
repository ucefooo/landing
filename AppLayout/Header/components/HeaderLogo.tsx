import React from 'react';
import Link from 'next/link';
import Logo from '@/components/icons/Logo';
import { APP_PATHS } from '@/lib/paths/client-path';

const HeaderLogo = () => {
    return (
        <Link href={APP_PATHS.root}>
            <Logo className="w-[120px] h-[33px] xl:w-[140px] xl:h-[39px]" />
        </Link>
    );
};

export default HeaderLogo;
