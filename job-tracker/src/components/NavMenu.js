import React, { useState } from 'react';
import css from '../styles/navMenu.module.css'

function NavMenu(props) {

    const display = props.toggleDisplay? css.NavMenu_container_open : css.NavMenu_container

    return (
        <div className={display} >
            <div className={css.NavMenu}>
                <div className={css.NavMenu_item}>About</div>
                <div className={css.NavMenu_item}>Settings</div>
                <div className={css.NavMenu_item}>Version</div>
            </div>
        </div>
    );
}

export default NavMenu;