import React from 'react';
import css from '../styles/jobCards.module.css'
import AddBtn from './AddBtn';

function NoContent(props) {
    return (
        <div className={css.NoTracking}>
            <h3> You aren't tracking anythig yet!</h3>
            <AddBtn handleClick={props.addBtn}/>
        </div>
    );
}

export default NoContent;