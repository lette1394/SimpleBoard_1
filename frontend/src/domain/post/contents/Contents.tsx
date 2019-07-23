import React, { FC } from 'react';
import { withClassName } from 'theme';
import styled from 'styled-components';
import { UserTitle } from 'domain/post/user/UserTitle';

type Props = {}
const Contents: FC<Props> = ({ children }) => {
  return (
    <>
      <UserTitle nickname={`hello world`}
                 isAuthor={true} />
      <section className={`contents`}>
        {children}
      </section>
    </>
  );
};

const StyledComponent = styled(withClassName(Contents))`
  .contents {
    margin: 0.5em 0 0 0;
  }
`;
export { StyledComponent as Contents };