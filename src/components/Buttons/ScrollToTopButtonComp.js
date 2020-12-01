import React, { useEffect, useState } from 'react';
import "./ScrollToTopButtonComp.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowAltCircleUp } from '@fortawesome/free-solid-svg-icons';
import { useWindowScroll } from "react-use";

function ScrollToTopButtonComp() {

    const { y : pageYOffset } = useWindowScroll();
    const [visible , setVisible] = useState(false);

    useEffect(() =>{
        if(pageYOffset > 400){
            setVisible(true);
        } else{
            setVisible(false);
        }
    },[pageYOffset])

    const scrollToTop = () => window.scrollTo({ top : 0 , behavior : "smooth" });

    if(!visible){
        return (<div></div>);
    }

    return (
        <div className="scroll-to-top" onClick={ scrollToTop }>
            <span>
                <FontAwesomeIcon icon={ faArrowAltCircleUp } size="lg" ></FontAwesomeIcon>
            </span>
        </div>
    );
}

export default ScrollToTopButtonComp;
