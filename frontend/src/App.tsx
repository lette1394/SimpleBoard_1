import React from 'react';
import { NoticeBar, SearchBar } from 'antd-mobile';
import styled from 'styled-components';
import './App.css';
import { PostView } from 'domain/post/PostView';
import { HeaderContainer } from 'view/header/HeaderContainer';

const ThemedPost: React.FC = styled(PostView)`
  margin: 100px;
  background-color: black;
`;

const Test = styled.div`
  background-color: red;
`;

const App: React.FC = () => {
  return (
    <>
      <NoticeBar marqueeProps={{ loop: true, style: { padding: '0 7.5px' } } as any}>
        Notice: The arrival time of incomes and transfers of Yu &#39;E Bao will be delayed during National Day.
      </NoticeBar>

      <HeaderContainer abc={'hello world'} />
      <HeaderContainer abc={'hello world'} />

      <ThemedPost />
      <Test>hello world</Test>
      <SearchBar placeholder="Search"
                 cancelText={'cancel'} />

      <PostView />
      <PostView />
      <PostView />
      <PostView />
      <PostView />
      <PostView />
      <PostView />
    </>
  );
};

export default App;
