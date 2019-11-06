import React from 'react';
import MenuBar from './MenuBar'
import AddBtn from './AddBtn'
import css from '../styles/layout.module.css'



function Layout(props) {

        return (
            <div className={css.Content_wrap}>
                <MenuBar />
                {props.content}
                <AddBtn handleClick={props.addBtn}/>
            </div>
            )
    }


export default Layout;
