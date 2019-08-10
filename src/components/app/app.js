import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import { PostsPage, PostDetailsPage } from '../pages';

import './app.css';

const App = () => {
  return (
    <div className="app">
      <Router>
        <Route path="/" component={PostsPage} exact />
        <Route
          path="/posts/:id"
          render={({ match }) => {
            const { id } = match.params;
            return <PostDetailsPage postId={id} />;
          }}
        />
      </Router>
    </div>
  );
};

export default App;
