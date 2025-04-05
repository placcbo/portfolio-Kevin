import React from 'react';
import { BsTwitter, BsInstagram } from 'react-icons/bs';
import { FaFacebookF } from 'react-icons/fa';

const SocialMedia = () => (
  <div className="app__social">
    <div>
        <a href='www.youtube.com' target='_blank'>
            <BsTwitter/>
        </a>

    </div>
    <div>
    <a href='http://www.youtube.com' target='_blank'>

      <FaFacebookF />
      </a>
    </div>
    <div>
    <a href='https://www.facebook.com' target='_blank'>
      <BsInstagram />
      </a>
    </div>
  </div>
);

export default SocialMedia;
