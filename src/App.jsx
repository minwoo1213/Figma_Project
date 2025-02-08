// src/App.jsx
import React from "react";

const App = () => {
  return (
    <div className="w-[1920px] h-[4000px] relative bg-black">
      {/* Hero Section */}
      <div className="w-[1920px] h-[996px] left-0 top-0 absolute">
        <img
          className="w-full h-full absolute left-0 top-0"
          src="/hero-bg.jpg"
          alt="Hero background"
        />
        <div className="w-full h-full absolute left-0 top-0 bg-gradient-to-b from-black/60 via-black/80 to-black/60" />

        {/* Promotional Banner */}
        <div className="left-[361px] top-[956px] absolute flex items-start gap-5">
          <img
            className="w-[78px] h-[77px]"
            src="/netflix-icon.png"
            alt="Netflix icon"
          />
          <div className="w-[1100px] h-20 px-10 bg-gradient-to-r from-[#261733] to-[#151A3F] rounded-2xl flex justify-between items-center">
            <div>
              <span className="text-white text-sm font-medium font-inter">
                The Netflix you love for just $7.99.
              </span>
              <br />
              <span className="text-white text-base font-normal font-inter">
                Get our most affordable, ad-supported plan
              </span>
            </div>
            <div className="px-4 py-2.5 bg-gray-500 rounded flex justify-center items-center gap-2.5">
              <div className="text-white text-base font-normal">Learn More</div>
            </div>
          </div>
        </div>

        {/* Hero Content */}
        <div className="h-[343px] left-[637px] top-[327px] absolute flex flex-col justify-center items-center gap-9">
          <div className="text-center text-white text-[62px] font-bold font-inter leading-[80px]">
            Unlimited movies, TV
            <br />
            shows, and more
          </div>
          <div className="text-center text-white text-lg font-medium">
            Starts at $7.99. Cancel anytime.
          </div>

          {/* Email Signup */}
          <div className="flex flex-col items-center gap-2">
            <div className="text-center text-white text-lg font-medium">
              Ready to watch? Enter your email to create or restart your
              membership.
            </div>
            <div className="flex items-center gap-2">
              <input
                type="email"
                placeholder="Email address"
                className="w-[450px] h-[59px] px-4 bg-[#161616]/70 rounded border border-gray-500/70 text-white"
              />
              <button className="px-4 py-4 bg-[#E50914] rounded flex items-center gap-2.5">
                <span className="text-white text-[22px]">Get Started</span>
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M9 6L15 12L9 18" stroke="white" strokeWidth="2" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Navigation */}
      <div className="h-24 px-2.5 py-7 left-0 top-0 absolute bg-gradient-to-b from-black to-transparent">
        <div className="w-[1220px] flex justify-between items-center">
          <img
            className="w-[148px] h-10"
            src="/netflix-logo.png"
            alt="Netflix Logo"
          />
          <div className="flex items-center gap-3">
            <div className="w-32 h-[31px] px-2.5 py-1.5 rounded border border-gray-500/70 flex items-center gap-1.5">
              <svg
                width="25"
                height="25"
                viewBox="0 0 25 25"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path fill="white" d="M..." />
              </svg>
              <span className="text-white text-base">English</span>
            </div>
            <button className="px-4 py-1.5 bg-[#E50914] rounded">
              <span className="text-white text-base">Sign in</span>
            </button>
          </div>
        </div>
      </div>

      {/* Trending Section */}
      <div className="h-[505px] pt-[62px] pb-[76px] px-[349px] left-0 top-[1033px] absolute flex flex-col gap-[30px]">
        <h2 className="text-white text-[30px] font-bold">Trending Now</h2>
        <div className="w-[1222px] h-[301px] flex gap-4">
          {[1, 2, 3, 4, 5].map((num) => (
            <div key={num} className="w-[214px] h-[301px] relative">
              <img
                className="w-full h-full"
                src={`/movie-${num}.jpg`}
                alt={`Movie ${num}`}
              />
              <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-black/40 to-black/80" />
              <div className="absolute left-[15px] top-[213px] text-[#414141] text-[60px] font-bold">
                {num}
              </div>
              <div className="absolute left-[63px] top-[247px] text-white text-xs">
                <span className="font-bold">Vote</span> :{" "}
                <span className="italic">7,320</span> /
                <span className="font-bold">Rate</span> :{" "}
                <span className="italic">8.4 points</span>
                <br />
                <span className="font-bold">Review</span> :{" "}
                <span className="italic">Good Movie~!!</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom Section */}
      <div className="w-[2092px] h-[1500px] left-[-399px] top-[1575px] absolute">
        <img
          className="w-[2000px] h-[1500px] absolute left-0 top-0"
          src="/bottom-bg.jpg"
          alt="Bottom background"
        />
        <div className="absolute left-[1396px] top-[598px]">
          <span className="text-white text-[48px] font-bold">
            Chill, Cool, Classy
            <br />
          </span>
          <br />
          <span className="text-white text-[40px]">
            Follow this account Right now.
          </span>
        </div>
      </div>
    </div>
  );
};

export default App;
