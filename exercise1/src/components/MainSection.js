import React from 'react'
import styles from './MainSection.module.css'






export default function (props) {

    
    return (
    <div className={styles.containerMain }>

            <div className={styles.mainnews}>
            
    
            <img style={{maxWidth: '90%', marginTop: '17px', marginLeft: 'auto', marginRight: 'auto', display: 'block'}} src={ props.kuva } alt="kuva"/>
            
           
        <div className={styles.text}>
            <span className={styles.topic}> {props.topic} | </span> { props.body }
        </div>

            <div className={styles.tag}>
                <span className={styles.timeplace}> {props.timeplace}</span>
            </div>
    
    
            </div>
    </div>
    )
}
