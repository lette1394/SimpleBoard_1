import React, { FC } from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';
import Theme, { withClassName } from 'theme';
import { State } from 'state';
import { CommentItem } from 'domain/post/comment/list/CommentItem';
import { MoreReplies } from 'domain/post/controls/MoreReplies';


const dummyData: { nickname: string, body: string, author?: boolean }[] = [
  {
    nickname: `system`,
    body: `Hello world`,
  },
  {
    nickname: `lol_my_mario`,
    body: `한 회계연도를 넘어 계속하여 지출할 필요가 있을 때에는 정부는 연한을 정하여 계속비로서 국회의 의결을 얻어야 한다.
          대통령은 국무총리·국무위원·행정각부의 장 기타 법률이 정하는 공사의 직을 겸할 수 없다.`,
  },
  {
    nickname: `mynickname`,
    body: `hello there`,
    author: true,
  },
  {
    nickname: `im_fine`,
    body: `정당 해산의 결정`,
  },
  {
    nickname: `lollipop`,
    body: `국민의 정치적 의사형성에 참여하는데 필요한 조직을 가져야 한다. 정당은 그 목적·조직과 활동이 민주적이어야 하며, 국민의
          정치적 의사형성에 참여하는데 필요한 조직을 가져야 한다.`,
  },
];


type StateProps = {}
type DispatchProps = {}

type Props = Theme
  & StateProps
  & DispatchProps;

const CommentList: FC<Props> = ({ className }) => {
    return (
      <div className={className}>
        {dummyData.map(d =>
          (<CommentItem nickname={d.nickname}
                        isAuthor={d.author}>
            {d.body}
          </CommentItem>),
        )}
        <MoreReplies />
      </div>
    );
  }
;

const StyledCommentList = styled(CommentList)`
  font-size: 0.9em;
  line-height: 130%;
  
  >:nth-child(n) {
    margin: 0.5em 0;
  }
  >:first-child {
    margin: 0 0 0.5em 0;
  }
`;

const mapStateToProps = (state: State): StateProps => ({});
const mapDispatchToProps: DispatchProps = {};

const connected = connect(
  mapStateToProps,
  mapDispatchToProps,
)(StyledCommentList);

export { connected as CommentList };