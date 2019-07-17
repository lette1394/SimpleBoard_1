import React, { FC } from 'react';
import styled from 'styled-components';
import PostContainer from 'domain/post/PostContainer';
import Theme from 'theme';

interface Prop extends Theme {
  abc: string;
}

const HeaderContainer: FC<Prop> = (props, context) => {
  console.log(props);
  console.log(context);

  return (
    <div className={props.className}>
      hello world
      <PostContainer />
    </div>
  );
};

const StyledHeaderContainer = styled(HeaderContainer)`
  color: black;
  margin: 40px;
  background-color: gray;
`;

export { StyledHeaderContainer as HeaderContainer };