import About from "../components/About";
import Gallery from "../components/Gallery";
import Hero from "../components/Hero";
import Services from "../components/Services";

const Home = () => {
  return (
    <div className="home" id="home">
      <Hero />
      <Services />
      <About />
      <Gallery />
    </div>
  );
};

export default Home;
