import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Note from './Note';

const Read = () => {
  const [notes, setNotes] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:3001/')
      .then(res => {
        setNotes(res.data);
      })
      .catch(err => console.error(err));
  }, []); // Empty dependency array means this effect will only run once after the initial render

  return (
    <div>
      <h2 className="heading">All Notes</h2>
      {notes.map(note => (
        <Note key={note._id} title={note.title} content={note.content} />
      ))}
    </div>
  );
};

export default Read;
