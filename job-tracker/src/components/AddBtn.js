import React, { Component } from 'react';
import css from "../styles/buttons.module.css"
import PropTypes from 'prop-types';

class AddBtn extends Component {

    handleClick = () =>{
        console.log("Add a New Job!")
    }

    render() {
        return (
            <div>
                <button className={css.AddBtn} onClick={this.handleClick}>
                    <svg className={css.AddBtnSvg} width="64" height="64" viewBox="0 0 43 37" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <rect x="15.9" y="0.9" width="2.2" height="32.2"/>
                        <rect x="33.1" y="15.9" width="2.2" height="32.2" transform="rotate(90 33.1 15.9)"/>
                    </svg>
                </button>   
            </div>
        );
    }
}

AddBtn.propTypes = {

};

export default AddBtn;