import React from 'react'
import styles from './SideSection.module.css';


export default function (props) {


    return ( //tämä tekkee uutisen sidesectionin sisään
        <div className={styles.containerSide}>

            <div className={styles.newsbox}>


                <div className={styles.number}> {props.number}
                </div>
                
                <div className={styles.text}>
                    <span className={styles.topic}> {props.topic} | </span> { props.body }
                
                  
                </div>
            </div>
        </div>
    )
}
