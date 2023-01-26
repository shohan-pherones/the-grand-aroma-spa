import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <div
      className="hero min-h-screen"
      style={{
        backgroundImage: `url("https://images.pexels.com/photos/5938595/pexels-photo-5938595.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1")`,
      }}
    >
      <div className="hero-overlay bg-opacity-60"></div>
      <div className="hero-content text-center text-neutral-content">
        <div className="max-w-4xl">
          <h1 className="mb-5 text-6xl lg:text-8xl font-bold font-serif">
            Unleash your inner goddess with The Grand Aroma
          </h1>
          <p className="mb-5">
            Indulge in a world of luxury and pampering at The Grand Aroma. Our
            expert stylists and therapists are dedicated to making you look and
            feel your best, with an array of premium services to choose from.
            From hair styling to massages and facials, we have everything you
            need to relax, rejuvenate, and shine.
          </p>
          <Link to="/appointment" className="btn btn-primary">
            Find Your Perfect Look
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Hero;
