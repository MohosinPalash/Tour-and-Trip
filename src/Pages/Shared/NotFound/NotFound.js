import React from 'react';
import './NotFound.css'
import error from '../../../images/basic/404.png'
const NotFound = () => {
    return (
        <div>
            <img className="error-image" src={error} />
        </div>
    );
};

export default NotFound;