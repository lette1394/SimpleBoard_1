import React, { useState } from 'react';
import styled from 'styled-components';



const PostView: React.FC = ({ className }: any): any => {
  const [clicked, setClicked] = useState(false);

  return (
    <div className={className}>
    </div>
  );
};


const StyledPostView = styled(PostView)`

`;
export { StyledPostView as PostView };
