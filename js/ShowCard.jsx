// @flow

<<<<<<< HEAD
import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

// $FlowFixMe
const Wrapper = styled(Link)`
  width: 32%;
  border: 2px solid #333;
  border-radius: 4px;
  margin-bottom: 25px;
  padding-right: 10px;
  overflow: hidden;
  text-decoration: none;
  color: black;
`;

const Image = styled.img`
=======
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
>>>>>>> v3-11
  width: 46%;
  float: left;
  margin-right: 10px;
`;

<<<<<<< HEAD
class ShowCard extends React.Component {
  shouldComponentUpdate() {
    return false;
  }
  props: {
    poster: string,
    title: string,
    year: string,
    description: string,
    imdbID: string
  };
  render() {
    return (
      <Wrapper className="show-card" to={`/details/${this.props.imdbID}`}>
        <Image alt={`${this.props.title} Show Poster`} src={`/public/img/posters/${this.props.poster}`} />
        <div>
          <h3>{this.props.title}</h3>
          <h4>({this.props.year})</h4>
          <p>{this.props.description}</p>
        </div>
      </Wrapper>
    );
  }
}

=======
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
>>>>>>> v3-11
export default ShowCard;
