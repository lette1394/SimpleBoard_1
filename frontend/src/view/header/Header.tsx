import React, { FC } from 'react';
import styled from 'styled-components';
import Theme from 'theme';

const logo = require('static/Instagram_logo.svg');

interface Props extends Theme {

}

const Header: FC<Props> = ({ className }: Props) => {
  return (
    <div className={className}>
      <div id={`logo`}>
        <img src={logo}
             alt="logo" />
      </div>
      <div id={`menu`}>
        <div>
          <span>Log in</span>
          <span>|</span>
          <span>Sign up</span>
        </div>
      </div>
    </div>
  );
};

const styledHeader = styled(Header)`
  display: flex;
  height: 5vh;
  padding: 0.5em 0.8em 0 0.8em;
  border-bottom: 0.5px solid #aaaaaa;
 
  img {
    max-width: 100%;
    max-height: 100%;
  }
  
  #menu {
    flex: 1 0 70%;
    padding: 0.5em 0 0;
    text-align: right;
    font-weight: 600;
    font-size: 0.9em;
    letter-spacing: -0.5px;
    
    span:nth-child(2) {
      padding: 0 10px;
    }
  }
`;

export { styledHeader as Header };