import React from 'react'
import {MdDeleteForever} from 'react-icons/md'

const Note = ({id,text,date,handleDeleteNote}) => {
  return (
    <div className='note' key={id}>
        <span>{text}</span>
        <div className='note-footer'>
            <small>{date}</small>
            <div>
            
            <MdDeleteForever className='delete-icon' size='1.3em' onClick={()=>handleDeleteNote(id)}/>
            </div>
        </div>
    </div>
  )
}

export default Note