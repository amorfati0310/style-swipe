import React from 'react';
import styled from 'styled-components';

const SInput = styled.input`
  box-sizing: border-box;
  display: block;
  width: 100%;
  height: 60px;
  padding: 0 15px;
  background-color: #fff;
  border: 1px solid #DBE0DF;
  transition: all 0.3s ease-in-out;
`
const SformWrapper = styled.form`
  box-sizing: border-box;
`

const SginupForm = () => {
  return (
    <SformWrapper>
      <SInput type="text" placeholder="UserName"/>
      <SInput type="email" placeholder="E-mail"/>
      <SInput type="password" placeholder="Passsword"/>
      <SInput type="password" placeholder="RepeatPassWord"/>
    </SformWrapper>
  );
};

export default SginupForm;