const Client = () => {
  return (
    <section id="clients" className="pt-36 pb-32 bg-slate-800">
      <div className="container">
        <div className="w-full px-4">
          <div className="mx-auto text-center mb-16">
            <h4 className="font-semibold text-lg text-teal-500 mb-2">
              Clients
            </h4>
            <h2 className="font-bold text-white text-3-xl mb-4 sm:text-4xl lg:text-4xl">
              Who have Worked Together
            </h2>
            <p className="font-medium text-md text-slate-200 md:text-lg">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi
              quia blanditiis sunt!
            </p>
          </div>
        </div>
        <div className="px-4 w-full">
          <div className="flex flex-wrap items-center justify-center">
            <a
              href="#"
              className="max-w-[120px] mx-4 py-4 grayscale opacity-60 transition duration-500 hover:grayscale-0 hover:opacity-100 lg:mx-6 xl:mx-8"
            >
              <img src="src/assets/google.png" alt="google" />
            </a>
            <a
              href="#"
              className="max-w-[120px] mx-4 py-4 grayscale opacity-60 transition duration-500 hover:grayscale-0 hover:opacity-100 lg:mx-6 xl:mx-8"
            >
              <img src="src/assets/gojek.png" alt="google" />
            </a>
            <a
              href="#"
              className="max-w-[120px] mx-4 py-4 grayscale opacity-60 transition duration-500 hover:grayscale-0 hover:opacity-100 lg:mx-6 xl:mx-8"
            >
              <img src="src/assets/grab.png" alt="google" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Client;
