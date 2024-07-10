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
        label: 'Home',
        name: "Գլխավոր",
        path: "/"
    },
    {
        id: 2,
        label: 'Pages',
        icon: <CaretDownOutlined/>,
        name: "Մեր Մասին",
        path: "#",
        drb: [
            {id: 1, label: "Գործունեություն", path: "/activity"},
            {id: 2, label: "Աշխատակազմ",path: '/stuff'},
            {id: 3, label: "Պատմություն",path: '/history'},
            {
                id: 4, label: "Խորհուրդներ", path:"", drb: [
                    {label:"Մանկավարժական",path:"/pedagogic"},
                    {label:"Ծնողական",path: "/parentalAdvice"},
                    {label:"Աշակերտական",path: "/students"},
                ]
            },
        ]
    },
    {
        id: 5,
        label: 'Events',
        icon: <CaretDownOutlined/>,
        name: "Միջոցառումներ",
        path: "events"
    },
    {
        id: 6,
        label: 'Events',
        icon: <CaretDownOutlined/>,
        name: "Ձեռքբերումներ",
        path: "/achievements"
    },
    {
        id: 7,
        label: 'News',
        path: "news",
        icon: <CaretDownOutlined/>,
        name: "Նորություններ"
    },
    {
        id: 8,
        label: 'Teachers',
        path: "/graduate",
        icon: <CaretDownOutlined/>,
        name: "Շրջանավարտներ"
    },
    {
        id: 9,
        label: 'Gallery',
        path: "/materials",
        icon: <CaretDownOutlined/>,
        name: "Նյութեր"
    },
    {
        id: 10,
        label: 'Contact',
        path: "contact",
        icon: <CaretDownOutlined/>,
        name: "Կապ"
    }
]
export const formatDate = (dateString) => {
    const date = new Date(dateString);
    const day = String(date.getDate()).padStart(2, '0');
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const year = date.getFullYear();

    return `${month}/${day}/${year}`;
};