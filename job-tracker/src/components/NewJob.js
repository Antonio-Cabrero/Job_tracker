import React, { PureComponent } from 'react'
import css from "../styles/newJob.module.css"
// import PropTypes from 'prop-types';

class NewJob extends PureComponent {
    render() {
        return (
            <div className={css.NewJob}>
                <form>
                    <input className={css.FormInput} type="text" placeholder="Job Position"/>
                    <input className={css.FormInput} type="text" placeholder="Company Name"/>

                    <div className={css.BtnWrap}>
                        <span>Date</span><button className={css.FormBtn}>Change</button>
                    </div>
                    
                    <span>Optional</span>

                    <input className={css.FormInput} type="text" placeholder="Job Board"/>
                    <div className={css.BtnWrap}>
                        <button className={css.FormBtn}>Save</button>
                        <button className={css.FormBtn_Cancel}>Cancel</button>
                    </div>
                </form>
            </div>
        );
    }
}

// NewJob.propTypes = {

// };

export default NewJob;