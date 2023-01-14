import React from 'react';
import NoteItemTitle from './NoteItem/NoteItemTitle';
import NoteItemBody from './NoteItem/NoteItemBody';
import DeleteButton from './NoteItem/NoteItemAction/ActionDeleteButton';
import ArchiveButton from './NoteItem/NoteItemAction/ActionArchiveButton';
import NoteItemDate from './NoteItem/NoteItemDate';

function NoteItem({title, body, id, createdAt, onDelete, onArchive}) {
    return (
        <div className="note-item">
            <div className="note-item__content">
                <NoteItemTitle title={title} />
                <NoteItemDate createdAt={createdAt} />
                <NoteItemBody body={body} />
            </div>
            <div className='note-item__action'>
                <DeleteButton id={id} onDelete={onDelete} />
                <ArchiveButton id={id} onArchive={onArchive} />
            </div>
        </div>
    );
}

export default NoteItem;