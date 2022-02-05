import React from 'react'
import './Preloader.css'

/**
 * Preloader - компонент с прелоадером.
 */
const Preloader = () => {
    return (
        <div className="preloader">
            <div className="preloader__container">
                <span className="preloader__round"></span>
            </div>
        </div>
    )
};

export default Preloader
