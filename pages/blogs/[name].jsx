import React, {useEffect, useState} from 'react';
import App from "../../components/layouts/app";
import styles from "../../styles/detalis.module.css";
import {CalendarOutlined, HomeOutlined} from "@ant-design/icons";
import OtherBlog from "../../components/blog/otherBlog";
import DetailsBanner from "../../components/detailsBanner/detailsBanner";
import {useRouter} from "next/dist/client/compat/router";
import {useDispatch, useSelector} from "react-redux";
import {getBlog, getBlogs} from "../../store/blog/actions";
import {formatDate, t} from "../../utils/utils";
import SmallBlog from "../../components/blog/smallBlog";
import {Skeleton} from "antd";
import {getTours} from "../../store/tour/actions";

const Name = () => {

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
    const isFetching = useSelector((state) => state.blog?.isFetching);


    useEffect(() => {
        dispatch(getBlog.request({id: name}))
    }, [dispatch, name])

    useEffect(() => {
        const title = (locale === 'en') ? blog?.title_en : (locale === 'ru') ? blog?.title_ru : blog?.title
        const content = (locale === 'en') ? blog?.content_en : (locale === 'ru') ? blog?.content_ru : blog?.content
        setTitle(title)
        setContent(content)
    }, [blog?.content, blog?.content_en, blog?.content_ru, blog?.title, blog?.title_en, blog?.title_ru, locale])
    return (
        <App>
            <DetailsBanner title={t('blog')} content={title}/>
            <div className={styles.detalis}>
                <div className={styles.detalisLeft}>
                    <Skeleton loading={isFetching} active>
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
                    </Skeleton>
                    <Skeleton loading={isFetching} active>
                        <div className={styles.item}>
                            <div className={styles.detalisText}>
                                <p dangerouslySetInnerHTML={{__html: content}}/>
                            </div>
                        </div>
                    </Skeleton>
                </div>
                <Skeleton loading={isFetching} active>
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
                </Skeleton>

            </div>
        </App>
    );
};

export default Name;