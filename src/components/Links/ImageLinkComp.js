import React from 'react';
import { Link } from 'react-router-dom';
import './ImageLinkComp.css';

const ImageLinkComp = ({ to , src }) => {
    return (
        <div className="mt-3 mb-2 ">
            <Link to={ to }>
                <img src={ src } className="img-link"></img>
            </Link>
        </div>

    );
};

export default ImageLinkComp;