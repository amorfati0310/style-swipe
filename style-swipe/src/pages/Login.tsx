import React from 'react';
import LoginForm from '../components/LoginForm';
import Title from '../components/Title';
import Wrapper from '../components/Wrapper';
import LinkText from '../components/LinkText';
import SocialLoginBox from '../components/SocilLoginBox'

const signupLink = {
  text: "Signup Now",
  to: '/signup'
}

const Login = () => {
  return (
    <Wrapper>
      <Title title="WELCOME TO STYLE SWIPE"/>
      <LinkText 
        text="not a member yet ?"
        link={signupLink} 
      />
      <LoginForm/>
      <h3>Or Sign in with </h3>
      <SocialLoginBox/>
    </Wrapper>
  );
};

export default Login;