import React from 'react';
import styles from "../../styles/tours.module.css"
import Slider from "react-slick";
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Image from "next/image";
import Item from "./item";
import {t} from "../../utils/utils";

const Tours = ({tours}) => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
        rows:1,
        row:1,
        arrows: true,
        autoplaySpeed: 20000,
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
                breakpoint: 480, // mobile devices
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    arrows: false,
                }
            }
        ]
    };
    return (
        <div className={styles.container}>
            <h4>{t('out_trips')}</h4>
            <h2>{t('favorite_tours')}</h2>
            <div>
                <Slider {...settings}>
                    {tours?.map((item) => (
                        <div key={item.id}>
                            <Item item={item}/>
                        </div>
                    ))}
                </Slider>
            </div>
        </div>
    );
};

export default Tours;