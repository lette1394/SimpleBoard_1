import React, { FC, ReactNode } from 'react';
import styled from 'styled-components';
import { withClassName } from 'theme';
import { UserTitle } from 'domain/post/user/UserTitle';

type Props = ReactNode & {
  nickname: string;
  replyCount?: number;
  isAuthor?: boolean;
};

const CommentItem: FC<Props> = ({
                                  nickname,
                                  replyCount,
                                  isAuthor,
                                  children,
                                }) => {
  return (
    <>
      <UserTitle nickname={nickname}
                 isAuthor={isAuthor} />
      <div className={`body`}>
        {children}
      </div>
      {replyCount ? <span className={`reply-count`}>5</span> : null}
    </>
  );
};

const StyledComponent = styled(withClassName(CommentItem))`
  div.body {
    display: inline;
  }
  
  .reply-count {
    font-size: 0.9em;
    font-weight: bold;
    margin: 0 0 0 0.5em;
    color: #003569;
  }
`;

export { StyledComponent as CommentItem };