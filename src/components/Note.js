import React from 'react'
import {MdDeleteForever,MdEdit} from 'react-icons/md'

const Note = ({id,text,date,handleDeleteNote}) => {
  return (
    <div className='note' key={id}>
        <span>{text}</span>
        <div className='note-footer'>
            <small>{date}</small>
            <div>
            <MdEdit className='edit-icon' size='1.3em' />
            <MdDeleteForever className='delete-icon' size='1.3em' onClick={()=>handleDeleteNote(id)}/>
            </div>
        </div>
    </div>
  )
}

export default Note