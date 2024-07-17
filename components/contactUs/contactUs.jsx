import React from 'react';
import styles from "../../styles/contact.module.css"
import {MailOutlined, PhoneOutlined, PushpinOutlined} from "@ant-design/icons";
import {t} from "../../utils/utils";

const ContactUs = () => {
    return (
        <div className={styles.cotactContainer}>
            <div className={styles.item}>
                <div className={styles.contactItem}>
                    <div className={styles.phoneIcon}>
                        <div className={styles.phoneBox}>
                            <PhoneOutlined/>
                        </div>
                    </div>
                    <div className={styles.call}>
                        <h5>{t("call_us_on")}</h5>
                    </div>
                    <div className={styles.number}>
                        <span className={styles.span}><a href="tel:+37477661699">+374 44 33 22 22</a></span>
                    </div>
                </div>
                <div className={styles.contactItem}>
                    <div className={styles.phoneIcon}>
                        <div className={styles.phoneBox}>
                            <MailOutlined/>
                        </div>
                    </div>
                    <div className={styles.call}>
                        <h5>{t("email_us")} </h5>
                    </div>
                    <div className={styles.number}>
                        <span className={styles.span}>
                            <a
                                href="mailto:support@tourigo.com"
                                className={styles.span}
                            >
                                support@tourigo.com
                            </a>
                        </span>
                    </div>
                </div>
                <div className={styles.contactItem}>
                    <div className={styles.phoneIcon}>
                        <div className={styles.phoneBox}>
                            <PushpinOutlined/>
                        </div>
                    </div>
                    <div className={styles.call}>
                        <h5>{t("our_location")}</h5>
                    </div>
                    <div className={styles.number}>
                           <span className={styles.span}>
                               <a
                                   href="https://www.google.com/maps/search/?api=1&query=1426+Center+Street"
                                   target="_blank"
                                   rel="noopener noreferrer"
                                   className={styles.span}
                               >
                            1426 Center Street
                        </a></span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ContactUs;