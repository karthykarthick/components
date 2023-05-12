function profileCard({ title, handle, img,description }) {
  return (
    <div className="card">
      <div className="card-image">
        <figure children="image is-1by1">
          <img src={img} alt="Logo" />
        </figure>
      </div>
      <div className="card-content">
        <div className="media-content">
          <p className="title is-4">{title}</p>
          <p className="subtitle is-6">{handle}</p>
        </div>
        <div className="content">
           {description}
        </div>
      </div>
    </div>
  );
}

export default profileCard;
