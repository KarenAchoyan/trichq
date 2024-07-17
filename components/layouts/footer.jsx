import React from 'react';
import  styles from "../../styles/app.module.css"
import Link from "next/link";
import {t} from "../../utils/utils";
const Footer = () => {
    return (
        <div className={styles.footer}>
            <div className={styles.footerContainer}>
                <div className={styles.footerLogo}>
                    <div className={styles.footerImg}>
                        <img src="/1.png"/>
                    </div>
                    <div className={styles.footerText}>
                        <p>{t('welcome_flight')}</p>
                    </div>
                </div>
                <div className={styles.pagesSection}>
                    <h4>{t("pages")}</h4>
                    <ul>
                        <li> {t("tours")}</li>
                        <li>
                            <Link className={styles.blog} href={`/blogs`}>
                                {t('blog')}
                            </Link>
                        </li>
                        <li>
                            <Link className={styles.blog} href={`/gallery`}>
                                {t('gallery')}
                            </Link>
                        </li>
                        <li>
                            <Link className={styles.blog} href={`/contact`}>
                                {t('contact')}
                            </Link>
                        </li>
                    </ul>
                </div>
                <div className={styles.pagesSection}>
                    <h4>{t("tours")}</h4>
                    <ul>
                        <li>{t('ascents')}</li>
                        <li>{t('hiking')}</li>
                        <li>{t('arch_tourism')}</li>
                    </ul>
                </div>
            </div>
            <div className={styles.autor}>
                <div className={styles.autorText}>
                    <p>{t('copyright')}</p>
                </div>
                <div className={styles.autorItem}>
                    <div className={styles.footerItem}>
                        <a href="https://geeklab.am" className={styles.footerItem}>
                        <img
                            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRwHO4P97LlRyQhG1B-u7uFwi3-GYgiu_-Bcg&s"
                            alt='sss'/>
                        </a>
                    </div>
                    <div className={styles.footerItemText}>

                        <p> {t('side')} </p>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default Footer;