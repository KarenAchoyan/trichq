import React, {useEffect, useState} from 'react';
import styles from "../../styles/banner.module.css";
import Button from "../button/button";
import {FacebookOutlined, InstagramOutlined, YoutubeOutlined} from "@ant-design/icons";
import {t} from "../../utils/utils";
import {useRouter} from "next/dist/client/compat/router";
import Image from "next/image";
import {Skeleton} from "antd";

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
            <Image width={1000} height={600} src={process.env.IMAGE_URL + item.image} alt=""/>
            <div className={styles.back}/>

            <div className={styles.overline}>
                <div className={styles.bannerItemText}>
                    <h4>WELCOME TRICHQ</h4>
                    <h1>{title}</h1>
                    <p>{content}</p>
                    <a href={item?.url}>
                        <Button type={`blue`}>{t('know_more')}</Button>
                    </a>

                </div>
            </div>
        </div>
    );
};

export default Item;