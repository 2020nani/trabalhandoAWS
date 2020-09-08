import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Form from './pages/Form.js';

export default function App() {
  return (
    <Switch>
      <Route path="/" exact component={Form} />
      
    </Switch>
  );
}