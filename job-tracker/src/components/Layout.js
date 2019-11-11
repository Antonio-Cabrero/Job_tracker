import React from 'react';
import MenuBar from './MenuBar'
import css from '../styles/layout.module.css'



function Layout(props) {

        return (
            <div className={css.Content_wrap}>
                <MenuBar />
                {props.content}
            </div>
            )
    }


export default Layout;
