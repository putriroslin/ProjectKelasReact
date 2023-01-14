import React from "react";
import NoteList from "./NoteList";
import NoteInput from "./NoteInput";
import { getInitialData } from "../utils/index";
import { showFormattedDate } from "../utils/index";

class NoteApp extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        notes: getInitialData(),
        dates: showFormattedDate(),
      }
      this.onDeleteHandler = this.onDeleteHandler.bind(this);
      this.onArchiveHandler = this.onArchiveHandler.bind(this);
      this.onAddNoteHandler = this.onAddNoteHandler.bind(this);
      this.onDateHandler = this.onDateHandler.bind(this);
    }
    onDateHandler(dates) {
      this.setState({ dates });
    }
    onDeleteHandler(id) {
      const notes = this.state.notes.filter(note => note.id !== id);
      this.setState({ notes });
    }
    onArchiveHandler(id) {
      const notes = this.state.notes.filter(note => note.id !== id);
      this.setState({ notes });
    }
    onAddNoteHandler({ title, body }) {
      this.setState((prevState) => {
        return {
          notes: [
            ...prevState.notes,
            {
              id: +new Date(),
              title,
              createdAt : new Date().toISOString(),
              body,
            }
          ]
        }
      });
    }
    
    render() {
      return (
        <div className="note-app">
          <div className="note-app__header">
            <h1>Catatan Pribadi</h1>
            <div className="note-search">
              <input type="text" placeholder="Cari.."/>
            </div>
          </div>
          <div className="note-app__body">
            <div className="note-input">
              <h2>Buat Catatan</h2>
              <NoteInput addNote={this.onAddNoteHandler} />
            </div>
            <div className="note-list">
              <h2>Catatan Aktif</h2>
                <NoteList notes={this.state.notes} dates={this.state.dates} onDelete={this.onDeleteHandler} onArchive={this.onArchiveHandler} />
              <h2>Arsip</h2>
                <p className='notes-list__empty-message'>Tidak ada catatan</p>
            </div>
          </div>
        </div>
      )
    }
  }
export default NoteApp;