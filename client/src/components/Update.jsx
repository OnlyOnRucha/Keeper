import React, { useState, useEffect } from 'react';
import { Link } from "react-router-dom";
import { useParams, useNavigate } from 'react-router-dom';


const Update = () => {
  const {id} = useParams(); //it wil extract the id from the URL and store it in the {id}
  const [note, setNote] = useState({ title: '', content: ''});
  const navigate = useNavigate();

  useEffect(() => {
    axios.post('http://localhost:3001/'+id, note)
      .then(res =>  {
      console.log(res)
      navigate("/read-note")})
      .catch(err => console.error(err));
      setNote({ title: '', content: ''});
    }, []);
  

  return (
    <div>
        <h2 className="heading">Update Note</h2>
        <form>
            <input name="title" placeholder="Title" />
            <textarea name="content" placeholder="Take a note..." rows="3" />
            <Link className="addbtn" to="/read-note">Update</Link>
            
        </form>
    </div>
  )
}

export default Update;