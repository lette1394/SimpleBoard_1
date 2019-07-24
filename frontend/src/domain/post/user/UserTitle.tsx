import React, { FC } from 'react';
import Theme from 'theme';
import styled from 'styled-components';

type Props = Theme & {
  nickname: string;
  isAuthor?: boolean;
}
const UserTitle: FC<Props> = ({ className, nickname, isAuthor = false }) => {
  const underline = isAuthor ? `underline` : ``;
  return (
    <span className={`user-id ${className}`}>
      <span className={`${underline}`}>{nickname}</span>
    </span>
  );
};

const StyledComponent = styled(UserTitle)`
  display: inline;
  margin: 0 0.5em 0 0;
  font-weight: bold;

  .underline {
    text-decoration: underline #000000;
  }
`;
export { StyledComponent as UserTitle };