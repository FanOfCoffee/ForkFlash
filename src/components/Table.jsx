import React, { useContext }  from 'react'
import '../assets/styles/Table.css'
import {BsFillTrashFill, BsFillPencilFill} from 'react-icons/bs'
import { WordContext } from './WordContext';

export default function Table({openPopUp, setSelectedWord}) {
    const { words, deleteWord } = useContext(WordContext);

    const handleEdit = (word) => {
        setSelectedWord(word);
        openPopUp(true);
    };

    return (

        <div className='table-wrapper'>
            <table className='table'>
                <thead>
                    <tr>
                        <th >English</th>
                        <th >Transcription</th>
                        <th >Korean</th>
                        <th >Category</th>
                        <th >Actions</th>
                    </tr>
                </thead>
                <tbody>
                {words.map((word) => (
                    <tr key={word.id}>
                        <td>{word.word}</td>
                        <td>{word.pronunciation}</td>
                        <td>{word.k_word}</td>
                        <td>{word.category}</td>
                        <td>
                            <BsFillPencilFill className='change-btn' onClick={() => handleEdit(word)}/>
                            <BsFillTrashFill className='delete-btn' onClick={() => deleteWord(word.id)}/>
                        </td>
                    </tr>
                ))}
                </tbody>
            </table>
        </div>
    )
}
