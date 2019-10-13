import React from 'react';
import { Link } from 'react-router-dom';
const Footer = () => {
  return (
    <div>
      © 2019 Style-Swipe. All rights reserved.
By signing up, I agree to Style-Swipe
    <Link to="/terms">Terms of Service</Link>
    </div>
  );
};

export default Footer;