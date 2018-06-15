import React from 'react';
import HomepageLayout from './Home';
import Booking from './Booking';
import Sponsors from './Sponsors';
import Store from './Store';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import * as routes from '../constants/routes';

const App = () =>

  <Router>
    <div>

      <Route
        exact path={routes.HOME}
        component={() => <HomepageLayout />}
      />

      <Route
        exact path={routes.BOOKING}
        component={() => <Booking />}
      />
      <Route
        exact path={routes.SPONSORS}
        component={() => <Sponsors />}
      />
      <Route
        exact path={routes.STORE}
        component={() => <Store />}
      />

    </div>
  </Router>

export default App;
