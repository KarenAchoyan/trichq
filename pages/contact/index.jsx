import React from 'react';

import ContactUs from "../../components/contactUs/contactUs";
import ContactWithUs from "../../components/contactWithUs/contactWithUs";
import DetailsBanner from "../../components/detailsBanner/detailsBanner";
import App from "../../components/layouts/app";

const Index = () => {
    return (
        <>
            <App>
                <DetailsBanner title={"Contact Us"}/>
                <ContactUs/>
                <ContactWithUs/>
            </App>

        </>
    );
};

export default Index;