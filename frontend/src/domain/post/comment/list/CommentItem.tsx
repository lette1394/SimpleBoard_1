import React, { FC } from 'react';
import styled from 'styled-components';
import Theme from 'theme';

type Props = Theme;

const CommentItem: FC<Props> = ({
                                  className,
                                }: Props) => {
  return (
    <div className={className}>
      hi
    </div>
  );
};

const StyledComponent = styled(CommentItem)`

`;

export { StyledComponent as CommentItem };