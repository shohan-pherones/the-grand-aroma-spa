import SectionTitle from "./SectionTitle";
import { useFetch } from "../hooks/useFetch";
import Service from "./Service";

const Services = () => {
  const { data: services } = useFetch("services.json");

  return (
    <div className="services container mx-auto py-20" id="services">
      <SectionTitle title="Services" />

      <div className="services-wrapper flex gap-10 flex-wrap justify-center">
        {services?.map((service) => (
          <Service key={service.id} service={service} />
        ))}
      </div>
    </div>
  );
};

export default Services;
