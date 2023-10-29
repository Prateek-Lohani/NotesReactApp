import React, { useState } from 'react'

const AddNote = ({handleAddNote}) => {

    const [noteText,setNoteText]=useState('')
    const characterLimit=250;

    const handleChange=(e)=>{
        if(characterLimit-e.target.value.length>=0){
        setNoteText(e.target.value);
        }
    }

    const handleSaveClick=()=>{
        if(noteText.trim().length>0){
            handleAddNote(noteText);
            setNoteText('');
        }
        
        
    }


  return (
    <div className='note new'> 
        <textarea rows="8" cols="10" value={noteText} placeholder='Type text to add a note..' onChange={handleChange}>

        </textarea>
        <div className='note-footer'>
            <small>Limit: {characterLimit-noteText.length}</small>
            <button className='save' onClick={handleSaveClick}>Save</button>
        </div>
     </div>
  )
}

export default AddNote