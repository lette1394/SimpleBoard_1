import React from 'react';
import { BrowserRouter as Router, Link, Route } from 'react-router-dom';
import './App.css';
import 'static/css/reset.css';
import { Post } from 'domain/post/Post';
import { Footer } from 'view/footer/Footer';
import { Header } from 'view/header/Header';
import styled from 'styled-components';
import Theme from 'theme';

interface Props extends Theme {
}

const App: React.FC<Props> = ({ className, ...props }: Props) => {
  return (
    <Router>
      <div className={`App ${className}`}>
        <Header />
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/timeline">Timeline</Link>
        </li>
        <li>
          <Link to="/comment">Comments</Link>
        </li>

        <Route path={`/`}
               exact={true}
               component={Post} />
        <Route path={`/timeline`}
               component={Post} />
        <Route path={`/comment`}
               component={Post} />

        <Footer />
      </div>
    </Router>
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
