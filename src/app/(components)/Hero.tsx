import AnimatedLink from "./AnimatedLink";
import "./hero.css";

export default function Hero() {
  return (
    <div className="w-full h-screen bg-gradient-to-b from-gray-950 to-[#c47a0a]">
      <div className="container mx-auto">
        <div className="text-center px-3 lg:px-0">
          <div className="grid grid-cols-1 place-items-center">
            <div className="w-fit">
              <h1
                className="text-white animated terminal my-4 text-2xl md:text-3xl lg:text-5xl font-black py-3"
              >
                Jordan Cyber Club
              </h1>
            </div>
            <p dir="rtl" className="text-gray-200 leading-normal text-base md:text-xl lg:text-2xl mb-8 arabic-medium pt-4">
              أول مظلة للأمن السيبراني على مستوى المملكة الأردنية الهاشمية.
            </p>
          </div>

          <button
            className=" mx-auto lg:mx-0 hover:underline text-gray-800 font-extrabold rounded my-2 md:my-6 py-4 px-8 shadow-lg w-48"
          >
            <AnimatedLink color="bg-black" href="about">About Us</AnimatedLink>
          </button>
          {/*
          <a
            href="#"
            className="inline-block mx-auto lg:mx-0 hover:underline bg-transparent text-white font-extrabold my-2 md:my-6 py-2 lg:py-4 px-8"
          >View Additional Action</a
          >
          */}
        </div>

        <div className="flex items-center w-full mx-auto content-end">
          <div
            className="browser-mockup flex flex-1 m-6 md:px-0 md:m-12 bg-white w-1/2 rounded shadow-xl"
          >
            <span className="relative text-gray-300 pt-4 pl-2">
              <div className='firstLine'>
                    <div className='preDec'>
                    </div>
                    <div className='f_text'>
                        <span className='userName'>jcc</span>
                        <span className='hostName'>parrot</span>
                    </div>
                    <div className='postDec'>
                    </div>
                    <div className='directory'>/home/jcc/Documents</div>
                    <div className='finPostDec'>
                    </div>
                </div>
                <div className='secondLine'>
                    <div className='scDec'></div>
                    <div className='command'>Black Minds, White Hands</div>
                </div>
            </span>
          </div>
        </div>
      </div>
    </div>

  );
}
