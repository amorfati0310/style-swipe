import React from 'react';
import styled from 'styled-components';

interface ITitleProps  {
  title: string;
}

const STitle = styled.h1`
  font-size: 1rem;
  text-align: center;
`;


const Title = ({title}: ITitleProps) => {
  return (
    <STitle>
      {title}
    </STitle>
  );
};

export default Title;