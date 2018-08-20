// @flow

import React from "react";
import { string } from "prop-types";
import styled from "styled-components";
import { Link } from "react-router-dom";

const Wrapper = styled.div`
  width: 32%;
  border: 2px solid #333;
  border-radius: 4px;
  margin-bottom: 15%;
  padding-right: 10px;
  overflow: hidden;
`;

const ImageStyle = styled.img`
  width: 46%;
  float: left;
  margin-right: 10px;
`;

const ShowCard = props => (
  <Wrapper>
    <ImageStyle
      alt={`${props.title} Show Poster`}
      src={`/public/img/posters/${props.poster}`}
    />
    <div>
      <h3>
        <Link to={`/details/${props.imdbID}`}> {props.title}</Link>
      </h3>
      <h4>({props.year})</h4>
      <p>{props.description}</p>
    </div>
  </Wrapper>
);
ShowCard.propTypes = {
  poster: string.isRequired,
  title: string.isRequired,
  year: string.isRequired,
  description: string.isRequired,
  imdbID: string.isRequired
};
export default ShowCard;
