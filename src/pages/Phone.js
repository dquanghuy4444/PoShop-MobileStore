import React from 'react';
import PanelCarouselComp from '../components/PanelCarouselComp';

const items = [
    process.env.PUBLIC_URL + "images/carousel/637406202146707827_F-C1_1200x300.jpg",
    process.env.PUBLIC_URL + "images/carousel/637407383764082449_F-C1_1200x300.jpg",
    process.env.PUBLIC_URL + "images/carousel/637407732806654809_C1-1200x300.jpg"
  ];

function Phone() {
    return (
        <div>
            <PanelCarouselComp items={ items }></PanelCarouselComp>
        </div>
    );
}

export default Phone;