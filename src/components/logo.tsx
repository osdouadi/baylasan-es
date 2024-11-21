import Image from "next/image";
import React from "react";

const Logo = () => {
  return (
    <Image
      src={"/logo.png"}
      alt="alshalabi"
      width={2000}
      height={2000}
      className="h-auto w-[14.3rem] md:w-[18.555rem]"
    />
  );
};

export default Logo;
