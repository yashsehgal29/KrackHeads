import React from 'react'
import { useMemo } from "react";

const GroupFrame = ({
  aYURVEDIC,
  hOMEREMEDIES,
  sUGGESTIONS,
  descriptionLoremIpsumLore,
  propMinWidth,
  propHeight,
  propWidth,
  propFlex,
  propHeight1,
}) => {
  const groupDivStyle = useMemo(() => {
    return {
      minWidth: propMinWidth,
    };
  }, [propMinWidth]);

  const textStyle = useMemo(() => {
    return {
      height: propHeight,
    };
  }, [propHeight]);

  const headingStyle = useMemo(() => {
    return {
      width: propWidth,
    };
  }, [propWidth]);

  const descriptionLoremIpsumStyle = useMemo(() => {
    return {
      flex: propFlex,
      height: propHeight1,
    };
  }, [propFlex, propHeight1]);

  return (
    <div
      className="flex-1 rounded-19xl bg-lavenderblush overflow-hidden flex flex-row items-end justify-center pt-7 px-0 pb-0 box-border min-w-[237px] max-w-[258px] min-h-[320px] max-h-[320px] text-center text-8xl text-darkslategray font-kumbh-sans"
      style={groupDivStyle}
    >
      <div
        className="h-[292px] flex-1 flex flex-col items-center justify-start py-0 px-5 box-border gap-[20px]"
        style={textStyle}
      >
        <h2
          className="m-0 h-[99px] relative text-inherit tracking-[-0.04em] font-semibold font-inherit flex items-center mq450:text-3xl"
          style={headingStyle}
        >
          <span>
            <p className="m-0">{aYURVEDIC}</p>
            <p className="m-0">{hOMEREMEDIES}</p>
            <p className="m-0">{sUGGESTIONS}</p>
          </span>
        </h2>
        <div
          className="relative self-stretch flex-1 text-base text-black font-jost"
          style={descriptionLoremIpsumStyle}
        >
          {descriptionLoremIpsumLore}
        </div>
      </div>
    </div>
  )
}
export default GroupFrame