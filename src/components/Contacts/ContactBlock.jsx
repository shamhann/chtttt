import React from 'react'
import styles from './contacts.module.css'
import * as dayjs from 'dayjs'

function ContactBlock (props) {
  return (
    <div className={styles.users}>
      {/*<NavLink to={`/contact/${props.item._id}`}>*/}
        <div className={styles['users-avatar']}>{props.item !== undefined ? props.item.fullname.substr(0, 1) : null}</div>
        <div className={styles['users-names']}>
          <div className={styles.fullname}>{props.item.fullname}</div>
          <div className={styles['users-text']}>{props.item.lastMessage !== undefined ? props.item.lastMessage.content :
            null}</div>
        </div>
      {/*</NavLink>*/}
      <div className={styles['users-time']}> {dayjs(props.item.lastMessages?.time).format("HH:mm")}
      </div>
    </div>
  )
}

export default ContactBlock