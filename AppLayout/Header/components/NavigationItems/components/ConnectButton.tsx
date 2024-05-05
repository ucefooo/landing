import React from "react";
import Link from "next/link";
import { APP_PATHS } from "@/lib/paths/client-path";
import BodyText from "@/components/typography/BodyText";

const ConnectButton = () => {
  const transitionClasses = "transform transition-all ease-in-out duration-300";

  return (
    <Link href={APP_PATHS.connect}>
      <BodyText
        className={`${transitionClasses} w-[110px] xl:w-[132px] h-[38px] xl:h-[44px] border-2 border-white text-white rounded-md overflow-hidden text-lg font-satoshi-bold  group bg-gradient-to-r hover:bg-primary hover:border-primary`}
      >
        <span
          className={`${transitionClasses} w-full h-full flex items-center justify-center group-hover:translate-y-[-100%]`}
        >
          Connect
        </span>
        <span
          className={`${transitionClasses} w-full h-full flex items-center justify-center group-hover:translate-y-[-100%]`}
        >
          Connect
        </span>
      </BodyText>
    </Link>
  );
};

export default ConnectButton;
