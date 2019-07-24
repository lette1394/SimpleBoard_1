import React, { ChangeEvent, FC, useEffect, useRef, useState } from 'react';
import Theme from 'theme';
import styled from 'styled-components';
import { ResizableTextarea } from 'domain/post/comment/modal/ResizableTextArea';

const dummy = 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.\n' +
  'Cumque deleniti dolorum error est numquam quae quos voluptate? Amet atque dicta dolorum eum excepturi,\n' +
  'illum libero molestiae neque reprehenderit ullam? Voluptatum?\n' +
  'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eveniet incidunt, ipsam libero reprehenderit sapiente sed vel? Autem, consequuntur ducimus\n' +
  'illum laborum minus nam necessitatibus quae rem repellat tempore? Maiores, sit!';

type Props = Theme & {}
const ModalBody: FC<Props> = ({ className, children }) => {
  const inputRef = useRef<HTMLTextAreaElement>(null);

  useEffect(() => {
    if (inputRef && inputRef.current) {
      inputRef.current.focus();
    }
  });

  return (
    <div className={className}>
      <ResizableTextarea value={dummy} />
    </div>
  );
};

const StyledComponent = styled(ModalBody)`
  width: 100%;
`;
export { StyledComponent as ModalBody };