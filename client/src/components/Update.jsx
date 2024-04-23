import React, { useState, useEffect } from 'react';
import { Link } from "react-router-dom";
import { useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';

const Update = () => {
  const [note, setNote] = useState({ title: '', content: '' });
  const navigate = useNavigate();
  const {id} = useParams()

  useEffect(() => {
    axios.get(`http://localhost:3001/getData/${id}`)
      .then(res => { console.log(res); 
        setNote(res.data)
      })   
      .catch(err => console.error(err))}, []);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setNote(prevNote => ({ ...prevNote, [name]: value }));
  };

  const handleUpdate = async (event) => {
    event.preventDefault();
    try {
      await axios.put(`http://localhost:3001/update-note/${id}`, note);
      navigate('/read-note');
    } catch (error) {
      console.error(error);
    }
  };


  return (
    <div>
        <h2 className="heading">Update Note</h2>
        <form onSubmit={handleUpdate}>
        
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
            <button type='submit' className="addbtn" to="/read-note">Update</button>
            
        </form>
    </div>
  )
}

export default Update;


