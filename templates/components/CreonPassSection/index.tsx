import React from 'react';
import Link from 'next/link';
import { twMerge } from 'tailwind-merge';
import Heading2 from '@/components/typography/Heading2';
import PaddedWrapper from '@/components/wrappers/PaddedWrapper';
import Heading4 from '@/components/typography/Heading4';
import BodyText from '@/components/typography/BodyText';
import VideoAnimation from '@/components/videos/VideoAnimation';
import VideoOverlay from '../components/VideoOverlay';

const CreonPassSection = () => {
    const transitionClasses =
        'transition-all ease-in-out duration-300 transform origin-top';

    return (
        <section className="w-full flex min-h-[100vh] bg-black py-10">
            <PaddedWrapper className="w-full flex justify-center">
                <div className="w-full flex flex-col items-center md:flex-row gap-6 max-w-new-w">
                    <div className="w-full md:w-1/2 flex flex-col gap-6">
                        <Heading2 className="border-b-[1px] border-b-tertiary py-6">
                            creon pass nft
                        </Heading2>
                        <Heading4 className="gradient text-gradient">
                            The Creon NFT pass unlocks access to AI projects,
                            the Creon launchpad, and a ticket to generate
                            passive income through AI-driven tools
                        </Heading4>
                        <div className="w-full md:hidden h-[485px] relative">
                            <NFT />
                        </div>
                        <ContentVariant />
                        <Link href="#" className="mt-10">
                            <BodyText
                                className={`${transitionClasses} w-full md:w-[231px] xl:w-[453px] h-[46px] xl:h-[54px] rounded-md overflow-hidden group bg-gradient-to-r from-primary to-secondary hover:to-primary`}
                            >
                                <span
                                    className={`${transitionClasses} w-full h-full flex items-center justify-center group-hover:translate-y-[-100%]`}
                                >
                                    Buy Creon Pass
                                </span>
                                <span
                                    className={`${transitionClasses} w-full h-full flex items-center justify-center group-hover:translate-y-[-100%]`}
                                >
                                    Buy Creon Pass
                                </span>
                            </BodyText>
                        </Link>
                    </div>
                    <div className="w-full hidden md:flex flex-1 h-[694px] xl:h-[808px] md:w-1/2 relative rounded-md overflow-hidden">
                        <NFT />
                    </div>
                </div>
            </PaddedWrapper>
        </section>
    );
};

export default CreonPassSection;

type ContentTextProps = React.PropsWithChildren & {
    className?: string;
};

const ContentText = ({ children, className = '' }: ContentTextProps) => {
    return (
        <BodyText
            className={twMerge(
                'px-4 py-2 border-[1px] border-tertiary w-fit rounded-md',
                className,
            )}
        >
            {children}
        </BodyText>
    );
};

const ContentVariant = () => {
    return (
        <div className="flex flex-col gap-4">
            <ContentText>
                Pre-launch investment opportunities for upcoming AI projects
            </ContentText>
            <ContentText>
                Free and early access to Creon built AI projects
            </ContentText>
            <ContentText>
                Higher allocation limits on the Creon AI Launchpad
            </ContentText>
            <ContentText>
                Revenue share distribution from Creon built AI projects
            </ContentText>
        </div>
    );
};

const NFT = () => {
    return (
        <>
            <div className="relative w-full h-full overflow-hidden">
                <VideoAnimation
                    src="/videos/nft-video.mp4"
                    className="mix-blend-soft opacity-80"
                />
                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300%] h-[13%] filter blur-[12px] xl:blur-[18px]  bg-black shrink-0" />
                <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 w-[300%] h-[13%] filter blur-[12px] xl:blur-[18px] bg-black shrink-0" />
                <div className="absolute left-0 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[13%] h-[300%] filter blur-[12px] bg-black shrink-0" />
                <div className="absolute right-0 top-1/2 translate-x-1/2 -translate-y-1/2 w-[13%] h-[300%] filter blur-[12px] bg-black shrink-0" />
            </div>
            <VideoOverlay />
        </>
    );
};
