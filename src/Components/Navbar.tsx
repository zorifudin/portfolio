const Navbar = () => {
  return (
    <header className="bg-transparent absolute top-0 left-0 w-full flex items-center z-10 ">
      <div className="container">
        <div className="flex items-center justify-between relative">
          <div className="px-4">
            <a
              href="#home"
              className="font-bold text-lg text-teal-500 block py-6"
            >
              abdurrohmanzorif
            </a>
          </div>
          <div className="hidden sm:flex items-center px-4 text-black">
            <nav className="flex gap-2 font-medium">
              <ul className="max-w-[120px] mx-4 py-4 grayscale opacity-60 transition duration-500 hover:grayscale-0 hover:opacity-100 lg:mx-6 xl:mx-8">
                <li>
                  <a href="#">BERANDA</a>
                </li>
              </ul>
              <ul className="max-w-[120px] mx-4 py-4 grayscale opacity-60 transition duration-500 hover:grayscale-0 hover:opacity-100 lg:mx-6 xl:mx-8">
                <li>
                  <a href="#">TENTANG</a>
                </li>
              </ul>
              <ul className="max-w-[120px] mx-4 py-4 grayscale opacity-60 transition duration-500 hover:grayscale-0 hover:opacity-100 lg:mx-6 xl:mx-8">
                <li>
                  <a href="#">PORTFOLIO</a>
                </li>
              </ul>
              <ul className="max-w-[120px] mx-4 py-4 grayscale opacity-60 transition duration-500 hover:grayscale-0 hover:opacity-100 lg:mx-6 xl:mx-8">
                <li>
                  <a href="#">CLIENTS</a>
                </li>
              </ul>
              <ul className="max-w-[120px] mx-4 py-4 grayscale opacity-60 transition duration-500 hover:grayscale-0 hover:opacity-100 lg:mx-6 xl:mx-8">
                <li>
                  <a href="#">BLOG</a>
                </li>
              </ul>
              <ul className="max-w-[120px] mx-4 py-4 grayscale opacity-60 transition duration-500 hover:grayscale-0 hover:opacity-100 lg:mx-6 xl:mx-8">
                <li>
                  <a href="#">CONTACT</a>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
