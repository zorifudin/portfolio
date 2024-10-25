const Blog = () => {
  return (
    <section id="blog" className="pt-36 pb-32 bg-slate-100">
      <div className="container">
        <div className="w-full px-4">
          <div className="max-w-xl mx-auto text-center mb-16">
            <h4 className="font-semibold text-lg text-teal-500 mb-2">Blog</h4>
            <h2 className="font-bold text-black text-3-xl mb-4 sm:text-4xl lg:text-4xl">
              Latest Posts
            </h2>
            <p className="font-medium text-md text-slate-400 md:text-lg">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quis
              nostrum deserunt dolorem perspiciatis? Omnis, distinctio.
            </p>
          </div>
        </div>

        <div className="flex flex-wrap">
          <div className="w-full px-4 lg:w-1/2 xl:w-1/3">
            <div className="bg-white rounded-xl shadow-lg overflow-hidden mb-10">
              <img
                src="src/assets/gravity.jpg"
                alt="Gravity"
                className="w-full"
              />
              <div className="py-8 px-6">
                <h3>
                  <a
                    href="#"
                    className="block mb-3 font-semibold text-xl text-black hover:text-teal-500 truncate"
                  >
                    Art Out of Place
                  </a>
                  Art Out of Place
                </h3>
                <p className="font-medium text-stone-200 mb-6">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor
                  dolorem, corrupti aspernatur pariatur iusto exercitationem.
                </p>
                <a
                  href="#"
                  className="font-medium text-sm text-white bg-teal-500 py-2 px-4 rounded-lg hover:opacity-80"
                >
                  Read More
                </a>
              </div>
            </div>
          </div>
          <div className="w-full px-4 lg:w-1/2 xl:w-1/3">
            <div className="bg-white rounded-xl shadow-lg overflow-hidden mb-10">
              <img
                src="src/assets/ruang-angkasa.jpg"
                alt="Ruang Angkasa"
                className="w-full"
              />
              <div className="py-8 px-6">
                <h3>
                  <a
                    href="#"
                    className="block mb-3 font-semibold text-xl text-black hover:text-teal-500 truncate"
                  >
                    There are Still Many Mysteries in Outer Space
                  </a>
                  There are Still Many Mysteries in Outer Space
                </h3>
                <p className="font-medium text-stone-200 mb-6">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum
                  iure praesentium asperiores a quisquam ratione.
                </p>
                <a
                  href="#"
                  className="font-medium text-sm text-white bg-teal-500 py-2 px-4 rounded-lg hover:opacity-80"
                >
                  Baca Selengkapnya
                </a>
              </div>
            </div>
          </div>
          <div className="w-full px-4 lg:w-1/2 xl:w-1/3">
            <div className="bg-white rounded-xl shadow-lg overflow-hidden mb-10">
              <img
                src="src/assets/music.jpg"
                alt="Programming"
                className="w-full"
              />
              <div className="py-8 px-6">
                <h3>
                  <a
                    href="#"
                    className="block mb-3 font-semibold text-xl text-black hover:text-teal-500 truncate"
                  >
                    Recomendation Music This Year
                  </a>
                  Recomendation Music This Year
                </h3>
                <p className="font-medium text-stone-200 mb-6">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Officia, illum.
                </p>
                <a
                  href="#"
                  className="font-medium text-sm text-white bg-teal-500 py-2 px-4 rounded-lg hover:opacity-80"
                >
                  Baca Selengkapnya
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Blog;
