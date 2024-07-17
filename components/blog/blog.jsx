import React from 'react';
import BlogItem from "../../components/blog/blogItem";
import styles from "../../styles/blog.module.css"
import Button from "../button/button";
import Link from "next/link";
import {t} from "../../utils/utils";
import Image from "next/image";
import Slider from "react-slick";

const Blog = ({blogs}) => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
        rows:1,
        row:1,
        arrows: true,
        autoplaySpeed: 2000,
        prevArrow: <Image width={20} height={20} alt='arrow' src={'/left-arrow.png'}/>,
        nextArrow: <Image width={20} height={20} alt='arrow' src={'/right-arrow.png'}/>,
        responsive: [
            {
                breakpoint: 1200, // large screens
                settings: {
                    slidesToShow: 4,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 1024, // medium screens
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 768, // tablets
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    arrows: false,

                }
            },
            {
                breakpoint: 600, // mobile devices
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    arrows: false,
                }
            }
        ]
    };

    return (
        <div className={styles.blogContainer}>
            <div className={styles.blogContainerText}>
                <div className={styles.page}>
                    <h4>{t('our_blog')}</h4>
                    <h2>{t('about_blog')}</h2>
                </div>
            </div>
            <Slider {...settings}>
                {blogs?.map((item) => (
                    <div key={item.id} className={styles.slideItem}>
                        <BlogItem item={item}/>
                    </div>
                ))}
            </Slider>
            <div className={styles.center}>
                <Link href={'/blogs'}>
                    <Button type={'blue'}>{t('see_more')}</Button>
                </Link>
            </div>
        </div>
    );
};

export default Blog;