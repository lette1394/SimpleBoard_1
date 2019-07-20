import React, { FC, useState } from 'react';
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


const CommentInputModal: FC<Props> = ({
                                        className,
                                        visible, setVisible,
                                        message, setMessage,
                                      }: Props) => {
  let inputRef: any;
  const body = (
    <div className={className}>
      <span onClick={() => setVisible(false)}>click to hide</span>
      <input ref={r => inputRef = r} />
    </div>
  );
  return visible ? body : <span onClick={() => setVisible(true)}>{message}</span>;
};

const StyledCommentInputModal = styled(CommentInputModal)`
    z-index: 1000; 
    border: 1px solid black;
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