import React, { Fragment, useContext } from 'react';

import AuthContext from '../../store/auth-context';
import classes from './Navigation.module.css';

const Navigation = (props) => {
  const ctx = useContext(AuthContext);
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
};

export default Navigation;
