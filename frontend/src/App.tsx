import React from 'react';
import './App.css';
import 'static/css/reset.css';
import { PostView } from 'domain/post/PostView';
import { Footer } from 'view/footer/Footer';
import { Header } from 'view/header/Header';
import styled from 'styled-components';
import Theme from 'theme';

interface Props extends Theme {
}

const App: React.FC<Props> = ({ className, ...props }: Props) => {
  return (
    <div className={`App ${className}`}>
      <Header />
      <PostView />
      <Footer />
    </div>
  );
};

const StyledApp = styled(App)`
  display: flex;
  flex-direction: column;
  
  >:nth-child(n+1) {
    margin: 0 0 1em 0;
  }
  
  >:last-child {
    align-self: center;
  }
`;

export { StyledApp as App };
