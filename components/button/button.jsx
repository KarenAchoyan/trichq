import React from 'react';
import styles from "../../styles/button.module.css"
import {ArrowRightOutlined} from "@ant-design/icons";
const Button = (props) => {
    return (
        <button {...props} className={`${styles.button} ${props.type==='blue'?styles.blue:styles.orange}`}>
            <span className={styles.animate1}><ArrowRightOutlined/></span> {props.children} <span
            className={styles.animate2}><ArrowRightOutlined/></span>
        </button>
    );
};

export default Button;