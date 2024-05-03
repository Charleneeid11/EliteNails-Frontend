import Image from "next/image";
import Hero from "./components/Hero";
import Services from "./components/Services";

export default function Home() {
  return (
    <div>
      <Hero />

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
