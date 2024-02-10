import React from 'react'

const Frame1 = () => {
  return (
    <div>
      <section className="flex flex-col items-center self-stretch justify-center max-w-full text-left text-black text-41xl font-kumbh-sans">
      <div className="self-stretch flex flex-col items-center justify-start pt-5 pb-5 pr-3.5 pl-3.5 box-border relative gap-5 max-w-full mq750:gap-5">
        <div className="w-[1696px] h-full absolute my-0 mx-[!important] top-[0px] bottom-[0px] left-[-133px] flex items-center justify-center z-[0]">
          <img
            className="w-full h-full max-h-full object-contain absolute left-[0px] top-[24px] [transform:scale(1.052)]"
            alt=""
            src="/src/assets/BG.svg"
          />
        </div>
        <header className="self-stretch flex flex-row items-start justify-start py-0 pr-5 pl-[57px] box-border max-w-full text-left text-51xl text-tomato font-kumbh-sans lg:pl-7 lg:box-border">
          <div className="flex-1 flex flex-row items-start justify-between gap-[20px] max-w-full">
            <div className="flex flex-col items-start justify-start pt-[22px] px-0 pb-0">
              <h1 className="m-0 h-[87px] relative text-inherit font-normal font-inherit inline-block whitespace-nowrap z-[1]">
                <span>Aid</span>
                <span className="text-black">wise</span>
              </h1>
            </div>
            <div className="flex flex-row items-center justify-start py-0 pr-px pl-0 box-border gap-[124px] max-w-full text-6xl text-black mq450:gap-[124px] mq1050:hidden mq1050:gap-[124px]">
              <h3 className="m-0 h-[31px] relative text-inherit font-normal font-inherit inline-block z-[1]">
                Home
              </h3>
              <h3 className="m-0 h-[31px] relative text-inherit font-normal font-inherit inline-block z-[1]">
                Services
              </h3>
              <h3 className="m-0 h-[31px] relative text-inherit font-normal font-inherit inline-block whitespace-nowrap z-[1]">
                About us
              </h3>
              <button className="cursor-pointer pt-3 pb-4 pr-[39px] pl-12 bg-lightcoral-100 rounded-4xl flex flex-row items-center justify-end relative z-[1] border-[1px] border-solid border-white">
                <div className="h-[62px] w-[171px] relative rounded-4xl bg-lightcoral-100 box-border hidden z-[0] border-[1px] border-solid border-white" />
                <div className="h-[62px] w-full absolute my-0 mx-[!important] right-[0px] bottom-[0px] left-[0px] rounded-4xl bg-lightcoral-200 box-border z-[1] border-[1px] border-solid border-white" />
                <b className="relative text-11xl font-kumbh-sans text-white text-left whitespace-nowrap z-[2]">
                  log in
                </b>
              </button>
            </div>
          </div>
        </header>
        <div className="self-stretch flex flex-row items-start justify-start gap-[35px] max-w-full lg:flex-wrap mq750:gap-[35px]">
          <img
            className="h-[714px] flex-1 relative max-w-full overflow-hidden object-cover min-w-[477px] z-[1] mq750:min-w-full"
            alt=""
            src="/src/assets/image 1.svg"
          />
          <div className="w-[626px] flex flex-col items-start justify-start gap-[3px] min-w-[626px] max-w-full lg:flex-1 mq750:min-w-full">
            <a
              className="w-[609px] h-[228px] relative inline-block [text-decoration:none] max-w-full z-[1] text-[inherit] mq450:text-17xl mq1050:text-29xl"
              href={`https://www.hdfcergo.com/campaigns/health-insurance-detail-new?&utm_source=bing_search&utm_medium=cpc&utm_campaign=Health_Search_DSA&utm_adgroup=DSA&adid=&utm_term=HEALTH_LANDING_PAGE&utm_network=o&utm_matchtype=b&utm_device=c&utm_location=144046&utm_sitelink={sitelink}&utm_placement=&ci=bingsearch&SEM=1&msclkid=db9aa3a67b2a1ffc46fac66170555c88`}
              target="_blank"
            >
              <span>
                <span>Your</span>
                <span className="text-tomato">{` `}</span>
              </span>
              <span className="text-46xl text-tomato">
                <span className="text-tomato">one</span>
                <span className="text-black">{` `}</span>
                <span>stop</span>
              </span>
              <span>
                <span>{` `}</span>
                <span>solution for all your health needs</span>
              </span>
            </a>
            <div className="self-stretch h-[181px] relative inline-block z-[1] text-xl mq450:text-base">
              <p className="m-0">
                Welcome to AidWise, your ultimate Health Companion! Seamlessly
                review medical prescriptions, reports, and scan images, receive
                personalized advice rooted in Indian Ayurvedic Home remedies,
                and connect with vital Blood, Organ, and medicine donation
                services.
              </p>
              <p className="m-0 text-6xl">
                Let's put your well-being first, together.
              </p>
              <p className="m-0">{` `}</p>
            </div>
          </div>
        </div>
        <button className="cursor-pointer pt-3 pb-[13px] pr-[26px] pl-[47px] bg-lightcoral-200 my-0 mx-[!important] absolute bottom-[-13px] left-[95px] rounded-4xl box-border flex flex-row items-center justify-start gap-[17px] max-w-full whitespace-nowrap z-[2] border-[1px] border-solid border-white hover:bg-indianred hover:box-border hover:border-[1px] hover:border-solid hover:border-gainsboro">
          <div className="h-[62px] w-[350px] relative rounded-4xl bg-lightcoral-200 box-border hidden max-w-full border-[1px] border-solid border-white" />
          <b className="h-[37px] relative text-11xl inline-block font-kumbh-sans text-white text-left z-[1]">
            Get an account
          </b>
          <img
            className="h-[25px] w-[45px] relative z-[1]"
            alt=""
            src="/login-btn.svg"
          />
        </button>
      </div>
    </section>
  
    </div>
  )
}

export default Frame1

