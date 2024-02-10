import React from 'react'
import GroupFrame from './GroupFrame'
const Frame2 = () => {
  return (
    <div>
      <section className="w-[1290px] flex flex-row items-start justify-start py-0 pr-[57px] pl-5 box-border max-w-full text-center text-8xl text-darkslategray font-kumbh-sans lg:pr-7 lg:box-border">
      <div className="flex-1 flex flex-col items-center justify-start gap-[110px] max-w-full mq450:gap-[110px] mq750:gap-[110px]">
        <div className="self-stretch flex flex-row items-end justify-center gap-[57px] mq750:gap-[57px] mq1050:flex-wrap">
          <div className="flex-[0.9773] flex flex-col items-start justify-start py-0 pr-1.5 pl-0 box-border min-w-[241px] max-w-[264px] mq450:flex-1">
            <div className="w-full rounded-19xl bg-lavenderblush overflow-hidden flex flex-row items-center justify-center pt-7 px-5 pb-[33px] box-border max-w-[258px] min-h-[320px] max-h-[320px]">
              <div className="flex-1 flex flex-col items-center justify-start gap-[20px]">
                <h2 className="m-0 w-[213px] h-[66px] relative text-inherit tracking-[-0.04em] font-semibold font-inherit flex items-center justify-center mq450:text-3xl">
                  REVIEW YOUR PRESCRIPTIONS
                </h2>
                <div className="self-stretch h-[173px] relative text-base text-black inline-block shrink-0 font-ink-free">
                  <span>
                    Get a detailed analysis of your current medications,
                    including potential side effects and interactions. Our
                    pharmacists will provide you with comprehensive information
                    to help you make informed decisions about your health.
                  </span>
                  <span className="font-jost">{` `}</span>
                </div>
              </div>
            </div>
          </div>
          <div className="flex-[0.845] rounded-19xl bg-lavenderblush overflow-hidden flex flex-row items-center justify-center pt-7 px-5 pb-[33px] box-border min-w-[237px] max-w-[258px] min-h-[320px] max-h-[320px] mq450:flex-1">
            <div className="flex-1 flex flex-col items-center justify-start gap-[20px]">
              <h2 className="m-0 h-[66px] relative text-inherit tracking-[-0.04em] font-semibold font-inherit flex items-center mq450:text-3xl">
                <span>
                  <p className="m-0">{`REVIEW `}</p>
                  <p className="m-0">MEDICAL SCANS</p>
                </span>
              </h2>
              <div className="self-stretch h-[173px] relative text-base text-black inline-block shrink-0 font-ink-free">
                <span>
                  Our experienced radiologists will provide a thorough analysis
                  of your medical scans, giving you a clear and concise report
                  of the findings. You can also get a second opinion from our
                  specialists if needed.
                </span>
                <span className="font-jost">{` `}</span>
              </div>
            </div>
          </div>
          <div className="flex-[0.9847] flex flex-col items-start justify-start py-0 pr-1 pl-0 box-border min-w-[241px] max-w-[262px] mq450:flex-1">
            <div className="w-full rounded-19xl bg-lavenderblush overflow-hidden flex flex-row items-end justify-center pt-7 px-0 pb-0 box-border max-w-[258px] min-h-[320px] max-h-[320px]">
              <div className="flex-1 flex flex-col items-center justify-start py-0 px-5 gap-[20px]">
                <h2 className="m-0 w-[213px] h-[99px] relative text-inherit tracking-[-0.04em] font-semibold font-inherit flex items-center mq450:text-3xl">
                  <span className="w-full">
                    <p className="m-0">GET</p>
                    <p className="m-0"> PERSONALIZED</p>
                    <p className="m-0">ADVICES</p>
                  </span>
                </h2>
                <div className="self-stretch h-[173px] relative text-base text-black inline-block shrink-0 font-ink-free">
                  <span>
                    Our team of experienced doctors and healthcare professionals
                    are available to provide you with personalized advice and
                    guidance on a wide range of health topics. Get the support
                    you need to make informed decisions about your health.
                  </span>
                  <span className="font-jost">{` `}</span>
                </div>
              </div>
            </div>
          </div>
          <GroupFrame
            aYURVEDIC="AYURVEDIC "
            hOMEREMEDIES="HOME REMEDIES"
            sUGGESTIONS="SUGGESTIONS"
            descriptionLoremIpsumLore="Explore the power of natural remedies with our curated collection of Ayurvedic home remedies. Get personalized suggestions based on your unique health profile and find natural solutions to common ailments."
          />
        </div>
        <div className="w-[573px] flex flex-row flex-wrap items-start justify-center gap-[57px] max-w-full mq750:gap-[57px]">
          <div className="flex-1 rounded-19xl bg-lavenderblush overflow-hidden flex flex-row items-end justify-center pt-7 px-0 pb-0 box-border min-w-[168px] max-w-[258px] min-h-[320px] max-h-[320px]">
            <div className="h-[292px] flex-1 flex flex-col items-start justify-start pt-0 px-5 pb-0 box-border">
              <div className="self-stretch flex flex-col items-center justify-start gap-[20px]">
                <h2 className="m-0 w-[213px] h-[132px] relative text-inherit tracking-[-0.04em] font-semibold font-inherit flex items-center mq450:text-3xl">
                  <span className="w-full">
                    <p className="m-0">BLOOD and MEDICINE</p>
                    <p className="m-0">{`DONATION `}</p>
                    <p className="m-0">SERVICES</p>
                  </span>
                </h2>
                <div className="self-stretch h-[173px] relative text-base font-jost text-black inline-block shrink-0">
                  Be a part of something bigger and save lives by donating
                  blood. Our blood donation services make it easy for you to
                  contribute to your community and help those in need.
                </div>
              </div>
            </div>
          </div>
          <GroupFrame
            aYURVEDIC="ORGAN"
            hOMEREMEDIES="DONATION "
            sUGGESTIONS="SERVICES"
            descriptionLoremIpsumLore="Give the gift of life by becoming an organ donor. Our organ donation services will guide you through the process and provide support to ensure a smooth and meaningful experience."
            propMinWidth="168px"
            propHeight="unset"
            propWidth="213px"
            propFlex="unset"
            propHeight1="173px"
          />
        </div>
      </div>
    </section>

    </div>
  )
}

export default Frame2
