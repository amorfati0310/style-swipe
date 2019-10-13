import React, { ReactChildren, ReactNode } from 'react';
import styled from 'styled-components';


const SWrapper = styled.div`
display: flex;
flex-direction: column;
position: relative;
height: 100vh;
padding: 35px;
z-index: 1;
overflow-x: hidden;
overflow-y: auto;
`;


interface IWrapperProps {
  children?: ReactNode
}

const Wrapper = ({children}: IWrapperProps) => {
  return (
    <SWrapper>
      {children}
    </SWrapper>
  );
};

export default Wrapper;