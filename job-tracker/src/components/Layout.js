import React from 'react';
import MenuBar from './MenuBar';
import AddBtn from './AddBtn';
import Main from './Main';
import css from '../styles/layout.module.css'

const Layout = () => {
    return (
        <div className={css.Gloabl}>
            <MenuBar />
            <Main />
            <AddBtn />
        </div>
    );
};

export default Layout;
