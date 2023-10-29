import React, { useEffect, useState } from 'react';
import NotesList from './components/NotesList';
import {nanoid} from 'nanoid';
import Search from './components/Search';
import Header from './components/Header';

const App = () => {

  const [notes,setNotes]=useState(()=>{return JSON.parse(localStorage.getItem('react-notes-app-data'))||[]});

  const [searchText,setSearchText]=useState('');

  const [darkMode,setDarkMode]=useState(false);

	useEffect(() => {
		localStorage.setItem(
			'react-notes-app-data',
			JSON.stringify(notes)
		);
	}, [notes]);

  const addNote=(text)=>{
    const date=new Date();
    const newNote={
      text:text,
      date:date.toLocaleString(),
      id:nanoid()
    }
    const newNotes=[...notes,newNote];
    setNotes(newNotes);
  }

  const deleteNote=(id)=>{
   const newNotes= notes.filter((note)=>note.id!==id);
   setNotes(newNotes);
  }



  return (
    <div className={`${darkMode && 'dark-mode'}`}>
    <div className='container'>
      <Header handleToggleDarkMode={setDarkMode}/>
      <Search handleSearchNote={setSearchText}/>
      <NotesList notes={notes.filter((note)=>note.text.toLowerCase().includes(searchText))} handleAddNote={addNote} handleDeleteNote={deleteNote} />
    </div>
    </div>
  )
}

export default App