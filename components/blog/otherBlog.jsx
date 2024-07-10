import React, {useEffect, useState} from 'react';
import styles from "../../styles/detalis.module.css"
import {CalendarOutlined, MessageOutlined} from "@ant-design/icons";
import {Input} from "antd";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import SmallBlog from "./smallBlog";
import {useRouter} from "next/dist/client/compat/router";
import {useDispatch, useSelector} from "react-redux";
import {getBlog} from "../../store/blog/actions";
import {formatDate} from "../../utils/utils";
import DetailsBanner from "../detailsBanner/detailsBanner";

const OtherBlog = () => {
    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
    };
    const router = useRouter();
    const {locale} = router;

    const [title, setTitle] = useState("");
    const [content, setContent] = useState("");

    const {name} = router.query;
    const dispatch = useDispatch();
    const blog = useSelector((state) => state.blog?.selectedBlog?.data);


    useEffect(() => {
        dispatch(getBlog.request({id: name}))
    }, [dispatch])

    useEffect(() => {
        const title = (locale === 'en') ? blog?.title_en : (locale === 'ru') ? blog?.title_ru : blog?.title
        const content = (locale === 'en') ? blog?.content_en : (locale === 'ru') ? blog?.content_ru : blog?.content
        setTitle(title)
        setContent(content)
    }, [locale])
    return (
        <>
            <DetailsBanner title={title}/>
            <div className={styles.detalis}>
                <div className={styles.detalisLeft}>
                    <div className={`${styles.item} ${styles.itemAvatar}`}>
                        <img src={process.env.IMAGE_URL + blog?.avatar} alt='Blog'/>
                        <div className={styles.detalisText}>
                            <h3>{title}</h3>
                            <div className={styles.borderImg}>
                                <span className={styles.calendar}><CalendarOutlined/></span>
                                <span className={styles.date}>{formatDate(blog?.created_at)}</span>
                            </div>
                        </div>
                    </div>

                    <div className={styles.item}>
                        <div className={styles.detalisText}>
                            <p dangerouslySetInnerHTML={{__html: content}}/>
                        </div>
                    </div>
                </div>
                <div className={styles.detalisInput}>
                    <div className={styles.detalisInputBorder}>
                        <div className={styles.recent}>
                            <h6>Recent Post</h6>
                            <div className={styles.recentItem}>
                                <SmallBlog/>
                                <SmallBlog/>
                                <SmallBlog/>
                                <SmallBlog/>
                                <SmallBlog/>
                                <SmallBlog/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default OtherBlog;