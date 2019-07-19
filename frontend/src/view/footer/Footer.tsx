import React, { FC } from 'react';
import styled from 'styled-components';
import Theme from 'theme';

interface Props extends Theme {

}

const Footer: FC<Props> = ({ className }: Props) => {
  return (
    <div className={className}>
      © 2019 INSTAGRAM
    </div>
  );
};

const styledFooter = styled(Footer)`
  padding: 2em 0; 
  
  color: #999999;
  font-weight: bold;
  font-size: 0.8rem;
  letter-spacing: -0.5px;
`;

export { styledFooter as Footer };