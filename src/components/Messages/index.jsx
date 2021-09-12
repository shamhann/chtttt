import React from 'react'
import styles from './messages.module.css'
import TopBlock from './TopBlock'
import MessagesBody from './MessagesBody'
import Print from './Print'

function Messages(props) {

  return (
    <div className={styles.messages}>
      <TopBlock />
      <MessagesBody />
      <Print />
    </div>
    );
}

export default Messages;