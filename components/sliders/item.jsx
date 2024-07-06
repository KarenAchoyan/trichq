import React, {useEffect, useState} from 'react';
import styles from "../../styles/banner.module.css";
import Button from "../button/button";
import {FacebookOutlined, InstagramOutlined, YoutubeOutlined} from "@ant-design/icons";
import {t} from "../../utils/utils";
import {useRouter} from "next/dist/client/compat/router";

const Item = ({item}) => {

    const router = useRouter();
    const {locale} = router;

    const [title, setTitle] = useState("");
    const [content, setContent] = useState("");

    useEffect(() => {
        const title = (locale === 'en') ? item.title_en : (locale === 'ru') ? item.title_ru : item.title
        const content = (locale === 'en') ? item.content_en : (locale === 'ru') ? item.content_ru : item.content
        setTitle(title)
        setContent(content)

    }, [locale, item])
    return (
        <div className={styles.item}>
            <img src={process.env.IMAGE_URL + item.image} alt=""/>
            <div className={styles.back}/>

            <div className={styles.overline}>
                <div className={styles.bannerItemText}>
                    <h4>WELCOME TOURIGO</h4>
                    <h1>{title}</h1>
                    <p>{content}</p>
                    <a href={item?.url}>
                        <Button type={`blue`}>{t('know_more')}</Button>
                    </a>
                    <div className={styles.socials}>
                        <ul>
                            <li><FacebookOutlined/></li>
                            <li><InstagramOutlined/></li>
                            <li><YoutubeOutlined/></li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Item;