import React, {useState} from 'react'
import Button from "../button/button";
import {ReactComponent as Minus} from '../../images/minus.svg';
import {ReactComponent as Plus} from '../../images/plus.svg';
import numberFormatting from "../../utils/numberFormatting";
import styles from './product.module.scss'

const Product = ({data, onAdd}) => {

    const [active, setActive] = useState(1)
    /*
        const [counter, setCounter] = useState(1)

        const countUp = () => {
            setCounter(counter + 1)
        }
        const countDown = () => {
            if (counter > 1) {
                setCounter(counter - 1)
            }
        }
    */

    return (
        <div className={styles.root}>
            <div className={styles.image}>
                <img src={`/menu/${data.image}`} alt=""/>
            </div>

            <p className={styles.name}>{data.name}</p>
            <p className={styles.ingredients}>{data.ingredients}</p>
            <div className={styles.options}>
                <div className={styles.sizes}>
                    <Button
                        type={'blank'}
                        onClick={() => {
                            setActive(1)
                        }}
                        className={`${styles.size} ${active === 1 ? styles.active : ''}`}>
                        <span>30 սմ</span>
                    </Button>
                    <Button
                        type={'blank'}
                        onClick={() => {
                            setActive(2)
                        }}
                        className={`${styles.size} ${active === 2 ? styles.active : ''}`}>
                        <span>35 սմ</span>
                    </Button>
                </div>
                {/*<div className={styles.counter}>
                    <Button
                        type={'blank'}
                        className={styles.minus}
                        onClick={countDown}>
                        <Minus/>
                    </Button>
                    <div className={styles.number}>{counter}</div>
                    <Button
                        type={'blank'}
                        className={styles.plus}
                        onClick={countUp}>
                        <Plus/>
                    </Button>
                </div>*/}
            </div>
            <div className={styles.footer}>
                <p className={styles.price}>{numberFormatting(data.price)}
                    <span className={styles.currency}>AMD</span>
                </p>
                <Button onClick={() => {
                    onAdd(active)
                }} type={'primary'} className={styles.add}>Ավելացնել</Button>
            </div>

        </div>
    )
}
export default Product