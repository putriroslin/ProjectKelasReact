import React from 'react';
import NoteItem from './NoteItem';
import EmptyMessage from './NoteList/EmptyMessage';

function NoteList({ notes, onDelete, onArchive }) {
    return (
        <div className="notes-list">
            {notes.length===0
                ? (<EmptyMessage/>)
                : (notes.map((note) => (
                    <NoteItem 
                        key={note.id} 
                        id={note.id}
                        onDelete={onDelete}
                        onArchive={onArchive}
                    {...note} />
                    )))
            }
        </div>
    );
}

export default NoteList;