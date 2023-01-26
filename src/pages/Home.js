import About from "../components/About";
import Hero from "../components/Hero";
import Services from "../components/Services";

const Home = () => {
  return (
    <div className="home" id="home">
      <Hero />
      <Services />
      <About />
    </div>
  );
};

export default Home;
