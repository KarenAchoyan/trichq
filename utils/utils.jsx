import {
    CaretDownOutlined,
    FacebookOutlined,
    InstagramOutlined,

    PhoneOutlined
} from "@ant-design/icons/lib/icons";
import {useIntl} from "react-intl";

export function truncateContent(content, maxLength) {
    if (content?.length <= maxLength) {
        return content;
    } else {
        // Truncate content and add "..." at the end
        return content?.substring(0, maxLength) + "...";
    }
}
export function t(key) {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const intl = useIntl();

    const title = intl.formatMessage({id: key})
    return title;
}
export const languages = [
    {id: 1, name: "EN", fullName: "English", value: 'en', flag: "/english.webp"},
    {id: 2, name: "RU", fullName: "Russian", value: 'ru', flag: "/ru.png"},
    {id: 3, name: "Հայ", fullName: "Հայերեն", value: 'hy', flag: "/amFlag.png"},
];

export const categories = [
    {
        id: 1,
        label: 'Գլխավոր',
        label_en:"Home",
        label_ru:"Главный",
        path: "/"
    },
    {
        id: 2,
        label: 'Տուրեր',
        label_en:"Tours",
        icon: <CaretDownOutlined/>,
        label_ru:"Туры",
        path: "#",
        drb: [
            {id: 1, label: "Վերելքներ", label_ru:"Восхождения", label_en: "Ascents"},
            {id: 2, label: "Քայլարշավ", label_ru:"Поход", label_en:  'Hiking' },
            {id: 3, label: "Արկածային տուրիզմ",label_ru:"Приключенческий туризм",label_en: 'Adventure tourism'},
        ]
    },
    {
        id: 5,
        label: 'Բլոգ',
        label_en: 'Blog',
        label_ru: 'Блог',
        icon: <CaretDownOutlined/>,
        name: "Blog",
        path: "/blogs"
    },
    {
        id: 6,
        label: 'Պատկերասրահ',
        label_en: 'Gallery',
        label_ru: 'Галерея',
        icon: <CaretDownOutlined/>,
        path: "/gallery"
    },
    {
        id: 7,
        label: 'Հետադարձ կապ',
        label_en: 'Contact us',
        label_ru: 'Связь с нами',
        path: "/contact",
        icon: <CaretDownOutlined/>,
    },
]
export const formatDate = (dateString) => {
    const date = new Date(dateString);
    const day = String(date.getDate()).padStart(2, '0');
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const year = date.getFullYear();

    return `${month}/${day}/${year}`;
};