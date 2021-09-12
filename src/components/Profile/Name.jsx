import React from 'react'
import styles from './profile.module.css'

function Name (props) {

  return (
    <div >

      <div className={styles.avatar}>
        {props.profile !== undefined ? props.profile.fullname.substr(0, 1) : null}
      </div>

      <h3 className={styles.name} >
        {props.profile !== undefined ? props.profile.fullname : null}
      </h3>

      <div className={styles.email}>
        { props.profile !== undefined ? <div>@{ props.profile.username}</div> : null}
      </div>

      <div className={styles.icon}>
        <div>
          <i className="fa fa-phone" aria-hidden="true"></i>
        </div>
        <div>
          <i className="fa fa-video-camera" aria-hidden="true"></i>
        </div>
        <div>
          <i className="fa fa-envelope" aria-hidden="true"></i>
        </div>
      </div>
    </div>
  )
}

export default Name