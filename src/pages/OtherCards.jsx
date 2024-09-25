import React, { useContext } from 'react';
import '../assets/styles/Buttons.css';
import FlashCardSlider from '../components/FlashCardSlider';
import { WordContext } from '../components/WordContext';

export default function OtherCards() {
    const { words, loading, error } = useContext(WordContext);

    if (loading) return <div>Loading...</div>;
    if (error) return <div>Error: {error}</div>;

    return (
        <>
            <FlashCardSlider flashcards={words} />
        </>
    );
}