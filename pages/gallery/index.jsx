import React from 'react';
import DetailsBanner from "../../components/detailsBanner/detailsBanner";
import App from "../../components/layouts/app";
import Gallery from "../../components/gallery/gallery";

const Index = () => {
    return (
        <App>
            <DetailsBanner title={'gallery'}/>
            <Gallery/>
        </App>
    );
};

export default Index;