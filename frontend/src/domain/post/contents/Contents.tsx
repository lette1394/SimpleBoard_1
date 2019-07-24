import React, { FC } from 'react';
import Theme from 'theme';
import styled from 'styled-components';
import { UserTitle } from 'domain/post/user/UserTitle';

type Props = Theme & {}
const Contents: FC<Props> = ({ className, children }) => {
  return (
    <div className={className}>
      <UserTitle nickname={`hello world`}
                 isAuthor={true} />
      <section className={`contents`}>
        {children}
      </section>
    </div>
  );
};

const StyledComponent = styled(Contents)`
  .contents {
    margin: 0.5em 0 0 0;
  }
`;
export { StyledComponent as Contents };