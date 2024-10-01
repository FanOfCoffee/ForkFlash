import React, { createContext, useState, useEffect } from 'react';

const WordContext = createContext();

const WordProvider = ({ children }) => {
    const [words, setWords] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        fetchWords();
    }, []);

    const fetchWords = async () => {
        try {
            const response = await fetch('http://itgirlschool.justmakeit.ru/api/words');
            if (!response.ok) throw new Error('Ошибка при загрузке слов');
            const data = await response.json();
            const transformedData = data.map(({ id, english, transcription, russian, tags }) => ({
                id,
                word: russian,
                pronunciation: transcription,
                k_word: english,
                category: tags,
            }));
            setWords(transformedData);
        } catch (err) {
            setError(err.message);
        } finally {
            setLoading(false);
        }
    };

    const addWord = async (newWord) => {
        try {
            const response = await fetch('http://itgirlschool.justmakeit.ru/api/words/add', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(newWord),
            });
            if (!response.ok) throw new Error('Ошибка при добавлении слова');
            fetchWords(); 
        } catch (err) {
            setError(err.message);
        }
    };

    const updateWord = async (id, updatedWord) => {
        try {
            const response = await fetch(`http://itgirlschool.justmakeit.ru/api/words/${id}/update`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(updatedWord),
            });
            if (!response.ok) throw new Error('Ошибка при обновлении слова');
            fetchWords(); 
        } catch (err) {
            setError(err.message);
        }
    };

    const deleteWord = async (id) => {
        try {
            const response = await fetch(`http://itgirlschool.justmakeit.ru/api/words/${id}/delete`, {
                method: 'DELETE',
            });
            if (!response.ok) throw new Error('Ошибка при удалении слова');
            fetchWords(); 
        } catch (err) {
            setError(err.message);
        }
    };

    return (
        <WordContext.Provider value={{ words, loading, error, addWord, updateWord, deleteWord }}>
            {children}
        </WordContext.Provider>
    );
};

export { WordContext, WordProvider };