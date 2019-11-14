import React from 'react';
import css from "../styles/buttons.module.css"

function AddBtn(props) {

        return (
            <div className={css.AddBtn_wrap}>
                <button className={css.AddBtn} onClick={props.handleClick}>
                    <svg className={css.AddBtn_svg} width="64" height="64" viewBox="0 0 62 62" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <rect x="30" y="14" width="2.2" height="32.2" />
                        <rect x="46" y="2" width="2.2" height="32.2" transform="rotate(90 33.1 15.9)"/>
                    </svg>
                </button>   
            </div>
        )
    
}


export default AddBtn;