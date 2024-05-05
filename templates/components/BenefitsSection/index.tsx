import React from "react";
import Image from "next/image";
import PaddedWrapper from "@/components/wrappers/PaddedWrapper";
import Heading3 from "@/components/typography/Heading3";
import Heading4 from "@/components/typography/Heading4";
import BodyText from "@/components/typography/BodyText";
import { benefitsCardData } from "../../constants/benefits-data";
import FooterBackground from "../components/FooterBackground";

const BenefitsSection = () => {
  return (
    <section className="w-full flex min-h-[100vh] bg-black py-10 relative">
      <FooterBackground wrapperClass="xl:hidden " />
      <PaddedWrapper className="w-full flex justify-center items-center">
        <div className="w-full max-w-new-w z-0 pb-[100px] xl:pb-2">
          <div className="hidden xl:flex gap-6">
            {benefitsCardData.map((data, index) => (
              <BenefitsCard key={index} {...data} />
            ))}
          </div>
        </div>
      </PaddedWrapper>
    </section>
  );
};

export default BenefitsSection;

type BenefitsCardProps = {
  title: string;
  subtitle: string;
  image: string;
  content: string;
  isComingSoon?: boolean;
};

const BenefitsCard = ({
  title,
  subtitle,
  image,
  content,
  isComingSoon,
}: BenefitsCardProps) => {
  const transitionClasses = "transform transition-all ease-in duration-200";

  return (
    <div className="w-full min-w-[308px] flex flex-col gap-3 xl:gap-6 bg-tertiary rounded-md h-[616px] xl:h-[659px] py-[20px] xl:py-[30px] relative">
      {isComingSoon ? (
        <span className="px-[6px] py-[3px] rounded-full text-xs leading-[13.2px] font-satoshi-bold uppercase bg-white absolute right-[5%] top-[-10px]">
          Coming soon
        </span>
      ) : (
        ""
      )}
      <div className="w-full flex flex-col gap-2 xl:gap-4 px-[30px] min-h-[90px] xl:min-h-[120px]">
        <Heading3>{title}</Heading3>
        <Heading4 className="gradient text-gradient">{subtitle}</Heading4>
      </div>
      <div className="w-full pr-[20px] xl:pr-[30px]">
        <div className="overflow-hidden rounded-e-md h-[234px]">
          <div
            className={`${transitionClasses} relative w-full h-full hover:scale-[1.1]`}
          >
            <Image src={image} fill alt="" style={{ objectFit: "cover" }} />
          </div>
        </div>
      </div>
      <BodyText className="px-[20px] xl:px-[30px]">{content}</BodyText>
    </div>
  );
};
