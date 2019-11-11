import React from 'react';
import css from "../styles/buttons.module.css"

function AddBtn(props) {

        return (
            <div>
                <button className={css.AddBtn} onClick={props.handleClick}>
                    <svg className={css.AddBtnSvg} width="64" height="64" viewBox="0 0 46 35" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <rect x="15.9" y="0.9" width="2.2" height="32.2"/>
                        <rect x="33.1" y="15.9" width="2.2" height="32.2" transform="rotate(90 33.1 15.9)"/>
                    </svg>
                </button>   
            </div>
        )
    
}


export default AddBtn;