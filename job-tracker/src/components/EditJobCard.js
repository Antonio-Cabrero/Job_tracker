import React, { Component } from 'react';
import css from '../styles/form.module.css'
import PropTypes from 'prop-types';

class EditJobCard extends Component {
    render() {
        return (
            <div>
                <h3 className={css.FormTitle}>Job Position</h3>
            <span>Company</span>
            {/* <form>
                <div className={css.BtnWrap}>
                    <span>Date</span><button className={css.FormBtn}>Change</button>
                </div>
                
                <span>Optional</span>

                <input className={css.FormInput} type="text" placeholder="Job Board"/>
                <div className={css.BtnWrap}>
                    <button className={css.FormBtn}>Save</button>
                    <button className={css.FormBtn_Cancel}>Cancel</button>
                </div>
            </form> */}
            </div>
        );
    }
}

EditJobCard.propTypes = {

};

export default EditJobCard;