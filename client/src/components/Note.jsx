import React from "react";
import { Link } from "react-router-dom";
import axios from 'axios';

const Note = (props) => {

  const handleDelete = async (id) => {
    await axios.delete(`http://localhost:3001/${id}`)
    .then(res => {
      console.log(res)
      window.location.reload()
    })
    .catch(err => console.error(err))
  }

  <h2 className="heading">All Notes</h2>
  return (
    <div className="notescontainer">
      <div className="note">
        <h1>{props.title}</h1>
        <p>{props.content}</p>
        <button className="del" onClick={() => handleDelete(props.id)}>DELETE</button>
        <Link className="upd" to={`/update-note/${props.id}`}>UPDATE</Link>
      </div>
    </div>
  );
}

export default Note;
