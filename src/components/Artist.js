const Artist = ({ artist }) => {
  return (
    <div className="card w-96 bg-base-100 shadow-md">
      <figure className="px-10 pt-10">
        <img src={artist.img} alt={artist.name} className="rounded-xl" />
      </figure>
      <div className="card-body items-center text-center">
        <h2 className="card-title text-2xl">{artist.name}</h2>
        <span className="text-secondary-focus">{artist.designation}</span>
        <p>{artist.speciality}</p>
      </div>
    </div>
  );
};

export default Artist;
