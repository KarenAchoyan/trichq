import React, {useEffect, useState} from 'react';
import styles from "../../styles/app.module.css";
import {ArrowDownOutlined} from "@ant-design/icons";
import {useRouter} from "next/dist/client/compat/router";
import {languages} from "../../utils/utils";

const LanguageSwitcher = () => {
    const router = useRouter();
    const [currentLanguage, setCurrentLanguage] = useState('Հայ')
    const [langs, setLangs] = useState([]);
    const {locale} = router;

    useEffect(() => {
        const language = languages.find(x => x.value === locale);
        setCurrentLanguage(language.name)
    }, [locale, router]);
    
    useEffect(() => {
        setLangs(languages.filter(x => x.name !== currentLanguage))
    }, [currentLanguage])
    
    const changeLanguage = (newLang, item) => {
        setCurrentLanguage(item.name)
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
                                <li onClick={() => changeLanguage(item.value, item)} key={item.id}>{item.name}</li>
                            ))}
                        </ul>
                    </div>
                </li>
            </ul>
        </div>
    );
};

export default LanguageSwitcher;