import React, { useState, useContext } from 'react';
import { WordContext } from '../components/WordContext';
import Flashcard from './Flashcard';
import LoadingIndicator from './LoadingIndicator';

export default function FlashcardList() {
    const { words, loading, error } = useContext(WordContext); 
    const [count, setCount] = useState(0);

    const handleClick = () => {
        setCount(count + 1);
    };

    if (loading) return <LoadingIndicator/>; 
    if (error) return <div className='error'>{error}</div>;
    return (
        <>
            <div className='card-grid'>
                {words.map(flashcard => (
                    <Flashcard handleClick={handleClick} flashcard={flashcard} key={flashcard.id} />
                ))}
            </div>
            <div className='counter'>
                Выучено {count}
            </div>
        </>
    );
}



