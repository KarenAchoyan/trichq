import React, {useEffect, useState} from 'react';
import styles from "../../styles/app.module.css"
import {
    AppstoreOutlined,
    ArrowDownOutlined,
    CloseOutlined,
    CompassOutlined, FacebookOutlined,
    HeatMapOutlined, InstagramOutlined, MailOutlined, MenuOutlined,
    PhoneOutlined, TwitterOutlined, YoutubeOutlined
} from "@ant-design/icons";
import {Dropdown, Menu, Space, Input} from 'antd';
import Link from "next/link";
import {Button, Drawer} from 'antd';
import {categories} from "../../utils/utils";

const Header = () => {

    const [open, setOpen] = useState(false);
    const [mobileMenu, setMobileMenu] = useState(false);

    const [subMenuVisible, setSubMenuVisible] = useState(false);
    const showDrawer = () => {
        setOpen(!open);
    };
    const showMobileMenu = () => {
        setMobileMenu(!mobileMenu);
    };

    const toggleSubMenu = () => {
        setSubMenuVisible(!subMenuVisible);
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
                <div onClick={showDrawer}>
                    <Space>
                        <AppstoreOutlined/>
                    </Space>
                </div>
                <div className={styles.mobileMenu} onClick={showMobileMenu}>
                    <Space>
                        <MenuOutlined />
                    </Space>
                </div>
                <Drawer
                    title="Drawer with extra actions"
                    width={500}
                    onClose={showDrawer}
                    open={open}
                >
                    <div>
                        <div className={styles.closeText}>
                            <h4>About Tourigo</h4>
                        </div>
                        <div className={styles.text}>
                            <p>Explore stunning destinations and create immersive travel experiences that inspire
                                wanderlust and captivate
                                your audience from the start</p>
                        </div>
                        <div className={styles.closeText}>
                            <h4>Contact Info</h4>
                        </div>
                        <div className={styles.closeIcon}>
                            <h3><CompassOutlined/></h3>
                            <span>1426 Center StreetBend,</span>
                        </div>
                        <div className={styles.closeIcon}>
                            <h3><PhoneOutlined/></h3>
                            <span>+374 44 60 66 76</span>
                        </div>
                        <div className={styles.closeIcon}>
                            <h3 className={styles.mail}><MailOutlined/></h3>
                            <span>support@tourigo.com</span>
                        </div>

                        <div className={styles.acount}>
                            <h4>Subscribe & Follow</h4>
                        </div>
                        <div className={styles.acounts}>
                            <span><FacebookOutlined/></span>
                            <span><InstagramOutlined/></span>
                            <span><YoutubeOutlined/></span>
                            <span><TwitterOutlined/></span>
                        </div>
                        <div className={styles.div}>

                        </div>
                    </div>
                </Drawer>
                <Drawer
                    title="Menu"
                    width={500}
                    onClose={showMobileMenu}
                    open={mobileMenu}
                >
                    <div>
                        <Menu mode="inline" className='main-menu'>
                            {categories.map((category, index) => (
                                <div key={`category-${index}`} className='category'>
                                    <Menu.Item onClick={category.drb ? toggleSubMenu : null} key={`category-item-${index}`}>
                                        <Link href={category?.path}>
                                            {category.name}
                                        </Link>
                                    </Menu.Item>
                                    {category.drb && (
                                        <div className='sub-menu'>
                                            {subMenuVisible && (
                                                <Menu mode="vertical">
                                                    {category.drb.map((item, index) => (
                                                        <div key={`item-${index}`} className='sub-category'>
                                                            <Menu.Item  key={`sub-item-${index}`}>
                                                                <Link href={item?.path}> {item.label}</Link>
                                                            </Menu.Item>
                                                        </div>
                                                    ))}
                                                </Menu>
                                            )}
                                        </div>
                                    )}
                                </div>
                            ))}
                        </Menu>
                    </div>
                </Drawer>
            </div>
        </div>
    );
};

export default Header;