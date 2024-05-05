import React from 'react';
import Image from 'next/image';
import PaddedWrapper from '@/components/wrappers/PaddedWrapper';
import Heading2 from '@/components/typography/Heading2';
import Heading4 from '@/components/typography/Heading4';
import VideoAnimation from '@/components/videos/VideoAnimation';

const HeroSection = () => {
    return (
        <section className="w-full flex min-h-[100dvh] relative">
            <BackgroundImage />
            <PaddedWrapper className="flex flex-col items-center w-full h-full absolute top-0">
                <div className="max-w-new-w w-full h-full flex flex-col justify-end xl:pb-[150px]">
                    <div className="w-full flex flex-col gap-6 xl:gap-10">
                        <Heading2 className="max-w-[1000px] xl:max-w-[1300px]">
                            <span className="hidden xl:inline">
                                The world&apos;s first platform for Tokenizing
                                AI blockchain projects
                            </span>
                            <span className="xl:hidden">
                                Empowering AI-Crypto Innovations and Integrating
                                AI Tools into crypto.
                            </span>
                        </Heading2>
                        <Heading4 className="flex flex-col gap-2 gradient text-gradient w-fit">
                            <span className="w-full h-0.5 gradient" />
                            <span className="hidden xl:inline">
                                Hold the Creon Pass NFT and earn passive income
                                from AI Tools
                            </span>
                            <span className="xl:hidden">
                                Creon «Create On» confidential AI Tools for
                                granting access through NFTs.
                            </span>
                            <span className="w-full h-0.5 gradient" />
                        </Heading4>
                    </div>
                </div>
            </PaddedWrapper>
        </section>
    );
};

export default HeroSection;

const BackgroundImage = () => {
    return (
        <div className="relative w-full flex-1">
            <VideoAnimation src="/videos/main-background-video.mp4" />
            <Image
                src="/photo/hero-video-blur.webp"
                alt=""
                fill
                className="bg-[linear-gradient(0deg,_rgba(5,12,26,1)_0%,_rgba(58,132,239,1)_40%,_rgba(176,32,255,1)_100%)] mix-blend-soft-light"
            />
        </div>
    );
};
