import About from "../components/About";
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
    </div>
  );
};

export default Home;
