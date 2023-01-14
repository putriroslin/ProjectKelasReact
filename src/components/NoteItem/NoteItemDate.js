import React from 'react';

function NoteItemDate ({createdAt}) {
    return (
        <h3 className="note-item__date">{createdAt}</h3>
    );
}

export default NoteItemDate;