import React, { FC, useEffect, useRef } from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';
import Theme from 'theme';
import { State } from 'state';
import { setMessage, setVisible } from './state';


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
  const inputRef = useRef<HTMLInputElement>(null);

  const outside = (event: MouseEvent) => {
    console.log("aaaaaaa");
    if (containerRef.current && !containerRef.current.contains(event.target as Element)) {
      setVisible(false);
      console.log("bbbbb");
    }
  };
  useEffect(() => {
    if (inputRef && inputRef.current) {
      inputRef.current.focus();
      document.addEventListener('click', outside);
    }

    return () => {
      document.removeEventListener('click', outside);
    };
  });

  const body = (
    <div className={className}>
      <span onClick={() => setVisible(false)}>click to hide</span>
      <input ref={inputRef} />
    </div>
  );
  return (
    <div ref={containerRef}>
      {visible ? body : <span onClick={() => setVisible(true)}>{message}</span>}
    </div>
  );
};

const StyledCommentInputModal = styled(CommentInputModal)`
    z-index: 1000;  
    border: 1px solid black;
    position: absolute;
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