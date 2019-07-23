import React from 'react';
import styled from 'styled-components';
import { Contents } from 'domain/post/contents/Contents';
import { Controls } from 'domain/post/controls/Controls';
import { CommentList } from 'domain/post/comment/list/CommentList';
import { withClassName } from 'theme';

// TODO: 폰트 flickering 해결
const Post: React.FC = () => {
  return (
    <>
      <Contents>
        국회는 의장 1인과 부의장 2인을 선출한다. 헌법재판소는 법관의 자격을 가진 9인의 재판관으로 구성하며, 재판관은 대통령이 임명한다. 국회는 헌법개정안이 공고된 날로부터 60일 이내에 의결하여야 하며,
        국회의 의결은 재적의원 3분의 2 이상의 찬성을 얻어야 한다.
        <br />헌법재판소에서 법률의 위헌결정, 탄핵의 결정, 정당해산의 결정 또는 헌법소원에 관한 인용결정을 할 때에는 재판관 6인 이상의 찬성이 있어야 한다. 정당은 그 목적·조직과 활동이 민주적이어야
        하며, 국민의 정치적 의사형성에 참여하는데 필요한 조직을 가져야 한다.
      </Contents>
      <Controls />
      <div className={`hr`} />
      <CommentList />
    </>
  );
};

const StyledPost = styled(withClassName(Post))`
  display: flex;
  flex-direction: column;
  
  >:nth-child(n) {
    margin: 0.5em 1em; 
  }
  
  .hr {
    border: 0.5px solid #aaaaaa;
    width: 60%;
    padding: auto;
  }
`;
export { StyledPost as Post };
