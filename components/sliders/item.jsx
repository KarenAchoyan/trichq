import React from 'react';
import styles from "../../styles/banner.module.css";
import Button from "../button/button";
import {FacebookOutlined, InstagramOutlined, YoutubeOutlined} from "@ant-design/icons";

const Item = ({item}) => {
    return (
        <div className={styles.item}>
            <img src="/banner-four-img-1.png" alt=""/>
            <div className={styles.overline}>
                <div className={styles.bannerItemText}>
                    <h4>WELCOME TOURIGO</h4>
                    <h1>Explore Uncover Hidden Gems Worldwide</h1>
                    <p>Share the core values and principles that drive your company. Emphasize a commitment
                        to
                        costume.</p>
                    <Button type={`blue`}>Knew me</Button>
                    <div className={styles.socials}>
                        <ul>
                            <li><FacebookOutlined/></li>
                            <li><InstagramOutlined/></li>
                            <li><YoutubeOutlined/></li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Item;