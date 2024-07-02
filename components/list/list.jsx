import React from 'react';
import styles from "../../styles/blogList.module.css";
import { CalendarOutlined, HomeOutlined, UserOutlined } from "@ant-design/icons";
import Button from "../../components/button/button";
import Link from "next/link";
import Slider from "react-slick";
import Image from "next/image";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const List = () => {
    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows:false,
        prevArrow: <Image width={20} height={20} alt='arrow' src={'/left-arrow.png'}/>,
        nextArrow: <Image  width={20} height={20} alt='arrow' src={'/right-arrow.png'}/>,
    };

    return (
        <div className={styles.containerBlog}>
            <div className={styles.item}>
                <Slider {...settings}>
                    <div className={styles.sliderDiv}>
                        <img src="https://html.bdevs.net/tourigo-prv/assets/images/blog/blog-image-1.png"
                             alt='chi bacum'/>
                    </div>
                    <div className={styles.sliderDiv}>
                        <img src="https://html.bdevs.net/tourigo-prv/assets/images/blog/blog-image-1.png"
                             alt='chi bacum'/>
                    </div>
                </Slider>
                <div className={styles.itemSpan}>
                    <span className={styles.spanCleander}><CalendarOutlined /></span>
                    <span className={styles.spanJanuary}>January 25 2024</span>

                    <h2 className={styles.seaside}>Seaside Serenity: Coastal Getaways for Sun, Sand, and Surf</h2>
                    <p className={styles.content}>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse, aut quisquam!
                        Eaque sit cumque iusto non laborum eos, vitae dolor sapiente eligendi distinctio
                        explicabo quis facere nulla sint sed quisquam aperiam possimus et. Autem, esse.
                    </p>
                    <Link href={`/blogs/test`}>
                        <Button>Read More</Button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default List;
