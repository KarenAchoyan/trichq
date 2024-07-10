import React from 'react';
import styles from "../../styles/contact.module.css";
import {HomeOutlined} from "@ant-design/icons";
import {t} from "../../utils/utils";

const DetailsBanner = ({title}) => {
    return (
        <div className={styles.box}>
            <div className={styles.container}>
                <div className={styles.containerText}>
                   <div>
                       <h1>{title}</h1>

                       <div className={styles.containerSpan}>
                           <span className={styles.spanHome}><HomeOutlined/> {t('home')} </span>
                           <span className={styles.spanBorder}>-</span>
                           <span>{t('blog_list')}</span>
                       </div>
                   </div>
                </div>
            </div>
        </div>
    );
};

export default DetailsBanner;