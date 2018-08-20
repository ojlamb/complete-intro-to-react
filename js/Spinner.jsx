// @flow
<<<<<<< HEAD
import React from 'react';
import styled, { keyframes } from 'styled-components';
=======
import React from "react";
import styled, { keyframes } from "styled-components";
>>>>>>> v3-11

const spin = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;

const Image = styled.img`
  animation: ${spin} 4s infinite linear;
  background-image: url(/public/img/loading.png);
  background-repeact: no-repeat;
  max-width: 250px;
`;

<<<<<<< HEAD
const Spinner = () => <Image src="/public/img/loading.png" alt="loading indicator" />;
=======
const Spinner = () => (
  <Image src="/public/img/loading.png" alt="loading indicator" />
);
>>>>>>> v3-11

export default Spinner;
