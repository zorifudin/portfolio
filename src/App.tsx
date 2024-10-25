import About from "./Components/About";
import Blog from "./Components/Blog";
import Client from "./Components/Client";
import Contact from "./Components/Contact";
import Footer from "./Components/Footer";
import Hamburger from "./Components/Hamburger";
import Navbar from "./Components/Navbar";
import Portfolio from "./Components/Portfolio";
import Profile from "./Components/Profile";

function App() {
  return (
    <>
      <Navbar />
      <Profile />
      <About />
      <Portfolio />
      <Client />
      <Blog />
      <Contact />
      <Footer />
      <Hamburger />
    </>
  );
}
export default App;
