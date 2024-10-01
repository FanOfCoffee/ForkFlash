import React, { useContext, useState } from 'react';
import { WordContext } from '../context/WordContext';
import Table from '../components/Table';
import PopUp from '../components/PopUp';
import LoadingIndicator from '../components/LoadingIndicator';

export default function Home() {
    const { words, loading, error, addWord, updateWord } = useContext(WordContext);
    const [isPopUpOpen, setPopUpOpen] = useState(false);
    const [selectedWord, setSelectedWord] = useState(null);

    const handleAddOrUpdate = (word) => {
        if (selectedWord) {
            updateWord(selectedWord.id, word);
        } else {
            addWord(word);
        }
        setPopUpOpen(false);
        setSelectedWord(null); 
    };

    return (
        <div>
            {loading && <LoadingIndicator />}
            {error && <div className='error'>{error}</div>}

            

            <Table words={words} openPopUp={setPopUpOpen} setSelectedWord={setSelectedWord} />
            
            {isPopUpOpen && (
                <PopUp closePopUp={() => setPopUpOpen(false)} onSubmit={handleAddOrUpdate} defaultValue={selectedWord} />
            )}
            <div className='p-c'>
                <button className='add-btn' onClick={() => setPopUpOpen(true)}>Создать слово</button>
            </div>
        </div>
    );
}

