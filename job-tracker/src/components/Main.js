import React from 'react';
import css from '../styles/main.module.css'
import NewJob from './NewJob';
const Main = () => {
    return (
        <div className={css.Main}>
          <h3 className={css.NoTracking}>You are not tracking jobs yet! 
          <br></br>
          <br></br>
          Tap on the Add buttonto start tracking your job hunt!
          </h3>
          {/* <NewJob /> */}
        </div>
    );
};

export default Main;