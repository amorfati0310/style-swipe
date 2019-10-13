import React from 'react';
import styled from 'styled-components';
import Button from './Button';

const SInput = styled.input`
  box-sizing: border-box;
  display: block;
  width: 100%;
  height: 60px;
  padding: 0 15px;
  background-color: #fff;
  border: 1px solid #DBE0DF;
  transition: all 0.3s ease-in-out;
  margin-bottom: 20px;
`

const SformWrapper = styled.form`
  box-sizing: border-box;
  margin-top: 20px;
`

const LoginForm = () => {
  return (
    <SformWrapper>
      <SInput type="email" placeholder="Email"/>
      <SInput type="password" placeholder="Password"/>
      <Button title="LOGIN NOW"/>
    </SformWrapper>
  );
};

export default LoginForm;