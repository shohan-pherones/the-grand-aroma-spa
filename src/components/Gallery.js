import SectionTitle from "./SectionTitle";

const data = [
  {
    id: 1,
    src: "https://images.pexels.com/photos/3997353/pexels-photo-3997353.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    alt: "Woman in Black Long Sleeve Shirt and Blue Denim Jeans Sitting on Chair",
  },
  {
    id: 2,
    src: "https://images.pexels.com/photos/3993304/pexels-photo-3993304.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    alt: "Woman in Black Leather Jacket Cutting Hair of Woman in Blue Denim Jacket",
  },
  {
    id: 3,
    src: "https://images.pexels.com/photos/3764568/pexels-photo-3764568.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    alt: "Selective Focus Photo of Woman Getting a Massage",
  },
  {
    id: 4,
    src: "https://images.pexels.com/photos/5069454/pexels-photo-5069454.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    alt: "Cosmetologist cleaning clients face with sponges",
  },
  {
    id: 5,
    src: "https://images.pexels.com/photos/4004119/pexels-photo-4004119.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    alt: "Girl in White Shirt Lying on Brown Textile",
  },
  {
    id: 6,
    src: "https://images.pexels.com/photos/6648498/pexels-photo-6648498.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    alt: "A Person Putting Lipstick on Woman's Lips",
  },
  {
    id: 7,
    src: "https://images.pexels.com/photos/3985329/pexels-photo-3985329.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    alt: "Woman Getting a Facial Treatment",
  },
];

const Gallery = () => {
  return (
    <div className="py-20 bg-primary-content text-yellow-600">
      <SectionTitle title="Artistry on Display" />
      <p className="container mx-auto mb-10 text-center px-5 sm:px-10 md:px-20 lg:px-32 xl:px-40">
        Our gallery is a showcase of the exceptional work our team of expert
        beauty artists at The Grand Aroma have performed. From hair styling and
        makeup to nails and massages, you can see the quality of our services in
        action. Browse through our gallery to get inspiration for your next
        visit or to see the range of services we offer. All the photos are taken
        from our clients and they have given the permission to use their photo
        in our gallery. You can trust that our team will provide you with the
        same level of excellence and attention to detail.
      </p>

      <div className="gallery-wrapper container mx-auto">
        {data.map((image) => (
          <div className="gallery-item shadow-xl group" key={image.id}>
            <img
              src={image.src}
              alt={image.alt}
              className="grayscale brightness-75 group-hover:grayscale-0 group-hover:brightness-100 duration-500"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Gallery;
