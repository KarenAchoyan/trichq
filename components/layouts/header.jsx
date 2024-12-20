import React, {useEffect, useState} from 'react';
import styles from "../../styles/app.module.css"
import {
    AppstoreOutlined,
    CompassOutlined,
    FacebookOutlined,
    InstagramOutlined,
    MailOutlined,
    MenuOutlined,
    PhoneOutlined,
    TwitterOutlined,
    YoutubeOutlined
} from "@ant-design/icons";
import {Dropdown, Menu, Space, Input} from 'antd';
import Link from "next/link";
import {Button, Drawer} from 'antd';
import {categories, t} from "../../utils/utils";
import LanguageSwitcher from "./languageSwitcher";
import {useRouter} from "next/dist/client/compat/router";
import {useDispatch, useSelector} from "react-redux";
import {getContact} from "../../store/about/actions";

const Header = () => {
    const contact = useSelector(state => state.contact.contact)

    const router = useRouter();
    const {locale} = router;
    const [open, setOpen] = useState(false);
    const [mobileMenu, setMobileMenu] = useState(false);

    const [subMenuVisible, setSubMenuVisible] = useState(false);

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getContact.request());
    }, [dispatch])


    useEffect(() => {
        console.log(contact)
    }, [contact]);

    const showDrawer = () => {
        setOpen(!open);
    };
    const showMobileMenu = () => {
        setMobileMenu(!mobileMenu);
    };

    const toggleSubMenu = () => {
        setSubMenuVisible(!subMenuVisible);
    };
    return (<div className={`header ${styles.header}`}>
        <div className={styles.headerContainer}>
            <div className={styles.headerlogo}>
                <Link href="/" className={styles.headerlogo}>
                    <img src="/1.png"/>
                </Link>
            </div>
            <div className={styles.headerSection}>
                <ul>
                    <li><Link href={'/'}>{t('home')}</Link></li>
                    <li>{t('tours')}
                        <div className={styles.drbContent}>
                            <ul>
                                <li><Link href={'/tours/category/1'}>{t("ascents")}</Link></li>
                                <li><Link href={'/tours/category/2'}>{t('hiking')}</Link></li>
                                <li><Link href={'/tours/category/3'}>{t('arch_tourism')}</Link></li>
                            </ul>
                        </div>
                    </li>
                    <li>
                        <Link href={`/blogs`}>
                            {t('blog')}
                        </Link>
                    </li>
                    <li>
                        <Link href={`/gallery`}>
                            {t('gallery')}
                        </Link>
                    </li>
                    <li>
                        <Link href={`/contact`}>
                            {t('contact_us')}
                        </Link>
                    </li>
                </ul>
            </div>
        </div>
        <div className={styles.socials}>
            <ul>
                <li>
                    <a href={contact?.facebook}>
                        <FacebookOutlined/>
                    </a>
                </li>
                <li>
                    <a href={contact?.facebook}>
                        <InstagramOutlined/>
                    </a>
                </li>
                <li>
                    <a href={contact?.youtube}>
                        <YoutubeOutlined/>
                    </a>
                </li>
            </ul>
        </div>
        <LanguageSwitcher/>

        <div className={styles.headerIcon}>
            <div onClick={showDrawer}>
                <Space>
                    <AppstoreOutlined/>
                </Space>
            </div>
            <div className={styles.mobileMenu} onClick={showMobileMenu}>
                <Space>
                    <MenuOutlined/>
                </Space>
            </div>
            <Drawer
                title={t('Drawer_with_extra_actions')}
                width={500}
                onClose={showDrawer}
                open={open}
            >
                <div>
                    <div className={styles.closeText}>
                        <h4>{t('About_Tourigo')}</h4>
                    </div>
                    <div className={styles.text}>
                        <p>{t('explorer')}</p>
                    </div>
                    <div className={styles.closeText}>
                        <h4>{t('Contact_Info')}</h4>
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
                        <h4>{t('Subscribe_Follow')}</h4>
                    </div>
                    <div className={styles.acounts}>
                            <span>
                                <a href={contact?.facebook}>
                                    <FacebookOutlined/>
                                </a>
                            </span>
                        <span>
                               <a href={contact?.facebook}>
                                   <InstagramOutlined/>
                               </a>
                            </span>
                        <span>
                               <a href={contact?.youtube}>
                                   <YoutubeOutlined/>
                               </a>
                            </span>
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
                        {categories.map((category, index) => (<div key={`category-${index}`} className='category'>
                            <Menu.Item onClick={category.drb ? toggleSubMenu : null}
                                       key={`category-item-${index}`}>
                                <Link href={category?.path}>
                                    {(locale === 'en') ? category.label_en : (locale === 'ru') ? category.label_ru : category.label}
                                </Link>
                            </Menu.Item>
                            {category.drb && (<div className='sub-menu'>
                                {subMenuVisible && (<Menu mode="vertical">
                                    {category.drb.map((item, index) => (
                                        <div key={`item-${index}`} className='sub-category'>
                                            <Menu.Item key={`sub-item-${index}`}>
                                                <Link href={'/tours/category/' + item.id}>
                                                    {(locale === 'en') ? item.label_en : (locale === 'ru') ? item.label_ru : item.label}
                                                </Link>
                                            </Menu.Item>
                                        </div>))}
                                </Menu>)}
                            </div>)}
                        </div>))}
                    </Menu>
                </div>
            </Drawer>
        </div>
    </div>);
};

export default Header;