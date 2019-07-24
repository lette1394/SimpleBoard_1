import React, { ChangeEvent, createRef } from 'react';
import Theme from 'theme';
import styled from 'styled-components';

type P = Theme & {
  value?: string,
}
type S = {
  rows: number,
  minRows: number,
  maxRows: number,
}


class ResizableTextarea extends React.PureComponent<P, S> {
  private textAreaRef = createRef<HTMLTextAreaElement>();

  constructor(props: P) {
    super(props);

    this.state = {
      rows: 1,
      minRows: 1,
      maxRows: 5,
    };
  }

  handleChange = (event: ChangeEvent<HTMLTextAreaElement>) => {
    if (!(this.textAreaRef && this.textAreaRef.current)) {
      return;
    }

    const computedHeightPx = window.getComputedStyle(this.textAreaRef.current).lineHeight || '20px';
    const textareaLineHeight = Number(computedHeightPx.split('px')[0]);
    const { minRows, maxRows } = this.state;

    const previousRows = event.target.rows;
    event.target.rows = minRows; // reset number of rows in textarea

    const currentRows = ~~(event.target.scrollHeight / textareaLineHeight);
    if (currentRows === previousRows) {
      event.target.rows = currentRows;
    }
    if (currentRows >= maxRows) {
      event.target.rows = maxRows;
      event.target.scrollTop = event.target.scrollHeight;
    }

    this.setState({
      rows: currentRows < maxRows ? currentRows : maxRows,
    });
  };

  render() {
    const { className, value } = this.props;
    return (
      <textarea
        className={className}
        rows={this.state.rows}
        defaultValue={value}
        placeholder={'Enter your comments here...'}
        onChange={this.handleChange}
        autoFocus={true}
        ref={this.textAreaRef}
        unselectable={"on"}
      />
    );
  }
}

const StyledComponent = styled(ResizableTextarea)`
  font-family: inherit;
  line-height: 1rem;
  width: 100%;
  height: 100%;
  border: 0;
  padding: 0;
  margin: 0;
  resize: none;
`;

export { StyledComponent as ResizableTextarea };