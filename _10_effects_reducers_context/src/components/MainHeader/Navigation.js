import React, { Fragment } from 'react';

import AuthContext from '../../store/auth-context';
import classes from './Navigation.module.css';

const Navigation = (props) => {
  return (
    <AuthContext.Consumer>
      {(ctx) => {
        return (
          <nav className={classes.nav}>
            <ul>
              {ctx.isLoggedIn && (
                <Fragment>
                  <li>
                    <a href='/'>Users</a>
                  </li>
                  <li>
                    <a href='/'>Admin</a>
                  </li>
                  <li>
                    <button onClick={props.onLogout}>Logout</button>
                  </li>
                </Fragment>
              )}
            </ul>
          </nav>
        );
      }}
    </AuthContext.Consumer>
  );
};

export default Navigation;
