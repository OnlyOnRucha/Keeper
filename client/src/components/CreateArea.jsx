import React, { useState } from 'react';
import axios from 'axios';
import { Navigate, useNavigate } from 'react-router-dom';

const CreateArea = () => {
  const [note, setNote] = useState({
    title: '',
    content: ''
  });

  const navigate = useNavigate();

  const handleChange = (event) => {
    const { name, value } = event.target;
    setNote(prevNote => ({
      ...prevNote,
      [name]: value
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    axios.post('http://localhost:3001/', note)
      .then(res =>  {
        console.log(res)
        navigate("/read-note")
      })
      .catch(err => console.error(err));
    setNote({
      title: '',
      content: ''
    });

  };

  return (
    <div>
      <h2 className="heading">Create Note</h2>
      <form onSubmit={handleSubmit}>
        <input
          name="title"
          onChange={handleChange}
          value={note.title}
          placeholder="Title"
        />
        <textarea
          name="content"
          onChange={handleChange}
          value={note.content}
          placeholder="Take a note..."
          rows="3"
        />
        <button type="submit">Add</button>
      </form>
    </div>
  );
};

export default CreateArea;
