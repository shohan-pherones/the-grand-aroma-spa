import SectionTitle from "./SectionTitle";
import TestimonialSlider from "./TestimonialSlider";
import { useFetch } from "../hooks/useFetch";

const Testimonials = () => {
  const { data: reviews, error, isLoading } = useFetch("reviews.json");

  return (
    <section className="testimonials container mx-auto py-20" id="testimonials">
      <SectionTitle title="Testimonials" />
      <p className="mb-10 text-center px-5 sm:px-10 md:px-20 lg:px-32 xl:px-40">
        At The Grand Aroma, we pride ourselves on providing the highest level of
        service to all of our customers. That's why we're thrilled to share a
        selection of testimonials from some of the satisfied clients who have
        experienced our services. From haircuts and color to spa treatments and
        makeup, our expert beauty artists have left a lasting impression on each
        and every one of these customers. We hope that by reading their
        experiences, you'll be inspired to book your own appointment and see for
        yourself why The Grand Aroma is the premier destination for all your
        beauty needs.
      </p>

      {isLoading && <span className="flex justify-center">Loading...</span>}
      {error && <p className="text-center">{error}</p>}
      {reviews && <TestimonialSlider reviews={reviews} />}
    </section>
  );
};

export default Testimonials;
