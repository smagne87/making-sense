import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Grid from '@material-ui/core/Grid';

import useStyles from './styles/LayoutDefaultStyles';
import Sidebar from '../components/Sidebar';
import Home from '../views/home';
import Character from '../views/character';

const LayoutDefault = () => {
  const classes = useStyles();
  return (
    <main className={classes.container}>
      <Grid container>
        <Grid item xs={12} md={6}>
          <Sidebar />
        </Grid>
        <Grid item xs={12} md={6}>
          <div className={classes.mainContainer}>
            <Switch>
              <Route path="/home" component={Home} />
              <Route path="/character/:id" component={Character} />
            </Switch>
          </div>
        </Grid>
      </Grid>
    </main>
  );
};

export default LayoutDefault;
