import Image from "next/image";
import Link from "next/link";

const statsList = [
  { title: "Quality Products", image: "/icons/qualityProducts.svg" },
  { title: "Qualified Personnel", image: "/icons/qualifiedPersonnel.svg" },
  { title: "High Standards", image: "/icons/highStandards.svg" },
];

export default function Home() {
  const services = [
    {
      title: "Laser Facial Rejuvenation",
      price: "5",
      image: "/servicesHome/1.png",
    },
    {
      title: "Anti-Aging Facial",
      price: "3",
      image: "/servicesHome/2.png",
    },
    {
      title: "Deep Tissue Massage",
      price: "4",
      image: "/servicesHome/3.png",
    },
    {
      title: "Lymphatic Drainage Massage",
      price: "5",
      image: "/servicesHome/4.png",
    },
    {
      title: "Hot Stone Massage",
      price: "4",
      image: "/servicesHome/5.png",
    },
  ];
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

      {/* Services */}
      <div className="bg-[#ECD8BD] text-[#212121] py-32 px-44 flex flex-col items-center max-sm:px-4">
        <h1 className="font-bold text-6xl mb-2">Our Services</h1>
        <p className="text-[#7D5620] text-base">
          Treat yourself to our services for all ages and genders
        </p>
        <div className="flex gap-11 flex-wrap justify-center max-sm:gap-0">
          {services.map((service, index) => (
            <div key={index} className="flex gap-4 my-8 flex-col">
              <div className="w-[270px] h-[380px]">
                <Image
                  src={service.image}
                  alt={service.title}
                  width={270}
                  height={380}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="flex flex-col w-[270px]">
                <h2 className="font-bold text-3xl">{service.title}</h2>
                <p className="text-[#7D5620]">From $ {service.price}</p>
              </div>
            </div>
          ))}
        </div>
        <button className="py-3 px-12 rounded-full border border-[#212121]">
          View All Services
        </button>
      </div>

      {/* About Us */}
      <div className="flex space-between py-40 max-lg:flex-col max-lg:items-center">
        <div className="w-[460px] h-[650px] max-sm:w-full">
          <Image
            src="/aboutUs/1.png"
            alt="About us"
            width={460}
            height={650}
            className="w-full h-full object-cover"
          />
        </div>
        <div className="pt-60 pb-32 px-36 max-2xl:px-28 max-xl:px-20 max-lg:px-12 text-center">
          <h1 className="font-bold text-5xl mb-16">About Us</h1>
          <p className="text-base">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae
            dolorum corrupti fuga, dicta minima quia alias rerum veniam at rem
            labore minus perspiciatis obcaecati, doloribus nostrum esse,
            distinctio quo quos. Illo, assumenda aliquam dolore quia, vel atque
            perferendis et voluptatum ex in hic! Beatae ea quae nulla ipsum unde
            voluptatem?
          </p>
        </div>
        <div className="h-[650px] w-[460px] max-sm:w-full">
          <Image
            src="/aboutUs/2.png"
            alt="About us"
            width={650}
            height={460}
            className="w-full h-full object-cover"
          />
        </div>
      </div>
      {/* Contact Info */}
      <div className="py-28 px-56 max-sm:px-4 max-2xl:px-4 max-2xl:gap-10 bg-[#ECD8BD] text-[#212121] flex gap-10 justify-center max-lg:flex-col items-center">
        <div className="max-lg:w-full">
          <iframe
            className="rounded-3xl max-lg:w-full"
            src="https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d1769.0294917750055!2d35.66285326969643!3d34.25136307763617!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1sElite%20Nails%20Studio%20Batroun!5e0!3m2!1sen!2slb!4v1717435240561!5m2!1sen!2slb"
            width="600"
            height="450"
          ></iframe>
        </div>
        <div className="flex flex-col gap-5">
          <div className="flex flex-row gap-24">
            <div className="w-full">
              <h1 className="text-3xl max-sm:text-xl font-semibold mb-2">Contact Us</h1>
              <p className="opacity-50 text-base max-sm:text-xs">
                Lorem ipsum dolor sit amet.
              </p>
              <p className="opacity-50 text-base max-sm:text-xs">
                Lorem ipsum dolor sit amet.
              </p><p className="opacity-50 text-base max-sm:text-xs">
                Lorem ipsum dolor sit amet.
              </p><p className="opacity-50 text-base max-sm:text-xs">
                Lorem ipsum dolor sit amet.
              </p>
            </div>
            <div className="w-full">
              <h1 className="text-3xl font-semibold mb-2 max-sm:text-xl">Visit Us</h1>
              <p className="opacity-50 text-base max-sm:text-xs">
                Lorem ipsum dolor sit amet.
              </p><p className="opacity-50 text-base max-sm:text-xs">
                Lorem ipsum dolor sit amet.
              </p><p className="opacity-50 text-base max-sm:text-xs">
                Lorem ipsum dolor sit amet.
              </p><p className="opacity-50 text-base max-sm:text-xs">
                Lorem ipsum dolor sit amet.
              </p>
            </div>
          </div>
          <div className="flex gap-1 w-full justify-center">
            <Link href="/">
              <Image
                src="/icons/contacts/instagram.svg"
                alt="Instagram"
                width={50}
                height={50}
              />
            </Link>
            <Link href="/">
              <Image
                src="/icons/contacts/facebook.svg"
                alt="Facebook"
                width={50}
                height={50}
              />
            </Link>
            <Link href="/">
              <Image
                src="/icons/contacts/whatsapp.svg"
                alt="Whatsapp"
                width={50}
                height={50}
              />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
