import React from 'react';
import  styles from "../../styles/detalis.module.css"
import {CalendarOutlined, MessageOutlined} from "@ant-design/icons";
import {Input} from "antd";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import SmallBlog from "./smallBlog";
const OtherBlog = () => {
    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows:false,
    };
    return (
        <div className={styles.detalis}>
            <div className={styles.detalisLeft}>
                <div className={styles.item}>
                    <img src="https://html.bdevs.net/tourigo-prv/assets/images/blog/blog-image-1.png" alt='chi bacum'/>
                    <div className={styles.detalisText}>
                        <h3>Patent War Iconic Legal Battles of That Protect Shaped lead.</h3>
                        <div className={styles.borderImg}>
                            <span className={styles.cleandr}><CalendarOutlined/></span>
                            <span className={styles.date}>12/08/2024</span>

                        </div>
                    </div>
                </div>
                <div className={styles.containerDiv}>
                    <div className={styles.containerItem}>
                        <div className={styles.containerItemText}>
                            <h4>The purpose of the patent system is to foster and encourage new inventions of
                                usefulness.</h4>
                            <div className={styles.containerItemTextP}>
                                <p>Thomas Jefferson</p>
                            </div>
                        </div>

                    </div>
                </div>
                    <div className={styles.item}>
                        <Slider {...settings}>
                            <div className={styles.itemSlider}>
                                <img src="https://html.bdevs.net/tourigo-prv/assets/images/blog/blog-image-1.png"
                                     alt='chi bacum'/>
                            </div>
                            <div className={styles.itemSlider}>
                                <img src="https://html.bdevs.net/tourigo-prv/assets/images/blog/blog-image-1.png"
                                     alt='chi bacum'/>
                            </div>
                            <div className={styles.itemSlider}>
                                <img src="https://html.bdevs.net/tourigo-prv/assets/images/blog/blog-image-1.png"
                                     alt='chi bacum'/>
                            </div>
                            <div className={styles.itemSlider}>
                                <img src="https://html.bdevs.net/tourigo-prv/assets/images/blog/blog-image-1.png"
                                     alt='chi bacum'/>
                            </div>
                            <div className={styles.itemSlider}>
                                <img src="https://html.bdevs.net/tourigo-prv/assets/images/blog/blog-image-1.png"
                                     alt='chi bacum'/>
                            </div>
                            <div className={styles.itemSlider}>
                                <img src="https://html.bdevs.net/tourigo-prv/assets/images/blog/blog-image-1.png"
                                     alt='chi bacum'/>
                            </div>
                        </Slider>
                        <div className={styles.detalisText}>
                            <h3>Patent Process</h3>
                            <div className={styles.borderTextP}>
                                <p>Lorem ipsum dolor sit amet consectetur adipiscing elit Ut et massa mi. Aliquam in hendrerit urna. Pellentesque sit amet</p>
                                <p>sapien fringilla, mattis ligula consectetur, ultrices mauris. Maecenas vitae mattis tellus. Nullam quis imperdiet augue.</p>
                                <p>Vestibulum auctor ornare leo, non suscipit magna interdum eu.</p>
                            </div>
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
                        <div className={styles.bottoms}></div>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default OtherBlog;