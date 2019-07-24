import React, { FC, ReactNode } from 'react';
import styled from 'styled-components';
import Theme, { withClassName } from 'theme';
import { UserTitle } from 'domain/post/user/UserTitle';

type Props = Theme & ReactNode & {
  nickname: string;
  replyCount?: number;
  isAuthor?: boolean;
};

const CommentItem: FC<Props> = ({
                                  className,
                                  nickname,
                                  replyCount,
                                  isAuthor,
                                  children,
                                }) => {
  return (
    <div className={`${className}`}>
      <UserTitle nickname={nickname}
                 isAuthor={isAuthor} />
      <span>
        {children}
      </span>
      <span>
        <span className={`reply-count`}>{replyCount ? 5 : null}</span>
      </span>
    </div>
  );
};

const StyledComponent = styled(CommentItem)`
  .reply-count {
    font-size: 0.9em;
    font-weight: bold;
    margin: 0 0 0 0.5em;
    color: #003569;
  }
`;

export { StyledComponent as CommentItem };