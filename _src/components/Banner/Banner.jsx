import React from "react";
import './Banner.scss';

function Banner({image, content}) {
    const bannerStyle = {
        backgroundImage: `url(${image})`,
        backgroundPosition: 'center',
        backgroundSize: 'cover',
    };

    return (
        <div className="banner" style={bannerStyle}>
            <p>{content}</p>
        </div>
    );
}


export default Banner;
