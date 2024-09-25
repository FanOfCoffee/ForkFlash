import React, { useState, useRef, useEffect } from 'react';
import '../assets/styles/Flashcard.css';

export default function Flashcard({ flashcard, handleClick }) {
    const [flip, setFlip] = useState(false);
    
    const frontEl = useRef();
    const backEl = useRef();
    const buttonRef = useRef(null);

    useEffect(() => {
        buttonRef.current.focus();
    }, []);

    return (
        <div 
            className={`card ${flip ? 'flip' : ''}`}
            onClick={() => setFlip(!flip)}>
            <div className='front' ref={frontEl}>
                {flashcard.word} 
                <button ref={buttonRef} onClick={handleClick} className='page-btn'>Перевод</button>
            </div>
            <div className='back' ref={backEl}>
                <div className='f-pronunciation'>
                    {flashcard.pronunciation} 
                </div>
                {flashcard.k_word}
            </div>
        </div>
    );
}
