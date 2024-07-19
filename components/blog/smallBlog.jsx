import React, {useEffect, useState} from 'react';
import styles from "../../styles/detalis.module.css";
import {CalendarOutlined} from "@ant-design/icons";
import Link from "next/link";
import {useRouter} from "next/dist/client/compat/router";
import {formatDate, truncateContent} from "../../utils/utils";

const SmallBlog = ({item}) => {
    const [title, setTitle] = useState("");
    const router = useRouter();
    const {locale} = router;

    useEffect(() => {
        const title = (locale === 'en') ? item?.title_en : (locale === 'ru') ? item?.title_ru : item?.title
        setTitle(title)
    }, [item?.title, item?.title_en, item?.title_ru, locale])

    return (
        <div className={styles.recentImg}>
            <img src={process.env.IMAGE_URL + item.avatar} alt={'Blog item'}/>
            <div className={styles.recentImgText}>
                <h6> <Link href={'/blogs/'+encodeURIComponent(item?.title)}>{truncateContent(item?.title, 29)}</Link></h6>
                <span className={styles.recentImgTextSpans}><CalendarOutlined/></span>
                <span className={styles.recentImgTextSpan}> {formatDate(item?.created_at)}</span>
            </div>
        </div>
    );
};

export default SmallBlog;