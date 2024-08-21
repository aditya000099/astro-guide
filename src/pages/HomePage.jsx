import React from "react";
import Spline from "@splinetool/react-spline";
import Header from "../components/Header";
import bg from "../assets/bg.png";
import bg2 from "../assets/bg2.png";
import bg3 from "../assets/bg3.png";
import footer from "../assets/footer.png";
import circle from "../assets/Circle.png";

const HomePage = () => {
  return (
    <>
      <Header />
      {/* <div className="">
        <Spline scene="https://prod.spline.design/FYEAMKpg7S-CBcqb/scene.splinecode" />
        <div className="bg-black opacity-90"></div>
      </div> */}
      <div className="relative">
        <img className="w-full h-auto" src={bg} alt="Background Image" />

        {/* Spline model positioned absolutely above the image */}
        <div className="absolute inset-0 z-10">
          <Spline scene="https://prod.spline.design/ZXwzan74mHFNauZi/scene.splinecode" />
        </div>

        {/* Text overlay positioned above both the image and the Spline model */}
        <div className="absolute inset-0 z-20 flex flex-col mt-24 items-center text-white">
          <h1 className="text-4xl md:text-8xl font-bold pf-normal">
            Unveiling the <span className="pf-italic">Universe</span>
          </h1>
          <h1 className="text-4xl md:text-8xl font-bold mt-8 pf-normal">
            <span className="pf-italic">Within</span> You
          </h1>
          <h1 className="text-lg mt-10">
            AstroGuide helps you explore your cosmic path
          </h1>
          <div className="flex gap-4 mt-10">
            <button className="bg-lime-300 rounded-md px-3 py-2 text-gray-900">
              Book a session
            </button>
            <button className="bg-transparent rounded-md px-3 py-2 text-lime-300 border-lime-300">
              Weekly Horoscope
            </button>
          </div>
        </div>
      </div>

      <div className="p-[4rem]">
        <h1
          className="text-[2.6rem] pf-normal leading-relaxed"
          style={{
            wordSpacing:
              "0.2em" /* Adjust this value for desired word spacing */,
            lineHeight: "1.4" /* Adjust this value for desired line spacing */,
            maxWidth: "1920px" /* Adjust this value to control line breaks */,
            textAlign: "left",
          }}
        >
          At AstroGuide, we are committed to helping you discover the incredible
          wisdom that the stars and planets hold. Our commitment includes:
        </h1>
        <div className="flex gap-12 mt-14">
          <div className="flex flex-col gap-8 w-1/3">
            <h1
              className="text-[1.6rem] pf-normal leading-relaxed"
              style={{
                wordSpacing:
                  "0.2em" /* Adjust this value for desired word spacing */,
                lineHeight:
                  "1.4" /* Adjust this value for desired line spacing */,
                maxWidth:
                  "1920px" /* Adjust this value to control line breaks */,
                textAlign: "left",
              }}
            >
              Providing accurate and insightful astrological readings{" "}
            </h1>
            <h1
              className="text-[0.9rem] leading-relaxed"
              style={{
                wordSpacing:
                  "0.2em" /* Adjust this value for desired word spacing */,
                lineHeight:
                  "1.4" /* Adjust this value for desired line spacing */,
                maxWidth:
                  "1920px" /* Adjust this value to control line breaks */,
                textAlign: "left",
              }}
            >
              Lorem ipsum dolor sit amet consectetur. Adipiscing sodales cras
              dictum enim sit neque enim enim. Integer semper pretium felis
              libero magna a ipsum vivamus vitae. Pulvinar dolor nibh tortor
              ornare nullam risus mi.{" "}
            </h1>
          </div>
          <div className="flex flex-col gap-8 w-1/3">
            <h1
              className="text-[1.6rem] pf-normal leading-relaxed"
              style={{
                wordSpacing:
                  "0.2em" /* Adjust this value for desired word spacing */,
                lineHeight:
                  "1.4" /* Adjust this value for desired line spacing */,
                maxWidth:
                  "1920px" /* Adjust this value to control line breaks */,
                textAlign: "left",
              }}
            >
              Delivering timely and reliable guidance for your daily life{" "}
            </h1>
            <h1
              className="text-[0.9rem] leading-relaxed"
              style={{
                wordSpacing:
                  "0.2em" /* Adjust this value for desired word spacing */,
                lineHeight:
                  "1.4" /* Adjust this value for desired line spacing */,
                maxWidth:
                  "1920px" /* Adjust this value to control line breaks */,
                textAlign: "left",
              }}
            >
              Lorem ipsum dolor sit amet consectetur. Adipiscing sodales cras
              dictum enim sit neque enim enim. Integer semper pretium felis
              libero magna a ipsum vivamus vitae. Pulvinar dolor nibh tortor
              ornare nullam risus mi.{" "}
            </h1>
          </div>
          <div className="flex flex-col gap-8 w-1/3">
            <h1
              className="text-[1.6rem] pf-normal leading-relaxed"
              style={{
                wordSpacing:
                  "0.2em" /* Adjust this value for desired word spacing */,
                lineHeight:
                  "1.4" /* Adjust this value for desired line spacing */,
                maxWidth:
                  "1920px" /* Adjust this value to control line breaks */,
                textAlign: "left",
              }}
            >
              Continuously learning and growing in the field of astrology{" "}
            </h1>
            <h1
              className="text-[0.9rem] leading-relaxed"
              style={{
                wordSpacing:
                  "0.2em" /* Adjust this value for desired word spacing */,
                lineHeight:
                  "1.4" /* Adjust this value for desired line spacing */,
                maxWidth:
                  "1920px" /* Adjust this value to control line breaks */,
                textAlign: "left",
              }}
            >
              Lorem ipsum dolor sit amet consectetur. Adipiscing sodales cras
              dictum enim sit neque enim enim. Integer semper pretium felis
              libero magna a ipsum vivamus vitae. Pulvinar dolor nibh tortor
              ornare nullam risus mi.{" "}
            </h1>
          </div>
        </div>
      </div>
      <div className="mt-40 relative">
        <img className="w-full h-auto" src={bg2} alt="Background Image" />
        <div className="absolute inset-0 flex flex-col items-start text-white p-[4rem]">
          <h1 className="text-xl text-lime-300 leading-relaxed">
            WHY CHOOSE US
          </h1>
          <h1
            className="text-[2.7rem] mt-4 pf-normal"
            style={{
              wordSpacing: "0.1em",
              textAlign: "left",
            }}
          >
            Discover Your Path in the Stars with Us
          </h1>
          <div className="mt-16 flex flex-row gap-4">
            <div className="w-1/3 border flex flex-col justify-center items-center border-white bg-white bg-opacity-5 backdrop-filter backdrop-blur-lg rounded-xl p-6">
              <img src={circle} />
              <h1
                className="text-[1.7rem] mt-4 pf-normal"
                style={{
                  wordSpacing: "0.1em",
                }}
              >
                Expert Astrologers
              </h1>
              <h1 className="text-sm mt-8 text-center">
                We generate your natal chart and interpret the positions of the
                planets, signs, and houses to give you insights into your
                personality, strengths, weaknesses, and life path.
              </h1>
            </div>
            <div className="w-1/3 border flex flex-col justify-center items-center border-white bg-white bg-opacity-5 backdrop-filter backdrop-blur-lg rounded-xl p-6">
              <img src={circle} />
              <h1
                className="text-[1.7rem] mt-4 pf-normal"
                style={{
                  wordSpacing: "0.1em",
                }}
              >
                Compatibility Readings{" "}
              </h1>
              <h1 className="text-sm mt-8 text-center">
                We can analyze the compatibility between two individuals by
                comparing their natal charts. This can help people understand
                their relationships with partners, friends, or family members
                better.
              </h1>
            </div>
            <div className="w-1/3 border flex flex-col justify-center items-center border-white bg-white bg-opacity-5 backdrop-filter backdrop-blur-lg rounded-xl p-6">
              <img src={circle} />
              <h1
                className="text-[1.7rem] mt-4 pf-normal"
                style={{
                  wordSpacing: "0.1em",
                }}
              >
                Progression Readings
              </h1>
              <h1 className="text-sm mt-8 text-center">
                We provide insights into upcoming planetary transits and
                progressions that may influence your life events and
                experiences. It can be useful for timing significant decisions
                or life changes.
              </h1>
            </div>
          </div>
        </div>
      </div>
      {/* <div className="mt-20 h-fit">
        <img src={bg3} />
      </div> */}
      <div className="mt-40 relative">
        <img src={footer} />
        <div className="absolute inset-0 mt-20 p-20 flex flex-row gap-10 justify-center items-center">
        <div className="">
        <h1 className="text-xl text-lime-300 leading-relaxed">
            ASTROGUIDE
          </h1>
        <h1 className="text-xl mt-10 leading-relaxed ">
            We help you exploring your cosmic path
          </h1>
          </div>
        <div className="">
        <h1 className="text-xl pf-normal text-lime-300 leading-relaxed">
            Company
          </h1>
          <ul>
            <li>About Us</li>
            <li>Readers</li>
            <li>Service</li>
            <li>Horoscope</li>
          </ul>
          </div>
        <div className="">
        <h1 className="text-xl pf-normal text-lime-300 leading-relaxed">
            Services
          </h1>
          <ul>
            <li>Natal Chart Readings</li>
            <li>Compatibility Readings</li>
            <li>Progression Readings</li>
            <li>Speciality Readings</li>
          </ul>
          </div>
        <div className="">
        <h1 className="text-xl pf-normal text-lime-300 leading-relaxed">
            Contact Us
          </h1>
          <ul>
            <li>astrog@gmail.com</li>
            <li>+91 463847393</li>
            <li>#47 Astro Street, India</li>
            
          </ul>
          </div>
        <div className="">
        <h1 className="text-xl pf-normal text-lime-300 leading-relaxed">
            Subscribe for any updates
          </h1>
          <div className="flex gap-4 mt-10">
          <button className="bg-transparent rounded-md px-3 border-white">
              Enter your email
            </button>
            <button className="bg-lime-300 rounded-md px-3 text-gray-900">
              Subscribe
            </button>
            
          </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HomePage;
