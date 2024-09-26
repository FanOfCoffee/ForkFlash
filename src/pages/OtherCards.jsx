import React, { useContext } from 'react';
import '../assets/styles/Buttons.css';
import FlashCardSlider from '../components/FlashCardSlider';
import { WordContext } from '../components/WordContext';
import LoadingIndicator from '../components/LoadingIndicator';

export default function OtherCards() {
    const { words, loading, error } = useContext(WordContext);

    if (loading) return <LoadingIndicator/>;
    if (error) return <div>Error: {error}</div>;

    return (
        <>
            <FlashCardSlider flashcards={words} />
        </>
    );
}