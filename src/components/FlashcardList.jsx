import React, { useState, useContext } from 'react';
import { WordContext } from '../components/WordContext'; // Импортируйте контекст
import Flashcard from './Flashcard';

export default function FlashcardList() {
    const { words, loading, error } = useContext(WordContext); // Получите слова из контекста
    const [count, setCount] = useState(0);

    const handleClick = () => {
        setCount(count + 1);
    };

    if (loading) return <p>Загрузка...</p>; // Показать индикатор загрузки
    if (error) return <div className='error'>{error}</div>; // Показать ошибку

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



