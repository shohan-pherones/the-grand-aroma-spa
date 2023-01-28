import About from "../components/About";
import Contact from "../components/Contact";
import Gallery from "../components/Gallery";
import Hero from "../components/Hero";
import Services from "../components/Services";
import Testimonials from "../components/Testimonials";

const Home = () => {
  return (
    <div className="home" id="home">
      <Hero />
      <Services />
      <About />
      <Gallery />
      <Testimonials />
      <Contact />
    </div>
  );
};

export default Home;
