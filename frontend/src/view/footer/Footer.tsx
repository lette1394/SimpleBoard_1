import React, { FC } from 'react';
import styled from 'styled-components';
import Theme from 'theme';

interface Props extends Theme {

}

const Footer: FC<Props> = ({ className }: Props) => {
  return (
    <div className={className}>
      this is footer;
    </div>
  );
};

const styledFooter = styled(Footer)`
 
`;

export { styledFooter as Footer };