import React, {useEffect, useState} from 'react';
import styles from "../../styles/app.module.css";
import {ArrowDownOutlined} from "@ant-design/icons";
import {useRouter} from "next/dist/client/compat/router";
import {languages} from "../../utils/utils";
import {Image} from "antd";

const LanguageSwitcher = () => {
    const router = useRouter();
    const [currentLanguage, setCurrentLanguage] = useState('Հայ')
    const [currentFlag, setCurrentFlag] = useState('/amFlag.png')

    const [langs, setLangs] = useState([]);
    const {locale} = router;

    useEffect(() => {
        const language = languages.find(x => x.value === locale);
        setCurrentLanguage(language.name)
        setCurrentFlag(language.flag)
    }, [locale, router]);
    
    useEffect(() => {
        setLangs(languages.filter(x => x.name !== currentLanguage))
    }, [currentLanguage])
    
    const changeLanguage = (newLang, item) => {
        setCurrentLanguage(item.name)
        setCurrentFlag(item.flag)
        const l = JSON.stringify({name: item.name, flag: item.flag})
        localStorage.setItem('lang', l);
        const scrollY = window.scrollY; // Save the current scroll position
        router.push(router.asPath, undefined, {locale: newLang}).then(() => {
            window.scrollTo(0, scrollY);
        });
    };

    return (
        <div className={styles.headerEndLanguage}>
            <ul>
                <li>{currentLanguage} <span><ArrowDownOutlined/></span>
                    <div className={styles.drb}>
                        <ul>
                            {langs.map((item) => (
                                <li onClick={() => changeLanguage(item.value, item)} key={item.id}>
                                    <Image preview={false} src={item.flag} alt=""/>
                                </li>
                            ))}
                        </ul>
                    </div>
                </li>
            </ul>
        </div>
    );
};

export default LanguageSwitcher;