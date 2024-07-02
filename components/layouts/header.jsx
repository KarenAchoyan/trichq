import React, {useEffect, useState} from 'react';
import styles from "../../styles/app.module.css"
import {
    AppstoreOutlined,
    ArrowDownOutlined,
    CloseOutlined,
    CompassOutlined, FacebookOutlined,
    HeatMapOutlined, InstagramOutlined, MailOutlined,
    PhoneOutlined, TwitterOutlined, YoutubeOutlined
} from "@ant-design/icons";
import { Dropdown, Menu, Space, Input } from 'antd';
import Link from "next/link";

const Header = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    const handleMenuClick = (e) => {
        console.log('Click on menu item:', e.key);
        // Handle menu item click if needed
    };

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    return (
        <div className={`header ${styles.header}`}>
            <div className={styles.headerContainer}>
                <div className={styles.headerlogo}>
                    <Link href="/" className={styles.headerlogo}>
                        <img src="/1.png" alt="chi bacum"/>
                    </Link>
                </div>
                <div className={styles.headerSection}>
                    <ul>
                        <li><Link href={'/'}>Home</Link></li>
                        <li>Tours
                            <div className={styles.drbContent}>
                                <ul>
                                    <li>qaylarshav</li>
                                    <li>qaylarshav</li>
                                    <li>qaylarshav</li>
                                    <li>qaylarshav</li>
                                </ul>
                            </div>
                        </li>
                        <li>
                            <Link href={`/blogs`}>
                                Blog
                            </Link>
                        </li>
                        <li>
                            <Link href={`/gallery`}>
                                Gallery
                            </Link>
                        </li>
                        <li>
                            <Link href={`/contact`}>
                                Contact
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
            <div className={styles.headerEndLanguage}>
                <ul>
                    <li>ENG <span><ArrowDownOutlined/></span>
                        <div className={styles.drb}>
                            <ul>
                                <li>ARM</li>
                                <li>RU</li>
                            </ul>
                        </div>
                    </li>
                </ul>
            </div>
            <div className={styles.headerIcon}>

                <div onClick={toggleMenu}>
                    <Space>
                        <AppstoreOutlined />
                    </Space>
                </div>

                {/* Menu */}
                <div className={`${styles.menu} ${menuOpen ? styles.menuOpen : ''}`}>
                    <div className={styles.closeButton} onClick={toggleMenu}>
                        <div className={styles.closeButtons}>
                            <div className={styles.closeButtonLogo}>
                                <img src="/1.png" alt=""/>
                            </div>
                            <div className={styles.close}>
                                <CloseOutlined />
                            </div>
                        </div>
                        <div className={styles.bottom}></div>
                    </div>
                  <div>
                      <div className={styles.closeText}>
                          <h4>About Tourigo</h4>
                      </div>
                      <div className={styles.text}>
                          <p>Explore stunning destinations and create immersive travel experiences that inspire wanderlust and captivate
                          your audience from the start</p>
                      </div>

                      <div className={styles.closeText}>
                          <h4>Contact Info</h4>
                      </div>
                      <div className={styles.closeIcon}>
                          <h3> <CompassOutlined /></h3>
                          <span>1426 Center StreetBend,</span>
                      </div>
                      <div className={styles.closeIcon}>
                          <h3><PhoneOutlined /></h3>
                          <span>+374 44 60 66 76</span>
                      </div>
                      <div className={styles.closeIcon}>
                          <h3 className={styles.mail}><MailOutlined /></h3>
                          <span>support@tourigo.com</span>
                      </div>

                      <div className={styles.acount}>
                          <h4>Subscribe & Follow</h4>
                      </div>
                      <div className={styles.acounts}>
                          <span><FacebookOutlined /></span>
                          <span><InstagramOutlined /></span>
                          <span><YoutubeOutlined /></span>
                          <span><TwitterOutlined /></span>
                      </div>
                        <div className={styles.div}>

                        </div>
                  </div>
                </div>
            </div>
        </div>
    );
};

export default Header;