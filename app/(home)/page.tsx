import Image from "next/image";

const statsList = [
  { title: "Quality Products", image: "/icons/qualityProducts.svg" },
  { title: "Qualified Personnel", image: "/icons/qualifiedPersonnel.svg" },
  { title: "High Standards", image: "/icons/highStandards.svg" },
]

export default function Home() {
  return (
    <div>
      {/* Hero */}
      <div className="h-[600px] max-lg:h-[500px] max-sm:[200px] flex justify-center max-sm:justify-start px-20 max-lg:px-10 max-sm:px-6 gap-4 flex-col">
        <h1 className="font-bold text-7xl max-xl:text-6xl max-lg:text-5xl max-md:text-4xl max-sm:text-3xl">
          Max Your Beauty <br /> With Our Best <br /> Service
        </h1>
        <p className="text-base max-md:text-sm max-sm:text-xs">
          We provide beauty and treatment services <br className="lg:hidden"/> with the best quality
        </p>
      </div>

      {/* Stats */}
      <div className="lg:h-[150px] bg-[#ECD8BD] flex w-full justify-between relative text-black">
        <div className="flex h-full justify-center items-center gap-16 w-full  max-lg:justify-between lg:w-1/2 max-lg:px-36 max-lg:py-12 max-sm:py-6 max-md:px-20 max-sm:px-6">
          {
            statsList.map((stat, index) => (
              <div key={index} className="flex flex-col items-center gap-2 text-center">
                <Image src={stat.image} alt={stat.title} width={50} height={50} className="w-[50px] max-lg:w-[40px]" />
                <p className="max-lg:text-sm">{stat.title}</p>
              </div>
            ))
          }
        </div>
        <Image 
          src="/heroWoman.png"
          alt="Star"
          width={900}
          height={1000}
          className="absolute 2xl:-bottom-[48px] right-0 w-[900px] max-2xl:w-[800px] max-2xl:-bottom-[41px] max-xl:w-[700px] max-xl:-bottom-[34px] max-lg:w-[600px] max-lg:bottom-[134px] max-md:w-[500px] max-md:bottom-[140px] max-sm:w-[400px] max-sm:bottom-[118px]"
        />
      </div>
      {/* <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <div
          style={{
            flex: 1,
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            paddingTop: "100px",
            paddingLeft: "60px",
          }}
        >
          <Image
            src="/icons/needlingfacial.svg"
            alt="Needling Facial"
            width={450}
            height={450}
          />
        </div>
        <div
          style={{
            flex: 1,
            display: "flex",
            flexDirection: "column",
            alignItems: "left",
            padding: "0 100px",
          }}
        >
          <Image
            src="/icons/professionalbeautyservices.svg"
            alt="Professional Beauty Services"
            width={500}
            height={500}
            style={{ paddingTop: "110px" }}
          />
          <p
            style={{
              fontFamily: "Poppins",
              color: "#FFFFFF",
              textAlign: "left",
              padding: "20px 0 0 0",
            }}
          >
            Lorem ipsum dolor sit amet consectetur adipiscing elit Ut et. Lorem
            ipsum dolor sit amet consectetur adipiscing elit Ut et.
          </p>
          <button
            style={{
              fontFamily: "Inika",
              fontSize: "20px",
              color: "#212121",
              background: "#ECD8BD",
              border: "none",
              padding: "10px 20px",
              cursor: "pointer",
              position: "relative",
              top: "50px",
              left: "0px",
              borderRadius: "20px",
              width: "200px",
            }}
          >
            View Services
          </button>
          <div style={{ position: "relative", top: "190px" }}>
            <Image
              src="/icons/halffacemask.svg"
              alt="Half Face Mask"
              width={600}
              height={600}
            />
            <Image
              src="/icons/sparkwheel.svg"
              alt="Spark Wheel"
              width={300}
              height={300}
              style={{ position: "absolute", left: "440px", top: "-180px" }}
            />
          </div>
        </div>
      </div>
      <div style={{ position: "relative", top: "175px" }}>
        <Image
          src="/icons/star.svg"
          alt="Star"
          width={90}
          height={90}
          style={{ marginLeft: "40px" }}
        />
      </div>
      <Services style={{ width: "100%", display: "block" }}>
        <div
          style={{
            background: "#ECD8BD",
            marginTop: "300px",
            paddingBottom: "130px",
            width: "100%",
            height: "auto",
            margin: "250px 0 0 0",
          }}
        >
          <h2
            style={{
              fontFamily: "Inika",
              fontSize: "46px",
              fontWeight: "bold",
              color: "#212121",
              textAlign: "center",
              margin: "20px 0 0 0",
              width: "100%",
              height: "55px",
              marginTop: "80px",
            }}
          >
            Our Services
          </h2>
          <p
            style={{
              fontFamily: "Inika",
              fontSize: "15px",
              color: "#7D5620",
              textAlign: "center",
            }}
          >
            Treat yourself to our services for all ages and genders.
          </p>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              padding: "20px",
              paddingTop: "70px",
            }}
          >
            <button
              style={{
                background: "none",
                border: "none",
                cursor: "pointer",
                paddingLeft: "50px",
              }}
            >
              <Image
                src="/icons/buttonleft.svg"
                alt="Arrow Button"
                width={30}
                height={30}
              />
            </button>
            <div
              style={{
                flex: 1,
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                marginLeft: "5px",
              }}
            >
              <Image
                src="/icons/service1.svg"
                alt="Service 1"
                width={200}
                height={200}
                style={{ marginLeft: "10px" }}
              />
              <p
                style={{
                  fontFamily: "Inika",
                  fontSize: "20px",
                  fontWeight: "bold",
                  color: "#7D5620",
                  textAlign: "center",
                }}
              >
                Glow Peel
              </p>
            </div>
            <div
              style={{
                flex: 1,
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                marginLeft: "5px",
              }}
            >
              <Image
                src="/icons/service2.svg"
                alt="Service 2"
                width={200}
                height={200}
                style={{ marginLeft: "10px" }}
              />
              <p
                style={{
                  fontFamily: "Inika",
                  fontSize: "20px",
                  fontWeight: "bold",
                  color: "#7D5620",
                  textAlign: "center",
                }}
              >
                Microneedling
              </p>
            </div>
            <div
              style={{
                flex: 1,
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                marginLeft: "5px",
              }}
            >
              <Image
                src="/icons/service3.svg"
                alt="Service 3"
                width={200}
                height={200}
                style={{ marginLeft: "10px" }}
              />
              <p
                style={{
                  fontFamily: "Inika",
                  fontSize: "20px",
                  fontWeight: "bold",
                  color: "#7D5620",
                  textAlign: "center",
                }}
              >
                Microneedling Botox
              </p>
            </div>
            <div
              style={{
                flex: 1,
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                marginLeft: "5px",
              }}
            >
              <Image
                src="/icons/service4.svg"
                alt="Service 4"
                width={200}
                height={200}
                style={{ marginLeft: "10px" }}
              />
              <p
                style={{
                  fontFamily: "Inika",
                  fontSize: "20px",
                  fontWeight: "bold",
                  color: "#7D5620",
                  textAlign: "center",
                }}
              >
                Laser Facial Rejuvenation
              </p>
            </div>
            <button
              style={{
                background: "none",
                border: "none",
                cursor: "pointer",
                paddingLeft: "50px",
              }}
            >
              <Image
                src="/icons/buttonright.svg"
                alt="Arrow Button"
                width={30}
                height={30}
              />
            </button>
          </div>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              padding: "20px",
              paddingTop: "90px",
            }}
          >
            <button
              style={{
                fontFamily: "Inika",
                fontSize: "17px",
                color: "#ECD8BD",
                background: "#212121",
                border: "none",
                padding: "10px 20px",
                cursor: "pointer",
                borderRadius: "20px",
                width: "200px",
              }}
            >
              View All Services
            </button>
          </div>
        </div>
      </Services> */}
    </div>
  );
}
