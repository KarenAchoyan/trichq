import React from "react";
import styles from "../../styles/sliders.module.css"
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Image } from "antd";
const Sliders = () => {
    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 6,
        slidesToScroll: 4,
        arrows:false,
        prevArrow: <Image width={20} height={20} alt='arrow' src={'/left-arrow.png'}/>,
        nextArrow: <Image  width={20} height={20} alt='arrow' src={'/right-arrow.png'}/>,
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
            <Slider {...settings}>
                <div>
                    <Image
                        src="https://html.bdevs.net/tourigo-prv/assets/images/instagram/insta-img-2.png"
                    />
                </div>
                <div>
                    <Image
                        src="https://html.bdevs.net/tourigo-prv/assets/images/instagram/insta-img-2.png"
                    />
                </div>
                <div>
                    <Image
                        src="https://html.bdevs.net/tourigo-prv/assets/images/instagram/insta-img-2.png"
                    />
                </div>
                <div>
                    <Image
                        src="https://html.bdevs.net/tourigo-prv/assets/images/instagram/insta-img-2.png"
                    />
                </div>
                <div>
                    <Image
                        src="https://html.bdevs.net/tourigo-prv/assets/images/instagram/insta-img-2.png"
                    />
                </div>
                <div>
                    <Image
                        src="https://html.bdevs.net/tourigo-prv/assets/images/instagram/insta-img-2.png"
                    />
                </div>
                <div>
                    <Image
                        src="https://html.bdevs.net/tourigo-prv/assets/images/instagram/insta-img-2.png"
                    />
                </div>
                <div>
                    <Image
                        src="https://html.bdevs.net/tourigo-prv/assets/images/instagram/insta-img-2.png"
                    />
                </div>
                <div>
                    <Image
                        src="https://html.bdevs.net/tourigo-prv/assets/images/instagram/insta-img-2.png"
                    />
                </div>
                <div>
                    <Image
                        src="https://html.bdevs.net/tourigo-prv/assets/images/instagram/insta-img-2.png"
                    />
                </div>
                <div>
                    <Image
                        src="https://html.bdevs.net/tourigo-prv/assets/images/instagram/insta-img-2.png"
                    />
                </div>
            </Slider>
        </div>
    );
};

export default Sliders;