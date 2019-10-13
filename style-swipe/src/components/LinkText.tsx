import React from 'react';
import { Link } from 'react-router-dom';

interface ILink {
  to: string;
  text: string;
}

interface ILinkTextProps {
  text: string;
  link?: ILink
}

const LinkText = ({text, link}: ILinkTextProps) => {
  return (
    <div>
      {text}      
      {link && <Link to={link.to}>{link.text}</Link>}
    </div>
  );
};

export default LinkText;