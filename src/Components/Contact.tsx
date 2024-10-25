const Contact = () => {
  return (
    <section id="contact" className="pt-36 pb-32">
      <div className="container">
        <div className="w-full px-4">
          <div className="max-w-xl mx-auto text-center mb-16">
            <h4 className="font-semibold text-lg text-teal-500 mb-2">
              Contact
            </h4>
            <h2 className="font-bold text-black text-3-xl mb-4 sm:text-4xl lg:text-4xl">
              Contact Us
            </h2>
            <p className="font-medium text-md text-slate-400 md:text-lg">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum,
              ratione!
            </p>
          </div>
        </div>

        <form>
          <div className="w-full lg:w-2/3 lg:mx-auto">
            <div className="w-full px-4 mb-8">
              <label
                htmlFor="name"
                className="text-base font-bold text-teal-500"
              >
                Nama
              </label>
              <input
                type="text"
                id="name"
                className="w-full bg-slate-200 text-black p-3 rounded-md focus:outline-none focus:ring-teal-500 focus:ring-1 focus:border-teal-500"
              />
            </div>
            <div className="w-full px-4 mb-8">
              <label
                htmlFor="email"
                className="text-base font-bold text-teal-500"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                className="w-full bg-slate-200 text-black p-3 rounded-md focus:outline-none focus:ring-teal-500 focus:ring-1 focus:border-teal-500"
              />
            </div>
            <div className="w-full px-4 mb-8">
              <label
                htmlFor="message"
                className="text-base font-bold text-teal-500"
              >
                Pesan
              </label>
              <textarea
                id="name"
                className="w-full bg-slate-200 text-black p-3 rounded-md focus:outline-none focus:ring-teal-500 focus:ring-1 focus:border-teal-500 h-32"
              ></textarea>
            </div>
            <div className="w-full px-4">
              <button className="text-base font-semibold text-white bg-teal-500 py-3 px-8 rounded-full w-full hover:opacity-80 hover:shadow-lg transition duration-500">
                Kirim
              </button>
            </div>
          </div>
        </form>
      </div>
    </section>
  );
};

export default Contact;
