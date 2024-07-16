import React, {useEffect} from 'react';
import styles from "../../styles/loader.module.css"
const Loader = ({children, loader = false}) => {
    function Logo(){
        return(
            <div className={styles.loader}>
                <img src="/1.png" alt=""/>
            </div>
        )
    }

    useEffect(()=>{
        console.log(loader)
    },[loader])

    return (
        <div>
            {loader ?
                children
            : <Logo/>}
        </div>
    );
};

export default Loader;