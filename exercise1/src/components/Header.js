import React from 'react'
import styles from './Header.module.css';


export default function Header() {



    return (
<div className={ styles.headerBackground}>
<div className={ styles.container }>
        <div className={styles.brand} >KAIRANKESYTTÄJÄT</div>
        <div className={styles.frontpageText}>Uutiset</div>
        <div className={styles.frontpageText2}>Lehdet</div>
        <div className={styles.frontpageText3}>Asiakaspalvelu</div>
    <div>
    <div className={styles.logIn}>
            <div className={styles.TKV}> Tilaa</div>
            <div className={styles.TKV}> Kirjaudu</div>
            <div className={styles.TKV}> Valikko</div> 
            
    </div>
    </div>   
    </div>
</div> 
    )
}
