import React from 'react';
import '../assets/styles/LoadingIndicator.css';

const LoadingIndicator = () => {
    return (
        <div className="loading-indicator">
            <div className="loader"></div>
            <p>Загрузка...</p>
        </div>
    );
};

export default LoadingIndicator;