import SectionTitle from "./SectionTitle";
import { useFetch } from "../hooks/useFetch";
import Service from "./Service";

const Services = () => {
  const { data: services, error, isLoading } = useFetch("services.json");

  return (
    <section className="services container mx-auto py-20" id="services">
      <SectionTitle title="Services" />

      <div className="services-wrapper flex gap-10 flex-wrap justify-center">
        {isLoading && <span>Loding...</span>}
        {error && <p>{error}</p>}
        {services &&
          services.map((service) => (
            <Service key={service.id} service={service} />
          ))}
      </div>
    </section>
  );
};

export default Services;
