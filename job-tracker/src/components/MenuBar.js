import React from 'react';
import css from '../styles/menuBar.module.css'

const MenuBar = () => {
    return (
        <div className={css.MenuBar}>
            <button className={css.MenuBtn}>
            <svg width="27" height="21" viewBox="0 0 27 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                <line x1="0.963867" y1="19.9556" x2="26.9805" y2="19.9556" stroke="white" strokeWidth="2"/>
                <line x1="0.963867" y1="10.6222" x2="26.9805" y2="10.6222" stroke="white" strokeWidth="2"/>
                <line x1="0.963867" y1="1.91112" x2="26.9805" y2="1.91112" stroke="white" strokeWidth="2"/>
            </svg>

            </button>
            <h1 className={css.MenuTitle}> JOBTracker </h1>
        </div>
    );
};

export default MenuBar;