import Image from "next/image";

const statsList = [
  { title: "Quality Products", image: "/icons/qualityProducts.svg" },
  { title: "Qualified Personnel", image: "/icons/qualifiedPersonnel.svg" },
  { title: "High Standards", image: "/icons/highStandards.svg" },
];

export default function Home() {
  return (
    <div>
      {/* Hero */}
      <div className="h-[600px] max-lg:h-[500px] max-sm:[200px] flex justify-center max-sm:justify-start px-20 max-lg:px-10 max-sm:px-6 gap-4 flex-col">
        <h1 className="font-bold text-7xl max-xl:text-6xl max-lg:text-5xl max-md:text-4xl max-sm:text-3xl">
          Max Your Beauty <br /> With Our Best <br /> Service
        </h1>
        <p className="text-base max-md:text-sm max-sm:text-xs">
          We provide beauty and treatment services <br className="lg:hidden" />{" "}
          with the best quality
        </p>
      </div>

      {/* Stats */}
      <div className="lg:h-[150px] bg-[#ECD8BD] flex w-full justify-between relative text-black">
        <div className="flex h-full justify-center items-center gap-16 w-full  max-lg:justify-between lg:w-1/2 max-lg:px-36 max-lg:py-12 max-sm:py-6 max-md:px-20 max-sm:px-6">
          {statsList.map((stat, index) => (
            <div
              key={index}
              className="flex flex-col items-center gap-2 text-center"
            >
              <Image
                src={stat.image}
                alt={stat.title}
                width={50}
                height={50}
                className="w-[50px] max-lg:w-[40px]"
              />
              <p className="max-lg:text-sm">{stat.title}</p>
            </div>
          ))}
        </div>
        <Image
          src="/heroWoman.png"
          alt="Star"
          width={900}
          height={1000}
          className="absolute 2xl:-bottom-[48px] right-0 w-[900px] max-2xl:w-[800px] max-2xl:-bottom-[41px] max-xl:w-[700px] max-xl:-bottom-[34px] max-lg:w-[600px] max-lg:bottom-[134px] max-md:w-[500px] max-md:bottom-[140px] max-sm:w-[400px] max-sm:bottom-[118px]"
        />
      </div>

      {/* Services Summary */}
      <div className="flex max-lg:flex-col py-28 px-44 max-2xl:px-20 max-lg:py-8 max-lg:px-4 gap-28">
        <div className=" h-full flex items-start shrink-0">
          <Image
            src="/BeautyService.png"
            alt="Beauty service"
            width={580}
            height={784}
            className="w-[500px] max-xl:w-[400px] max-xl:h-[700px] object-cover max-lg:w-full max-lg:h-[500px]"
          />
        </div>
        <div className="">
          <div className="flex flex-col gap-y-10 mb-28">
            <h1 className="text-bold text-7xl max-2xl:text-5xl max-md:text-2xl">
              Professional Beauty Services and Massage
            </h1>
            <p>
              We offer a comprehensive range of services, from advanced skincare
              treatments to therapeutic massages, all designed to rejuvenate
              your body and enhance your beauty. Our expert team of
              aestheticians and therapists are here to ensure every visit leaves
              you feeling beautiful and refreshed.
            </p>
            <button className="py-2 px-4 text-[#212121] bg-[#ECD8BD] w-[240px] max-md:w-[150px] max-2xl:w-[240px] rounded-full text-base text-bold">
              View Services
            </button>
          </div>
          <div>
            <Image
              src="/Massage.png"
              alt="massage"
              width={870}
              height={360}
              className="shrink-0 w-full h-[360px] object-cover"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
