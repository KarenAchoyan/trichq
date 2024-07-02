import React from 'react';
import styles from "../../styles/blogList.module.css"
import {HomeOutlined} from "@ant-design/icons";
const Index = () => {
    return (
        <div className={styles.container}>
            <div className={styles.containerText}>
                <h1>Blog List</h1>
                <div className={styles.containerSpan}>
                    <span className={styles.spanHome}><HomeOutlined/> Tourigo </span>
                    <span className={styles.spanBorder}>-</span>
                    <span>Blog List</span>
                </div>
            </div>
        </div>
    );
};

export default Index;