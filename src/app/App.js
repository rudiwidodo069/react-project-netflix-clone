import React from "react";
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

// pages
import Main from '../pages/Main';
import Login from '../pages/Login';
import RegistStap1 from '../pages/Regist/Stap1';
import RegistStap2 from '../pages/Regist/Stap2';
import RegistStap3 from '../pages/Regist/Stap3';
import RegistStapPayment from '../pages/Regist/Stap.Payment';
import RegistStapPaymentConfirmation from '../pages/Regist/Stap.Payment.Confirmation';
import Home from '../pages/Home';

// create context
import { UserContext, user } from '../utils/UserContext';

function App() {
  return (
    <UserContext.Provider value={user}>
      <Router>
        <Switch>
          <Route exact path="/" render={() => <Main _props={UserContext} />} />
          <Route path={`/sign-in`} component={Login} />
          <Route path={`/sign-up-step-1`} component={RegistStap1} />
          <Route path={`/sign-up-step-2`} component={RegistStap2} />
          <Route path={`/sign-up-step-3`} component={RegistStap3} />
          <Route path={`/sign-up-step-payment`} component={RegistStapPayment} />
          <Route path={`/sign-up-step-payment-confirmation`} component={RegistStapPaymentConfirmation} />
          <Route path={`/netflix-clone-home`} component={Home} />
        </Switch>
      </Router>
    </UserContext.Provider>
  );
}

export default App;
