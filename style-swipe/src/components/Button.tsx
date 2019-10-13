import React from 'react';
import styled from 'styled-components';

const SButton = styled.button`
width: 100%;
position: relative;
display: inline-block;
height: 60px;
padding: 0 35px;
background-color: #f06595;
color: #fff;
line-height: 63px;
text-align: center;
font-size: 13px;
font-weight: 500;
cursor: pointer;
border: none;
overflow: hidden;
transition: all 0.3s ease-in-out;
`;

interface IButtonProps {
  title: string;
}


const Button = ({title}: IButtonProps) => {
  return (
   <SButton>{title}</SButton>
  );
};

export default Button;