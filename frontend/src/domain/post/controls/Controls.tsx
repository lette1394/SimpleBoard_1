import React, { FC } from 'react';
import { withClassName } from 'theme';
import styled from 'styled-components';
import { Heart } from 'domain/icon/Heart';
import { Bookmark } from 'domain/icon/Bookmark';
import { Comment, Export } from 'styled-icons/boxicons-regular';
import { useDispatch } from 'react-redux';
import { setVisible } from 'domain/post/comment/modal/state';

type Props = {}
const Controls: FC<Props> = () => {
  const dispatch = useDispatch();

  return (
    <>
      <div className={`controls`}>
        <section className={`buttons`}>
          <Heart size={`1.8em`} />
          <Bookmark size={`1.8em`} />
          <div onClick={() => {
            dispatch(setVisible(true));
          }}>
            <Comment size={`1.8em`} />
          </div>
          <Export size={`1.8em`} />
        </section>
        <section className={`statistics`}>
          <span>2,115 likes</span>
        </section>
      </div>
    </>
  );
};

const StyledComponent = styled(withClassName(Controls))`
  .controls {
    display: flex;
    flex-direction: column;
    >:first-child {
      margin: 0 0 0.5em 0;
    }
  }
  
  section.buttons {
    display: flex;
    margin: 0 -2px;
    
    >:nth-child(2n) {
      margin: 0 0.5em;
    }
    
    >:last-child {
      margin-left: auto;
      margin-right: 0;
    }
  }
  
  section.statistics, section.tags {
    font-size: 0.9em;
    font-weight: bold;
    
    >:nth-child(n) {
      margin: 0 0.5em 0 0;
    }
  }
`;

export { StyledComponent as Controls };
