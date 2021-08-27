import React from 'react'
import styles from "./messages.module.css";

function MessagesBody(props) {

    return (
        <div className={styles.body}>
          <div className={styles['to-message']}>
            <div className={styles['message-text']}>fyfyf</div>
            <div className={styles['message-time']}>13:50</div>
          </div>

        </div>
    );
}

export default MessagesBody;