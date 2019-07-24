import React, { FC, useEffect, useRef } from 'react';
import ReactDOM from 'react-dom';
import { connect } from 'react-redux';
import styled from 'styled-components';
import Theme from 'theme';
import { State } from 'state';
import { setMessage, setVisible } from './state';
import { ModalBody } from 'domain/post/comment/modal/ModalBody';
import { Send } from 'styled-icons/boxicons-regular/Send';

type StateProps = {
  visible: boolean;
  message: string;
}
type DispatchProps = {
  setVisible: typeof setVisible,
  setMessage: typeof setMessage,
}
type Props = Theme
  & StateProps
  & DispatchProps;

// 사실 그냥 usetState를 쓰면 된다. 굳이 redux store를 사용할 필요 없음!
// 얘만 상태를 필요로하기 때문
const CommentInputModal: FC<Props> = ({
                                        className,
                                        visible, setVisible,
                                        message, setMessage,
                                      }: Props) => {
  const containerRef = useRef<HTMLDivElement>(null);

  const outside = (event: Event) => {
    if (containerRef.current && !containerRef.current.contains(event.target as Element)) {
      setVisible(false);
    }
  };

  useEffect(() => {
    document.addEventListener('touchstart', outside);
    return () => {
      document.removeEventListener('touchstart', outside);
    };
  });

  const modal = visible ? (
    <div className={className}
         ref={containerRef}>
      <div>
        <Send size={'0.9em'} />
      </div>
      <ModalBody />
      <div>
        SEND
      </div>
    </div>
  ) : null;

  return ReactDOM.createPortal(
    modal,
    document.getElementById('modal-root') as Element,
  );
};

const StyledCommentInputModal = styled(CommentInputModal)`
    z-index: 1000;  
    position: absolute;
    width: 100vw;
    max-height: 30vh;
    box-sizing: border-box;
    
    font-family: 'Spoqa Han Sans', 'Spoqa Han Sans JP', Sans-serif, sans-serif;
    line-height: 140%;
    font-size: 16px;
    
    bottom: 0;
    display: flex;
`;


const mapStateToProps = (state: State): StateProps => ({
  visible: state.post.comment.modal.visible,
  message: state.post.comment.modal.message,
});
const mapDispatchToProps: DispatchProps = {
  setVisible,
  setMessage,
};
const connected = connect(
  mapStateToProps,
  mapDispatchToProps,
)(StyledCommentInputModal);

export { connected as CommentInputModal };