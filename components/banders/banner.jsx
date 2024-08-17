import React, {useEffect} from 'react';
import styles from "../../styles/banner.module.css"
import {ArrowRightOutlined, FacebookOutlined, InstagramOutlined, YoutubeOutlined} from "@ant-design/icons";
import Slider from "react-slick";
import Button from "../button/button";
import Item from "../sliders/item";


const Banner = ({slides}) => {
    const settings = {
        dots: true,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: true,
        autoplay: true,
        autoplaySpeed: 5000
    };
    return (

        <div className={styles.banner}>
            <div className={styles.bannerItem}>
                <Slider {...settings}>
                    {slides?.map((item) => (
                        <Item key={item.id} item={item}/>
                    ))}
                </Slider>
            </div>
        </div>
    );
};

export default Banner;