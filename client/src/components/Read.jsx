import React, { useState, useEffect } from 'react';
import { Link } from "react-router-dom";
import axios from 'axios';
import Note from './Note';

const Read = () => {
  const [notes, setNotes] = useState([]);

  //this helps display all notes
  useEffect(() => {
    axios.get('http://localhost:3001/')
      .then(res => { setNotes(res.data) })   //the data is what you're getting back from the GET request
      .catch(err => console.error(err))}, []);  // "Empty dependency array"-->[] means this effect will only run once after the initial render

  return (
    <div>
    <Link className="addnote" to="/">Add Note</Link>
      <h2 className="heading">All Notes</h2>
      {notes.map(note => (
        //this call to the <Note /> component displays all notes
        <Note id={note._id} key={note._id} title={note.title} content={note.content} />  //sending props to the <Note /> component
      ))}
    </div>
    
  );
};

export default Read;
