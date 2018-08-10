import React from "react";
import { shape, string } from "prop-types";

const Details = props => {
  const { title, description, year, poster, trailer } = props.show;
  return (
    <div className="details">
      <header>
        <h1>svideo</h1>
      </header>
      <section>
        <h1>{title}</h1>
        <h2>({year})</h2>
        <img
          src={`/public/img/posters/${poster}`}
          alt={`Poster for ${title}`}
        />
        <p>{description}</p>
      </section>
      <div>
        <iframe
          src={`https://www.youtube-nocookie.com/embed/${trailer}?rel=0&amp;controls=0&amp;showinfo=0`}
          frameBorder="0"
          allowFullScreen
          title={`Trailer for ${title}`}
        />
      </div>
    </div>
  );
};

Details.propTypes = {
  show: shape({
    poster: string.isRequired,
    title: string.isRequired,
    year: string.isRequired,
    description: string.isRequired,
    trailer: string.isRequired
  }).isRequired
};

export default Details;
