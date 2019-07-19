import React, { FC, useState } from 'react';
import { Heart as UnHeartIcon } from 'styled-icons/boxicons-regular/Heart';
import { Heart as HeartIcon } from 'styled-icons/boxicons-solid/Heart';
import styled from 'styled-components';
import Theme from 'theme';

type HeartIcon = React.ComponentProps<typeof HeartIcon>

interface Props extends Theme, HeartIcon {
}

const Heart: FC<Props> = ({ className, ...props }: Props) => {
  const [liked, setLiked] = useState(false);

  return (
    <div className={className}
         onClick={() => setLiked(!liked)}>
      {liked ? <HeartIcon {...props} /> : <UnHeartIcon {...props} />}
    </div>
  );
};

const StyledHeart = styled(Heart)`
  display: inline-block;
  max-width: 100%;
  max-height: 100%;
`;
export { StyledHeart as Heart };