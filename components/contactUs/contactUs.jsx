import React, {useEffect} from 'react';
import styles from "../../styles/contact.module.css"
import {MailOutlined, PhoneOutlined, PushpinOutlined} from "@ant-design/icons";
import {t} from "../../utils/utils";
import {useDispatch, useSelector} from "react-redux";
import {getContact} from "../../store/about/actions";

const ContactUs = () => {
    const dispatch = useDispatch();
    const contact = useSelector((state => state.contact.contact));
    useEffect(()=>{
        dispatch(getContact.request())
    },[dispatch])
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
                        <span className={styles.span}><a href={"tel:"+contact?.phone}>{contact?.phone}</a></span>
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
                                href={"mailto:"+contact?.email}
                                className={styles.span}
                            >
                                {contact?.email}
                            </a>
                        </span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ContactUs;