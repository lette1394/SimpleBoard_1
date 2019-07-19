import React, { FC, useState } from 'react';
import { Bookmark as BookmarkIcon } from 'styled-icons/material/Bookmark';
import { BookmarkBorder as UnBookmarkIcon } from 'styled-icons/material/BookmarkBorder';
import styled from 'styled-components';
import Theme from 'theme';

type BookmarkIcon = React.ComponentProps<typeof BookmarkIcon>

interface Props extends Theme, BookmarkIcon {
}

const Bookmark: FC<Props> = ({ className, ...props }: Props) => {
  const [bookmarked, setBookmarked] = useState(true);

  return (
    <div className={className}
         onClick={() => setBookmarked(!bookmarked)}>
      {bookmarked ? <BookmarkIcon {...props} /> : <UnBookmarkIcon {...props} />}
    </div>
  );
};

const StyledBookmark = styled(Bookmark)`
  display: inline-block;
  max-width: 100%;
  max-height: 100%;
`;
export { StyledBookmark as Bookmark };