import SectionTitle from "./SectionTitle";
import { useFetch } from "../hooks/useFetch";
import Artist from "./Artist";

const About = () => {
  const { data: artists, error, isLoading } = useFetch("artists.json");

  return (
    <section className="about container mx-auto py-20" id="about">
      <SectionTitle title="About Us" />
      <p className="mb-10">
        Welcome to The Grand Aroma, a premier beauty salon and spa where luxury
        and pampering meet. Our team of expert stylists and therapists are
        dedicated to making you look and feel your best, with an array of
        premium services to choose from. From hair styling and massages to
        facials and nail services, we have something for everyone. Our team of
        highly skilled and experienced beauty artists are dedicated to providing
        you with the best service and bringing out your natural beauty. Meet our
        team of beauty experts and find the right stylist or therapist for you.
      </p>

      <div className="artists-wrapper flex gap-10 justify-center flex-wrap">
        {isLoading && <span>Loading...</span>}
        {error && <p>{error}</p>}
        {artists &&
          artists.map((artist) => <Artist key={artist.id} artist={artist} />)}
      </div>
    </section>
  );
};

export default About;
