const Profile = () => {
  return (
    // HERO SECTION START
    <section id="home" className="pt-36">
      <div className="container">
        <div className="flex flex-wrap">
          <div className="w-full self-center px-4 lg:w-1/2">
            <h1 className="text-base font-semibold text-teal-500 md:text-xl">
              Halo Everyone, I'm
              <span className="block font-bold text-slate-900 text-4xl lg:text-5xl">
                Abdurrohman Zorif Imaduddin
              </span>
            </h1>
            {/* <h2 className="font-medium text-slate-500 text-lg mb-5">
              Web Developer
            </h2> */}
            <p className="font-medium text-slate-400 mb-10 leading-relaxed">
              I'm a Junior{" "}
              <span className="text-black font-bold">Web Developer.</span>
            </p>
            <a
              href="#"
              className="text-base font-semibold text-white bg-teal-500 py-3 px-8 rounded-full hover:shadow-lg hover:opacity-90 transition duration-300 ease-in-out"
            >
              Contact Me
            </a>
          </div>

          <div className="w-full self-end px-4 lg:w-1/2">
            <div className="relative mt-10 lg:mt-0 lg:right-0">
              <img
                src="src/assets/foto-zorif.png"
                alt="foto zorif"
                className="max-w-full mx-auto"
              />
              <span className="absolute bottom-0 -z-10 left-1/2 -translate-x-1/2 md:scale-100">
                <svg
                  width="400"
                  height={"400"}
                  viewBox="0 0 200 200"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill="#14b8a6"
                    d="M61.3,-61.1C75.5,-47,80.5,-23.5,78.4,-2.1C76.3,19.3,67.1,38.6,52.9,55.2C38.6,71.8,19.3,85.7,0.4,85.3C-18.6,84.9,-37.2,70.4,-52.6,53.8C-68,37.2,-80.1,18.6,-82.4,-2.3C-84.7,-23.2,-77.1,-46.3,-61.7,-60.4C-46.3,-74.6,-23.2,-79.6,0.2,-79.8C23.5,-80,47,-75.3,61.3,-61.1Z"
                    transform="translate(100 100) scale(1.1)"
                  />
                </svg>
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
    // HERO SECTION END
  );
};

export default Profile;
