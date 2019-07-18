import React from 'react';
import './App.css';
import 'static/css/reset.css';
import { PostView } from 'domain/post/PostView';
import { Footer } from 'view/footer/Footer';
import { Header } from 'view/header/Header';

const App: React.FC = () => {
  return (
    <div className={`App`}>
      <Header />
      <PostView />
      <Footer />
    </div>
  );
};

export default App;
