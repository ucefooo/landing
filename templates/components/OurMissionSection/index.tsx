'use client';

import React from 'react';
import Image from 'next/image';
import { twMerge } from 'tailwind-merge';
import PaddedWrapper from '@/components/wrappers/PaddedWrapper';
import Heading3 from '@/components/typography/Heading3';
import Heading4 from '@/components/typography/Heading4';
import UpCaret from '@/components/icons/UpCaret';
import DownCaret from '@/components/icons/DownCaret';
import BodyText from '@/components/typography/BodyText';
import { ourMissionAccordionData } from '../../constants/our-mission-data';
import { useOurMission } from './hooks';

const OurMissionSection = () => {
    return (
        <section className="w-full flex flex-col min-h-[100vh] bg-black py-10">
            <PaddedWrapper className="w-full h-full flex justify-center items-center">
                <div className="w-full flex flex-col lg:flex-row gap-0 md:gap-14 max-w-new-w z-10">
                    <div className="w-full lg:w-1/2 flex flex-col">
                        <Heading3 className="hidden xl:block max-w-[699px]">
                            Our mission is to support the innovation of AI
                            blockchain projects{' '}
                            <span className="gradient text-gradient">
                                while prioritizing communities and democratizing
                                profits
                            </span>
                        </Heading3>
                        <Heading3 className="xl:hidden">
                            our mission is to provide unique, confidential
                            AI-based tools, to which you will gain{' '}
                            <span className="gradient text-gradient">
                                lifetime access through NFT tokens and our CREON
                                token.
                            </span>
                        </Heading3>
                        <ImageBox
                            wrapperClass="h-[182px] lg:h-[377px] xl:h-[502px] mt-[-40px] xl:mt-[-80px] md:hidden lg:block lg:overflow-visible"
                            innerBoxClass="right-[calc(0vw-50px)] lg:right-[-180px] xl:right-[-250px]"
                            imageContainer="w-[302px] h-[182px] lg:w-[628px] lg:h-[377px] xl:w-[836px] xl:h-[502px]"
                        />
                    </div>
                    <div className="w-full lg:w-1/2 flex justify-end">
                        <div className="w-full max-w-[550px]">
                            <Accordion />
                        </div>
                        <ImageBox
                            wrapperClass="h-[377px] ml-[-20%] mt-auto mb-[-100px] hidden md:block lg:hidden"
                            innerBoxClass="right-[calc(0vw-150px)]"
                            imageContainer="w-[628px] h-[377px]"
                        />
                    </div>
                </div>
            </PaddedWrapper>
        </section>
    );
};

export default OurMissionSection;

type AccordionButtonProps = {
    title: string;
    open: boolean;
    Icon: React.FC<{ active?: boolean }>;
};

const AccordionButton = ({ open, title, Icon }: AccordionButtonProps) => {
    const transitionClasses = 'transition-all ease-in duration-200';

    return (
        <div className="w-full flex items-center gap-6 justify-between cursor-pointer py-2 xl:py-4 group">
            <div className="w-full flex items-center gap-6">
                <div className="w-[73px] h-[83px] min-w-[73px]  xl:w-[100px] xl:h-[114px] xl:min-w-[100px]">
                    <Icon active={open} />
                </div>
                <div className="w-full flex justify-between">
                    <Heading4
                        className={`${transitionClasses} max-w-[360px] ${
                            !open ? 'group-hover:text-primary' : ''
                        }`}
                    >
                        {title}
                    </Heading4>
                    <div className="p-1 xl:p-2">
                        {open ? (
                            <UpCaret
                                className={
                                    !open ? 'group-hover:stroke-primary' : ''
                                }
                            />
                        ) : (
                            <DownCaret
                                className={
                                    !open ? 'group-hover:stroke-primary' : ''
                                }
                            />
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};

const Accordion = () => {
    const transitionClasses =
        'transition-all ease-in-out duration-300 transform origin-top';

    const { activeAccordion, handleToggleAccordion } = useOurMission();

    return (
        <ul
            className={`${transitionClasses} w-full h-fit flex flex-col justify-center`}
        >
            {ourMissionAccordionData.map((data, index) => (
                <li
                    key={index}
                    className="px-2 py-2 xl:py-4 border-tertiary border-b-[1px]"
                    onClick={() => handleToggleAccordion(index)}
                >
                    <AccordionButton
                        title={data.title}
                        open={index === activeAccordion}
                        Icon={data.Icon}
                    />
                    <div
                        className={`${transitionClasses} overflow-hidden  ${
                            index === activeAccordion
                                ? 'h-[280px] xl:h-[200px]'
                                : 'h-[1px]'
                        }`}
                    >
                        <BodyText
                            className={`${transitionClasses} pl-[100px] xl:pl-[130px] ${
                                index === activeAccordion
                                    ? 'opacity-100'
                                    : 'opacity-50'
                            }`}
                        >
                            {data.content}
                        </BodyText>
                    </div>
                </li>
            ))}
        </ul>
    );
};

type ImageBoxProps = {
    wrapperClass?: string;
    innerBoxClass?: string;
    imageContainer?: string;
};

const ImageBox = ({
    wrapperClass = '',
    innerBoxClass = '',
    imageContainer = '',
}: ImageBoxProps) => {
    return (
        <div
            className={twMerge(
                'w-full z-[-1] overflow-hidden relative',
                wrapperClass,
            )}
        >
            <div className={twMerge('absolute ', innerBoxClass)}>
                <div className={twMerge('relative', imageContainer)}>
                    <Image
                        src={'/photo/our-mission.webp'}
                        fill
                        alt=""
                        style={{ objectFit: 'cover' }}
                    />
                </div>
            </div>
        </div>
    );
};
