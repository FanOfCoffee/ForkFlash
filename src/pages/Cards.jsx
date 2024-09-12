import React, {useState} from 'react'
import '../assets/styles/FlashcardApp.css';
import '../assets/styles/Buttons.css'
import FlashcardList from '../components/FlashcardList';

function Cards() {
    const [flashcards, setFlashcards] = useState(SAMPLE_FLASHCARDS)
    return (
      <div className='container'>
      <FlashcardList flashcards={flashcards} />
      </div>
    )
}

export default Cards

const SAMPLE_FLASHCARDS = [
    {
      id: 1,
      word: 'Hello',
      pronunciation: '[annyeonghaseyo]',
      k_word: '안녕하세요'
    },
    {
      id: 2,
      word: 'Please',
      pronunciation: '[juseyo]',
      k_word: '주세요'
    },
    {
      id: 3,
      word: 'Sorry',
      pronunciation: '[joesonghamnida]',
      k_word: '죄송합니다'
    },
    {
      id: 4,
      word: 'Thank You',
      pronunciation: '[gamsahamnida]',
      k_word: '감사합니다'
    }
  ]