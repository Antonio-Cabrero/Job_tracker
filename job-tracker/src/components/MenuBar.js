import React from 'react';
import css from '../styles/menuBar.module.css'

const MenuBar = (props) => {

    const toggleClass = props.toggleIcon? css.MenuBtn_open : css.MenuBtn
    return (
        <div className={css.MenuBar}>
            <div onClick={props.menuBtn} className={toggleClass}>
                <div className={css.MenuBar_line}></div>
                <div className={css.MenuBar_line}></div>
                <div className={css.MenuBar_line}></div>
            </div>
            <h1 className={css.MenuTitle}> JOBTracker </h1>
        </div>
    );
};

export default MenuBar;