import React from "react";

export type HeadingProps = {
  heading: string;
  description?: string;
  isCenter?: boolean;
  isMaxWidth?: boolean;
};

const SectionHeading: React.FC<HeadingProps> = ({
  heading,
  description,
  isCenter = true,
  isMaxWidth = false,
}) => (
  <div
    className={`flex flex-col w-full gap-2 justify-center ${
      isMaxWidth && "max-w-[550px]"
    } ${
      isCenter ? "text-center items-center mx-auto" : "text-left items-start"
    } lg:max-w-full`}
  >
    <h4 className="text-primary">{heading}</h4>
    <h2>{description}</h2>
  </div>
);

export default SectionHeading;
