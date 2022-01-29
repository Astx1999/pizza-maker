import React from 'react'
import styles from './container.module.scss'
const Container = ({children, className}) => {
    return(
        <div className={`${styles.root} ${className}`}>
            {children}
        </div>
    )
}
export default Container