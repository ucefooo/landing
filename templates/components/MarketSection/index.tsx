import React from 'react';
import Image from 'next/image';
import PaddedWrapper from '@/components/wrappers/PaddedWrapper';
import Heading3 from '@/components/typography/Heading3';
import BodyText from '@/components/typography/BodyText';
import { marketCardData } from '../../constants/market-data';
import FooterBackground from '../components/FooterBackground';

const MarketSection = () => {
    return (
        <section className="w-full flex min-h-[100vh] relative bg-black">
            <FooterBackground wrapperClass="hidden xl:block" />
            <PaddedWrapper className="flex flex-col justify-center items-center w-full z-0">
                <div className="w-[calc(100vw-30px)] md:w-full max-w-new-w overflow-x-auto scrollbar-hide xl:pb-[150px]">
                    <div className="w-full flex md:flex-col gap-4 xl:gap-6">
                        {marketCardData.map((data, index) => (
                            <MarketCard key={index} {...data} />
                        ))}
                    </div>
                </div>
            </PaddedWrapper>
        </section>
    );
};

export default MarketSection;

type MarketCardProps = {
    title: string;
    content: string;
    image: string;
};

const MarketCard = ({ title, content, image }: MarketCardProps) => {
    return (
        <div className="min-w-[292px] md:w-full min-h-[645px] md:min-h-[302px] flex flex-col-reverse md:flex-row gap-4 justify-end bg-tertiary rounded-md overflow-hidden">
            <div className="w-full md:w-2/3 xl:w-[70%] flex flex-col gap-4 p-6 md:justify-center md:items-center">
                <Heading3 className="w-full">{title}</Heading3>
                <BodyText>{content}</BodyText>
            </div>
            <div className="relative w-full md:w-1/3 xl:w-[30%] h-[160px] md:h-auto">
                <Image
                    src={image}
                    fill
                    alt=""
                    style={{ objectFit: 'cover' }}
                    className="grayscale"
                />
                <div className="absolute top-0 w-full h-full bg-[linear-gradient(0deg,#3d6fff,#9123ff_99.28%)] mix-blend-overlay" />
            </div>
        </div>
    );
};
