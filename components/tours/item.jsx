import React, {useEffect, useState} from 'react';
import {ArrowRightOutlined} from '@ant-design/icons';
import {Card} from 'antd';
import styles from "../../styles/tours.module.css";
import Link from "next/link";
import {useRouter} from "next/dist/client/compat/router";


const Item = ({item}) => {

    const router = useRouter();
    const {locale} = router;

    const [title, setTitle] = useState("");
    const [currentName, setCurrentName] = useState("");

    useEffect(() => {
        const title = (locale === 'en') ? item.title_en : (locale === 'ru') ? item.title_ru : item.title
        const current = (locale === 'en') ? "AMD" : (locale === 'ru') ? "АМД" : "դրամ"
        setTitle(title)
        setCurrentName(current)

    }, [locale, item])
    return (
        <div className={styles.itemTour}>
            <Link href={'/tours/'+encodeURIComponent(item?.title)}>
                <div className={styles.avatar}>
                    <img
                        alt="example"
                        src={process.env.IMAGE_URL + item.avatar}
                    />
                    <div className={styles.price}>{item.price} {currentName}</div>
                </div>
            </Link>

            <div className={styles.title}>
                <h3>{title}</h3>
            </div>
        </div>
    )
        ;
};

export default Item;