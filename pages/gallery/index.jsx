import React from 'react';
import DetailsBanner from "../../components/detailsBanner/detailsBanner";
import App from "../../components/layouts/app";
import Gallery from "../../components/gallery/gallery";
import {t} from "../../utils/utils";

const Index = () => {
    return (
        <App>
            <DetailsBanner title={t("gallery")} content={t("gallery")}/>
            <Gallery/>
        </App>
    );
};

export default Index;