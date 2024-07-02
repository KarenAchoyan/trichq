import React, {useEffect, useState} from 'react';
import Header from "./header";
import Footer from "./footer";
import AnimationHeader from "./animationHeader";


const App = ({children}) => {
    const [showAnimationHeader, setShowAnimationHeader] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY >= 500) {
                setShowAnimationHeader(true);
            } else {
                setShowAnimationHeader(false);
            }
        };

        window.addEventListener('scroll', handleScroll);

        // Clean up the event listener on component unmount
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);
    return (
        <>
            <Header/>
            <AnimationHeader show={showAnimationHeader}/>
            {children}
            <Footer/>
        </>
    );
};

export default App;