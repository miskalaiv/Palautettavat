import React from 'react'
import styles from './NewsNotifications.module.css';


export default function (props) {
    return (
        <div className={styles.containerNoti }> 
        <span className={ styles.headerNoti}> {props.topic} | </span>  {props.body }
        </div>
    )
}
