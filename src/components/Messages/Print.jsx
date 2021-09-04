import React from 'react';
import styles from "./messages.module.css";

function Print(props) {
    return (
        <div className={styles.footer}>
            <div className={styles['input-field']}>
                <input placeholder="Write a message"/>
            </div>
            <div className={styles.attachment}>
                <i className="fa fa-paperclip" aria-hidden="true"></i>
            </div>
            <div className={styles.micro}>
                <i className="fa fa-microphone" aria-hidden="true"></i>
            </div>
        </div>
    );
}

export default Print;