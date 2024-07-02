import React from 'react';
import styles from "../../styles/detalis.module.css";
import {CalendarOutlined} from "@ant-design/icons";
import Link from "next/link";

const SmallBlog = () => {
    return (
        <div className={styles.recentImg}>
                <img src="https://html.bdevs.net/tourigo-prv/assets/images/blog/blog-image-14.png"
                     alt="chi bacum"/>
            <div className={styles.recentImgText}>
                <h6><Link href={'/blogs/3'}>Patent War Iconic Legal Battles of That Protect Shaped lead.</Link></h6>
                <span className={styles.recentImgTextSpans}><CalendarOutlined/></span>
                <span className={styles.recentImgTextSpan}> Mar 18, 2028</span>
            </div>
        </div>
    );
};

export default SmallBlog;