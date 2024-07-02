import React, {useEffect} from 'react';
import App from "../../components/layouts/app";
import DetalisTour from "../../components/tours/detalisTour";
import {useRouter} from "next/router";
import {useDispatch, useSelector} from "react-redux";
import {getTour} from "../../store/tour/actions";

const Index = () => {
    const router = useRouter();
    const {name} = router.query;
    const dispatch = useDispatch();
    const tour = useSelector((state) => state.tour?.selectedTour?.data);

    useEffect(() => {
        dispatch(getTour.request({id: name}));
    }, [dispatch, name])


    return (
        <>
            <App>
                <DetalisTour tour={tour}/>
            </App>
        </>
    );
};

export default Index;