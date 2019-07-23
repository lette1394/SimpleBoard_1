import React, { FC } from 'react';
import { withClassName } from 'theme';
import styled from 'styled-components';

type Props = {}
const MoreReplies: FC<Props> = ({}) => {
  return (
    <>
      <span>view more replies (29)</span>
    </>
  );
};

const StyledComponent = styled(withClassName(MoreReplies))`
  color: #003569;
`;
export { StyledComponent as MoreReplies };