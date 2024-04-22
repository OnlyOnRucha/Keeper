import React from "react";
import { Link } from "react-router-dom";

function Note(props) {
  <h2 className="heading">All Notes</h2>
  return (
    <div className="notescontainer">
      <div className="note">
        <h1>{props.title}</h1>
        <p>{props.content}</p>
        <button className="del">DELETE</button>
        <Link className="upd" to="/update-note">UPDATE</Link>
      </div>
    </div>
  );
}

export default Note;
