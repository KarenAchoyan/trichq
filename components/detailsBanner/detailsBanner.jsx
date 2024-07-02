import React from 'react';
import styles from "../../styles/contact.module.css";
import {HomeOutlined} from "@ant-design/icons";

const DetailsBanner = ({title}) => {
    return (
        <div className={styles.box}>
            <div className={styles.container}>
                <div className={styles.containerText}>
                   <div>
                       <h1>{title}</h1>

                       <div className={styles.containerSpan}>
                           <span className={styles.spanHome}><HomeOutlined/> Tourigo </span>
                           <span className={styles.spanBorder}>-</span>
                           <span>Blog List</span>
                       </div>
                   </div>
                </div>
            </div>
        </div>
    );
};

export default DetailsBanner;