import React, { FC } from 'react';
import { withClassName } from 'theme';
import styled from 'styled-components';

type Props = {
  nickname: string;
  isAuthor?: boolean;
}
const UserTitle: FC<Props> = ({ nickname, isAuthor = false }) => {
  const underline = isAuthor ? `underline` : ``;
  return (
    <span className={`user-id ${underline}`}>
      <span>{nickname}</span>
    </span>
  );
};

const StyledComponent = styled(withClassName(UserTitle))`
  display: inline;
  
  .user-id {
    margin: 0 0.5em 0 0;
    font-weight: bold;
  }
  
  .underline {
    text-decoration: underline #000000;
  }
`;
export { StyledComponent as UserTitle };