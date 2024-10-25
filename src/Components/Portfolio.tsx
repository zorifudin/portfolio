const Portfolio = () => {
  return (
    <section id="portfolio" className="pt-36 pb-16 bg-slate-100">
      <div className="container">
        <div className="w-full px-4">
          <div className="max-w-xl mx-auto text-center mb-16">
            <h4 className="font-semibold text-lg text-teal-500 mb-2">
              Portfolio
            </h4>
            <h2 className="font-bold text-black text-3-xl mb-4 sm:text-4xl lg:text-4xl">
              New Project
            </h2>
            <p className="font-medium text-md text-slate-400 md:text-lg">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum
              modi cum provident ullam quibusdam fugit?
            </p>
          </div>
        </div>

        <div className="w-full px-4 flex flex-wrap justify-center xl:w-10/12 xl:mx-auto">
          <div className="mb-12 p-4 md:w-1/2">
            <div className="rounded-md shadow-md overflow-hidden">
              <img src="src/assets/kpp-1.jpg" alt="kpp-1" width={"w-full"} />
            </div>
            <h3 className="font-semibold text-xl text-black mt-5 mb-3">
              KPP 1
            </h3>
            <p className="font-medium text-base text-slate-400">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex
              repudiandae nostrum laboriosam adipisci nam ad, animi ab
              laudantium dolor quasi!
            </p>
          </div>

          <div className="mb-12 p-4 md:w-1/2">
            <div className="rounded-md shadow-md overflow-hidden">
              <img src="src/assets/kpp-2.jpg" alt="kpp-1" width={"w-full"} />
            </div>
            <h3 className="font-semibold text-xl text-black mt-5 mb-3">
              KPP 2
            </h3>
            <p className="font-medium text-base text-slate-400">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex
              repudiandae nostrum laboriosam adipisci nam ad, animi ab
              laudantium dolor quasi!
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
