import React from 'react';
import  styles from "../../styles/contact.module.css"
import {MailOutlined, PhoneOutlined} from "@ant-design/icons";
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
                        <h5>Call Us On</h5>
                    </div>
                    <div className={styles.number}>
                        <span className={styles.span}>+374 44 33 22</span>
                    </div>
                    <div className={styles.numbers}>
                        <span className={styles.span}>+374 44 33 22</span>
                    </div>
                </div>
                <div className={styles.contactItem}>
                    <div className={styles.phoneIcon}>
                        <div className={styles.phoneBox}>
                            <MailOutlined />
                        </div>
                    </div>
                    <div className={styles.call}>
                        <h5>Email Us </h5>
                    </div>
                    <div className={styles.number}>
                        <span className={styles.span}>support@tourigo.com</span>
                    </div>
                    <div className={styles.numbers}>
                        <span className={styles.span}>support@tourigo.com</span>
                    </div>
                </div>
                <div className={styles.contactItem}>
                    <div className={styles.phoneIcon}>
                        <div className={styles.phoneBox}>
                            <PhoneOutlined/>
                        </div>
                    </div>
                    <div className={styles.call}>
                        <h5>Our Location</h5>
                    </div>
                    <div className={styles.number}>
                        <span className={styles.span}>1426 Center street</span>
                    </div>
                    <div className={styles.numbers}>
                        <span className={styles.span}>97702,California,USA</span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ContactUs;