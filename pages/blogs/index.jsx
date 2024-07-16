import React, {useEffect} from 'react';

import App from "../../components/layouts/app";
import DetailsBanner from "../../components/detailsBanner/detailsBanner";

import BlogItem from "../../components/blog/blogItem";
import {useDispatch, useSelector} from "react-redux";
import {getBlogs} from "../../store/blog/actions";
import {getReviews} from "../../store/reivews/actions";
import {getTours} from "../../store/tour/actions";
import {getSlides} from "../../store/slides/actions";
import {getGalleries} from "../../store/gallery/actions";
import styles from "../../styles/blog.module.css";
import {t} from "../../utils/utils";


const Index = ({item}) => {
    const blogs = useSelector((state) => state.blog.blogs);

    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getBlogs.request());
    }, [dispatch]);
    return (
        <>
            <App>
                <DetailsBanner title={t('blog')} content={t('blog')}/>
                <div className={styles.container}>
                    <h1>{t('all_news')}</h1>
                    <div className={styles.item}>
                        {blogs?.map((item) => (
                            <div key={item.id}>
                                <BlogItem item={item}/>
                            </div>
                        ))}
                    </div>
                </div>
            </App>
        </>
    );
};

export default Index;
