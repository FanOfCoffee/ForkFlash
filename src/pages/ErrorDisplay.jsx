import React from 'react';

export default function ErrorDisplay({ message }) {
    return (
        <div className='error'>
            {message}
        </div>
    );
}