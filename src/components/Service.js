import currencyFormatter from "../utilities/currencyFormatter";

const Service = ({ service }) => {
  return (
    <div className="card w-96 bg-base-100 shadow-md">
      <figure>
        <img src={service.img} alt={service.title} />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{service.title}</h2>
        <p>{service.description}</p>
        <div className="card-actions justify-end items-center">
          <p className="font-medium text-lg">
            Starting from{" "}
            <span className="text-secondary-focus">
              {currencyFormatter(service.price)}
            </span>
          </p>
          <button className="btn btn-primary">Book Now</button>
        </div>
      </div>
    </div>
  );
};

export default Service;
