import React from 'react';
import { Link } from "react-router-dom";

const Update = () => {
  return (
    <div>
        <h2 className="heading">Update Note</h2>
        <form>
            <input name="title" placeholder="Title" />
            <textarea name="content" placeholder="Take a note..." rows="3" />
            <Link className="addbtn" to="/read-note">Update</Link>
            {console.log("hello")}
        </form>
    </div>
  )
}

export default Update;