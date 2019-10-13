import React from 'react';
import styled from 'styled-components';

const SocailLinkList = styled.ul`
  display: flex;
`

const SocilLoginBox = () => {
  return (
      <SocailLinkList>
        <li>
          <a href="">GooGle</a>
        </li>
        <li>
          <a href="">FaceBook</a>
        </li>
      </SocailLinkList>
  );
};

export default SocilLoginBox;