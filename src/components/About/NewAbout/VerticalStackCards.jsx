import Image from "next/image";
import OurTeam from "./OurTeam";

const VerticalStackCards = ({ cardData }) => {
  return (
    <div className="relative min-h-screen px-5 sm:px-10 md:px-12">
      <div className="px-5 sm:px-10 pt-14 md:px-12 w-full h-[465px] sticky top-0 bg-[#141414] rounded-tr-[30px] rounded-tl-[30px]    lg:rounded-tr-[60px] lg:rounded-tl-[60px] overflow-hidden">
        <div className="grid grid-cols-1 lg:grid-cols-2 md:gap-x-5 gap-y-4 lg:gap-y-0">
          <h3 className="font-sora text-3xl sm:text-4xl lg:text-6xl font-normal leading-[133%] tracking-[-2.4px] w-full text-white lg:text-start text-center">
            {cardData?.cando_attitude_heading}
          </h3>
          <p
            dangerouslySetInnerHTML={{
              __html: cardData?.cando_attitude_description,
            }}
            className="space-y-3 lg:space-y-8 font-satoshi text-sm md:text-base font-normal leading-[154%] text-white text-center lg:text-start"
          />
        </div>
      </div>

      <div
        className="-mt-16 w-full h-[465px] sticky top-0  rounded-tr-[30px] rounded-tl-[30px] lg:rounded-tr-[60px] lg:rounded-tl-[60px] overflow-hidden"
        style={{ zIndex: 2 }}
      >
        <Image
          src={cardData?.cando_attitude_image}
          fill={true}
          className="object-center h-full object-cover overflow-hidden"
          alt="imageAbout"
        />
      </div>

      <div
        className="px-5 sm:px-10 md:px-12 -mt-16 w-full h-[465px] sticky top-0 pt-14 bg-[#fff]  rounded-tr-[30px] rounded-tl-[30px] lg:rounded-tr-[60px] lg:rounded-tl-[60px] overflow-hidden"
        style={{ zIndex: 3 }}
      >
        <div className="grid grid-cols-1 lg:grid-cols-2 md:gap-x-5 gap-y-4 lg:gap-y-0">
          <h3
            className="font-sora text-[#101763] text-3xl sm:text-4xl lg:text-6xl font-normal lg:text-start leading-[154%] tracking-[-2.4px] w-full text-center lg:w-[634px]"
            style={{
              lineHeight: "1.2",
            }}
          >
            {cardData?.our_team_heading}
          </h3>
          <p
            className="font-satoshi text-sm md:text-base font-normal leading-[154%] text-[#000] space-y-3 md:space-y-8 text-center lg:text-start md:ml-0 ml-7"
            dangerouslySetInnerHTML={{ __html: cardData?.our_team_description }}
          />
        </div>
      </div>

      <OurTeam
        title={cardData?.meet_our_team_heading}
        team={cardData?.meet_our_team_list}
        data={cardData}
      />
    </div>
  );
};

export default VerticalStackCards;
