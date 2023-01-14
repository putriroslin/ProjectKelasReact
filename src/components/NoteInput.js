import React from 'react';
 
    class NoteInput extends React.Component {
      constructor(props) {
        super(props);
        this.state = {
          charcount:50,
          maxien:50,
          title: '',
          body: '',

        }
        this.onTitleChangeEventHandler = this.onTitleChangeEventHandler.bind(this);
        this.onBodyChangeEventHandler = this.onBodyChangeEventHandler.bind(this);
        this.onSubmitEventHandler = this.onSubmitEventHandler.bind(this);
      }
      countHandler = (e)=>{
        var lencount=e.target.value.length;
        var max_Len=this.state.maxlen;
        var result=max_Len-lencount;
        this.setState({
          charcount: result
        })
        if(result<=5)
        {
          document.getElementById("char").style.color="red";
        }
        else
        {
          document.getElementById("char").style.color="blue";
        }
      }
      onTitleChangeEventHandler(event) {
        var lencount=event.target.value.length;
        var max_Len=this.state.maxlen;
        var result=max_Len-lencount;
        this.setState(() => {
          return {
            title: event.target.value,
            charcount: result,
          }
        });
      }
      onBodyChangeEventHandler(event) {
        this.setState(() => {
          return {
            body: event.target.value,
          }
        });
      }
      onSubmitEventHandler(event) {
        event.preventDefault();
        this.props.addNote(this.state);
      }
      render() {
        return (
          <form className='note-input' onSubmit={this.onSubmitEventHandler}>
            <p className='note-input__title__char-limit' id='char'>Sisa Karakter : {this.state.charcount}</p>
            <input className='note-input__title' type="text" placeholder="Judul Catatan" value={this.state.title} onChange={this.onTitleChangeEventHandler} />
            <input className='note-input__body' type="text" placeholder="Isi Catatan" value={this.state.body} onChange={this.onBodyChangeEventHandler} />
            <button type="submit">Submit Catatan</button>
          </form>
        )
      }
    }
 
export default NoteInput;