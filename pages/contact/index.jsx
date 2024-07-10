import React from 'react';

import ContactUs from "../../components/contactUs/contactUs";
import ContactWithUs from "../../components/contactWithUs/contactWithUs";
import DetailsBanner from "../../components/detailsBanner/detailsBanner";
import App from "../../components/layouts/app";
import {t} from "../../utils/utils";

const Index = () => {
    return (
        <>
            <App>
                <DetailsBanner title={t("contact_us")} content={t('contact_us')}/>
                <ContactUs/>
                <ContactWithUs/>
            </App>

        </>
    );
};

export default Index;