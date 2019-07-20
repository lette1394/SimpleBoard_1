import React, { useState } from 'react';
import styled from 'styled-components';
import { Comment } from 'styled-icons/boxicons-regular/Comment';
import { Export } from 'styled-icons/boxicons-regular/Export';
import { Heart } from 'domain/icon/Heart';
import { Bookmark } from 'domain/icon/Bookmark';
import { CommentInputModal } from 'domain/post/comment/modal/CommentInputModal';

// TODO: 폰트 flickering 해결
// TODO: Icon 폴더 따로 빼기
const PostView: React.FC = ({ className }: any): any => {
  const [status, setStatus] = useState(false);
  return (
    <div className={className}>
      {/*<section className={`header`}>*/}
      {/*  */}
      {/*</section>*/}
      <CommentInputModal />
      <section className={`contents`}>
        <div className={`user-id underline`}>
          <span>mynickname</span>
        </div>
        국회는 의장 1인과 부의장 2인을 선출한다. 헌법재판소는 법관의 자격을 가진 9인의 재판관으로 구성하며, 재판관은 대통령이 임명한다. 국회는 헌법개정안이 공고된 날로부터 60일 이내에 의결하여야 하며,
        국회의 의결은 재적의원 3분의 2 이상의 찬성을 얻어야 한다.
        <br />헌법재판소에서 법률의 위헌결정, 탄핵의 결정, 정당해산의 결정 또는 헌법소원에 관한 인용결정을 할 때에는 재판관 6인 이상의 찬성이 있어야 한다. 정당은 그 목적·조직과 활동이 민주적이어야
        하며, 국민의 정치적 의사형성에 참여하는데 필요한 조직을 가져야 한다.
      </section>
      <div className={`controls`}>
        <section className={`buttons`}>
          <Heart size={`1.8em`} />
          <Bookmark size={`1.8em`} />
          <div onClick={() => {
            setStatus(!status);
          }}>
            <Comment size={`1.8em`} />
          </div>
          <Export size={`1.8em`} />
        </section>
        <section className={`statistics`}>
          <span>2,115 likes</span>
        </section>
        {/*<section className={`tags`}>*/}
        {/*  <span>#국회</span>*/}
        {/*  <span>#헌법재판소</span>*/}
        {/*  <span>#헌법개정안60일</span>*/}
        {/*</section>*/}
      </div>
      <div className={`hr`} />
      <section className={`comments-thread`}>
        <div className="comments-el">
          <span className={`user-id`}>system</span>
          위헌결정
          <span className={`reply-count`}>5</span>
        </div>
        <div className="comments-el">
          <span className={`user-id`}>lol_my_mario</span>
          한 회계연도를 넘어 계속하여 지출할 필요가 있을 때에는 정부는 연한을 정하여 계속비로서 국회의 의결을 얻어야 한다. 대통령은 국무총리·국무위원·행정각부의 장 기타 법률이 정하는 공사의 직을 겸할 수
          없다.
          <span className={`reply-count`}>1</span>
        </div>
        <div className="comments-el">
          <span className={`user-id underline`}>mynickname</span>
          hello there
        </div>
        <div className="comments-el">
          <span className={`user-id`}>im_fine</span>
          정당 해산의 결정
        </div>
        <div className="comments-el">
          <span className={`user-id`}>lollipop</span>
          국민의 정치적 의사형성에 참여하는데 필요한 조직을 가져야 한다. 정당은 그 목적·조직과 활동이 민주적이어야 하며, 국민의
          정치적 의사형성에 참여하는데 필요한 조직을 가져야 한다.
        </div>

        <div>
          <span className={`more`}>view more replies (29)</span>
        </div>
      </section>
    </div>
  );
};

const MARGIN_SIZE = '1em';
const StyledPostView = styled(PostView)`
  .hr {
    border: 0.5px solid #aaaaaa;
    width: 60%;
    padding: auto;
  }
  display: flex;
  flex-direction: column;
  
  >:nth-child(n) {
    margin: 0.5em 1em; 
  }
  
  .user-id {
    margin: 0 0.5em 0.5em 0;
    font-weight: bold;
    
    &.underline {
      text-decoration: underline #000000;
    }
  }

  section.contents {
    
  }
  
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
  
   section.tags {
     color: #003569; 
   }
  
  section.comments-thread {
    font-size: 0.9em;
    line-height: 120%;
    
    >:nth-child(n) {
      margin: 0.5em 0;
    }
    
    .comments-el {
      .reply-count {
        font-size: 0.9em;
        font-weight: bold;
        margin: 0 0 0 0.5em;
        color: #003569;
      }
    }
    
    .more {
      color: #003569;
    }
  }
  
`;
export { StyledPostView as PostView };
