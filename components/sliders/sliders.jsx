import React from "react";
import styles from "../../styles/sliders.module.css"
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import {Image} from "antd";
import process from "next/dist/build/webpack/loaders/resolve-url-loader/lib/postcss";
import {t} from "../../utils/utils";

const Sliders = ({galleries}) => {
    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 5,
        slidesToScroll: 4,
        arrows: false,
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
                }
            },
            {
                breakpoint: 480, // mobile devices
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                }
            }
        ]
    };
    return (
        <div className={styles.container}>
            <h2>{t('media')}</h2>
            <Slider {...settings}>
                {galleries?.map((item) => (
                    <div key={item.id} className={styles.imageContainer}>
                        <Image
                            className={styles.image}
                            src={process.env.IMAGE_URL + item.image}
                            alt={item.title}
                        />
                    </div>
                ))}
            </Slider>
        </div>



    );
};

export default Sliders;