import React, { FC } from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';
import Theme from 'theme';
import { State } from 'state';


type StateProps = {}
type DispatchProps = {}

type Props = Theme
  & StateProps
  & DispatchProps;

const CommentList: FC<Props> = ({
                                  className,
                                }: Props) => {
  return (
    <div className={className}>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
    </div>
  );
};

const StyledCommentList = styled(CommentList)`

`;

const mapStateToProps = (state: State): StateProps => ({});
const mapDispatchToProps: DispatchProps = {};

const connected = connect(
  mapStateToProps,
  mapDispatchToProps,
)(StyledCommentList);

export { connected as CommentList };