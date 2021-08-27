import React from 'react'
import styles from './messages.module.css'
import MessagesHeader from './MessagesHeader'
import MessagesBody from './MessagesBody'
import MessageFooter from './MessageFooter'

function Messages(props) {

    return (
      <div>
        <div className={styles.messages}>
          <div className={styles['messages-header']}>
            <MessagesHeader item={props.item} />
          </div>
          <div className={styles['messages-body']}>
            <MessagesBody item={props.item} />
          </div>
          <div className={styles['message-footer']}>
            <MessageFooter item={props.item} />
          </div>
        </div>
      </div>
    );
}

export default Messages;